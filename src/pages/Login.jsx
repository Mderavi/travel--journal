import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import PageNav from "../Components/PageNav";
import Button from "../Components/Button";
import { AuthProvider, useAuth } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }
  useEffect(
    function () {
      if (isAthenticated) navigate("/app", { replace: true });
    },
    [isAthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">LOGIN</Button>
        </div>
      </form>
    </main>
  );
}
