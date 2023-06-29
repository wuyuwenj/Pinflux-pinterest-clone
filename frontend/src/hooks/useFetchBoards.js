import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBoards } from '../store/boards';
export const useFetchBoards = ({id,setLoadingBoards}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards(id)).then(() => {
        setLoadingBoards(false);
    });
  }, [dispatch,id,setLoadingBoards]);
};
