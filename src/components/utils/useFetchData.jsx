import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees } from "../../redux/actions";
import axios from 'axios';

export const useFetchData = (endpoint) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const { data } = await axios.get(
              endpoint
            );
      
            dispatch(getEmployees(data));
          } catch (ex) {
            console.log(ex);
          }
        };
    fetchData();
  }, [dispatch, endpoint]);
};

