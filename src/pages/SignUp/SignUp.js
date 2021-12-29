import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { setToken, signUp } from "../../services/utils";
import "./SignUp.scss";
function SignUp() {
  let navigate = useNavigate();
  let auth = useAuth();
  const [error, setError] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    let password = formData.get("password");
    const data = await signUp(username, password);
    if (data.result.status === "done") {
      auth.setAuth(true);
      setToken(data.result.token);
      navigate("/dashboard");
    } else {
      setError(data.result.message);
    }
  }

  return (
    <div>
      <p>Inscrivez-vous: </p>
      {error ?? <p>error</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <label>
          password: <input name="password" type="password" />
        </label>{" "}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUp;
