import { useContext, useRef, useState } from "react";
import { Link, Switch, Route ,useHistory } from "react-router-dom";
import { IdTokenn } from "../ContextAPI/IdToken.jsx";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory();
  const [idToken, setIdToken] = useContext(IdTokenn);
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  //  const val = 99;

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9PMUJE_899hywkB9GyCiIviZFDhC7ueg";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9PMUJE_899hywkB9GyCiIviZFDhC7ueg";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        console.log(data);
        setIdToken({ id: data.idToken, bool: true });
        history.replace('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className={classes.auth}>
      {/* <Link to={`/auth/${val}`}>Click me</Link> */}
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>
            {!isLoading ? (isLogin ? "Login" : "Create Account") : "Sending.."}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
