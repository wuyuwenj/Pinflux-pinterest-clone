import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPin } from '../store/pins';
export const useFetchPin = ({id,setLoadingPin}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPin(id)).then(() => {
        setLoadingPin(false);
    });
  }, [dispatch,id,setLoadingPin]);
};
