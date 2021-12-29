import React from "react";
import { Outlet } from "react-router-dom";
import BugsTable from "../../../components/BugsTable/BugsTable";
import useFecth from "../../../hooks/useFetch";
import { getToken } from "../../../services/utils";
const URL = process.env.REACT_APP_BASE_URL;
function Bugs() {
  const { data, loading, error } = useFecth(`${URL}list/${getToken().token}/0`);
  return (
    <div>
      Liste de Bugs
      <BugsTable bugs={data?.result?.bug} />
    </div>
  );
}

export default Bugs;
