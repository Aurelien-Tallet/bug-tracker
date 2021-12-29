import React from "react";
import { Link } from "react-router-dom";

function BugsTable({ bugs }) {
  return (
    <section>
      {bugs?.map((bug) => (
        <Link to={`/dashboard/bugs/${bug?.user_id}`} state={{bug}}><p>{bug.title}</p></Link>
      ))}
    </section>
  );
}

export default BugsTable;
