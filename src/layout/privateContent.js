import { getHistoryData, isUserLoggedIn } from "@/action";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";

export default function PrivateContent({ children }) {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getHistoryData());
    }
  }, [auth.authenticate, dispatch]);

  return children;
}
