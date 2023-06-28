import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/user';

export const useFetchUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
};
