import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPins } from '../store/pins';
export const useFetchPins = (setLoading) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPins()).then(() => {
        setLoading(false);
    });
  }, [dispatch]);
};

