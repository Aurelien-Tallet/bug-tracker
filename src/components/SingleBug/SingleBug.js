import React from "react";
import { useLocation } from "react-router-dom";

function SingleBug() {
  const location = useLocation();
  return <div>{JSON.stringify(location.state.bug)}</div>;
}

export default SingleBug;
