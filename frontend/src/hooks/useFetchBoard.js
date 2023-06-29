import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBoard } from '../store/boards';

export const useFetchBoard = ({ id, setLoadingBoard }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBoard(id)).then(() => {
      setLoadingBoard(false);
    });
  }, [dispatch, id,setLoadingBoard]);
};
