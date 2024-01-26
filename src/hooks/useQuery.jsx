/* eslint-disable react-hooks/rules-of-hooks */
import toast from "react-hot-toast";
import { useEffect, useState, useCallback } from "react";

import { useGetDataQuery } from "@/redux/api/queryApi";
import useLogout from "./useLogout";

const useQuery = (params = {}) => {
  const { url, callback, kill = false } = params;

  if (kill) return { isLoading: false };
  const logout = useLogout();
  const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useGetDataQuery(url);

  const initLoading = useCallback(() => setIsLoading(true), [url]);

  useEffect(() => initLoading(), [initLoading]);

  useEffect(() => {
    if (data && callback) {
      callback(data?.data);
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setIsLoading(false);
      if (error.status === 401) {
        toast.error("အကောင့်အသုံးပြုခွင့်မရှိပါ");

        logout();
      }

      toast.error("လုပ်ဆောင်မှုမအောင်မြင်ပါ");
    }
  }, [error]);

  return {
    isLoading,
    isError: error?.status > 400,
    total: data?.meta?.last_page || 0,
    data: data?.data || [],
  };
};

export default useQuery;
