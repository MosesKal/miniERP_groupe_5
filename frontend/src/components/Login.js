import React, { useState, useEffect, useRef } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import imgIllustration from "../assets/Illustration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import axios from "../api/axios";
const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const email = user;
      const password = pwd;
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true
        }
      );

      const accessToken = response?.data?.data?.accessToken;
      const roles = response?.data?.data?.roles;

      setAuth({ roles, accessToken });
      setUser("");
      setPwd("");
      // navigate(from, { replace: true });
      navigate(`/${roles}`);
      console.log(roles);
    } catch (err) {
      if (!err?.response) {
        setErrMsg(
          <>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="warning-icon"
            />{" "}
            No Server Response
          </>
        );
      } else if (err.response?.status === 400) {
        setErrMsg(
          <>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="warning-icon"
            />{" "}
            Missing Username or Password
          </>
        );
      } else if (err.response?.status === 401) {
        setErrMsg(
          <>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="warning-icon"
            />{" "}
            Unauthorized
          </>
        );
      } else {
        setErrMsg(
          <>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="warning-icon"
            />{" "}
            Login Failed
          </>
        );
      }

      errRef.current.focus();
    }
  };

  return (
    <div className="login-Containers">
      <section className="illustration-wrapper">
        <div className="logo">
          <Icon icon="icon-park-solid:blockchain" className="icon-logo" />
          <span className="app-title">small-erp</span>
        </div>
        <div className="icon-illustration">
          <img src={imgIllustration} alt="Logo" />
        </div>
      </section>

      <section className="login-form-container">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <form onSubmit={handleSubmit}>
          <h1 className="signin-title">Connexion</h1>
          <label htmlFor="username">Adresse Mail</label>
          <input
            type="mail"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button className="btn-signup">Connexion</button>

          <div className="signup-link">
            <p>Vous n'avez pas de compte ?</p>
            <span className="line">
              <Link to="/register">Créer</Link>
            </span>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
