import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { addIssue, deleteToken, getToken, logOut } from "../../services/utils";

function Dashboard() {
  const [user, setToken] = useState(getToken());
  const auth = useAuth();
  async function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let title = formData.get("title");
    let description = formData.get("description");
    const data = await addIssue({ title, description });
    if (data.result.status === "done") {
      window.location.reload();
    } else {
      throw new Error("add issue Failed !");
    }
  }
  const disconnect = async () => {
    logOut(user.token);
    deleteToken();
    auth.setAuth(false);
  };
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="bugs" className="nav-link">
            Listes des bugs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="mybugs" className="nav-link">
            Mes bugs
          </Link>
        </li>
      </ul>
      <button onClick={disconnect}>Se déconnecter</button>
      <div className="create__issue">
        <form onSubmit={handleSubmit}>
          <label>
            Titre: <input name="title" type="text" />
          </label>{" "}
          <label>
            Description: <textarea name="description" />
          </label>{" "}
          <button type="submit">Ajouter</button>
        </form>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
