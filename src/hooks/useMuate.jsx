import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import useLogout from "./useLogout";
import { usePostDataMutation } from "@/redux/api/queryApi";
import useInterceptor from "./useInterceptor";

const useMutate = (params = {}) => {
  const {
    callback,
    navigateBack = true,
    disableAlert = false,
    disableCheckToken = false,
  } = params;

  const interceptor = useInterceptor();

  useEffect(() => {
    if (!disableCheckToken) interceptor();
  }, []);

  const logout = useLogout();
  const navigate = useNavigate();
  const [mutate, { isLoading }] = usePostDataMutation();

  const onSubmit = async (url, values = undefined, method = "POST") => {
    console.log("body", values);
    const { data, error } = await mutate({
      url,
      method,
      body: values ?? {},
    });

    if (error || data?.success === false) {
      if (error?.status === 401) {
        toast.error("အကောင့်အသုံးပြုခွင့်မရှိပါ");

        return logout();
      }

      return toast.error(error?.data?.message || "လုပ်ဆောင်မှုမအောင်မြင်ပါ");
    }

    if (data?.message) {
      if (!disableAlert) toast.success(data?.message);
    }

    if (data && callback) {
      return callback(data?.data);
    }

    if (navigateBack && method !== "DELETE") {
      return navigate(-1);
    }

    return data;
  };

  return [onSubmit, { isLoading }];
};

export default useMutate;
