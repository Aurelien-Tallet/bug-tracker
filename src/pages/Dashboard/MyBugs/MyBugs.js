import React from "react";
import BugsTable from "../../../components/BugsTable/BugsTable";
import useFecth from "../../../hooks/useFetch";
import { getToken } from "../../../services/utils";
const URL = process.env.REACT_APP_BASE_URL;

function MyBugs() {
  const { data, loading, error } = useFecth(
    `${URL}list/${getToken().token}/${getToken().userID}`
  );
  console.log(data);
  return (
    <div>
      Mes bugs
      <BugsTable bugs={data?.result?.bug} />
    </div>
  );
}

export default MyBugs;
