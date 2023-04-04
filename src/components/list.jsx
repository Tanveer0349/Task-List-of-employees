import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "./common/loader";
import { useFetchData } from "./utils/useFetchData";

const api = "https://641b1f8e1f5d999a445bf904.mockapi.io/Employee";
const List = () => {
  const employees = useSelector((state) => state.employees.employees);
  const isLoading = useSelector((state) => state.employees.isLoading);
  useFetchData(api);
  return isLoading ? (
    <Loader />
  ) : (
    employees.map((item) => <li key={item.id}>{item.name}</li>)
  );
};

export default List;
