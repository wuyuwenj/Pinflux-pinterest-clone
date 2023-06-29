import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/user";

export const useFetchUsers = ({ setLoadingUsers, dependency=null }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()).then(() => {
      setLoadingUsers(false);
    });
  }, [dispatch, dependency]);
};
