import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { usePostDataMutation } from "@/redux/api/queryApi";
import useLogout from "./useLogout";
import { useAppDispatch } from "@/redux/hook";
import { regenrate } from "@/redux/services/keySlice";

const useMutate = (params) => {
  const { callback, navigateBack = true, disableAlert = false } = params;

  const logout = useLogout();
  const navigate = useNavigate();
  const [mutate, { isLoading }] = usePostDataMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (url, values = undefined, method = "POST") => {
    const { data, error } = await mutate({
      url,
      method,
      body: values ?? {},
    });

    if (error) {
      if (error?.status === 401) {
        toast.error("အကောင့်အသုံးပြုခွင့်မရှိပါ");

        return logout();
      }

      return toast.error(error?.data?.message || "လုပ်ဆောင်မှုမအောင်မြင်ပါ");
    }

    if (data?.message) {
      if (!disableAlert) toast.success(data?.message);

      if (method === "DELETE") {
        dispatch(regenrate());
      }
    }

    if (data && callback) {
      return callback(data);
    }

    if (navigateBack && method !== "DELETE") {
      return navigate(-1);
    }
  };

  return [onSubmit, { isLoading }];
};

export default useMutate;
