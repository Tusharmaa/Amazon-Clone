import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "firebase";

function Login() {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault(); //Stops the refresh
    //do the login logic. Firebase authentication
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //Logged in , redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault(); //Stops the refresh
    //do the register logic. Firebase authentication
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created auser and logged in
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt="logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login-signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={register}
          type="submit"
          className="login-registerButton"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
