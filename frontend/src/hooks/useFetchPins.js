import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPins } from '../store/pins';
export const useFetchPins = (setLoadingPins) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPins()).then(() => {
        setLoadingPins(false);
    });
  }, [dispatch]);
};

