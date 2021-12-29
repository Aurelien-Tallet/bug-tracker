import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { setToken, signIn } from "../../services/utils";
import "./SignIn.scss";
function SignIn() {
  let navigate = useNavigate();
  let auth = useAuth();

  const [error, setError] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username");
    let password = formData.get("password");
    const data = await signIn(username, password);
    if (data.result.status === "done") {
      auth.setAuth(true);
      setToken({ token: data.result.token, userID: data.result.id });
      navigate("/dashboard");
    } else {
      setError(data.result.message);
    }
  }

  return (
    <Container className="col-3 ">
      <Form onSubmit={handleSubmit} variant="outline-secondar">
        <Form.Group className="mx-5 my-3" controlId="formBasicEmail">
          <Form.Label>Nom :</Form.Label>
          <Form.Control
            type="username"
            placeholder="Entrer votre nom"
            name="username"
            required
          />
        </Form.Group>

        <Form.Group className="mx-5 my-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe :</Form.Label>
          <Form.Control
            type="password"
            placeholder="Mot de passe"
            required
            name="password"
          />
        </Form.Group>
        <Button variant="primary" className="mx-5 my-3" type="submit">
          Se connecter
        </Button>
      </Form>
      {error ? (
        <Alert variant="danger" size="xs" className="mx-5 my-3">
          {error}
        </Alert>
      ) : (
        ""
      )}
    </Container>
  );
}

export default SignIn;
