import React, { useState, useEffect, useRef } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import imgIllustration from "../assets/Illustration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import Switch from "@mui/material/Switch";

import axios from "../api/axios";
const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

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
        }
      );

      console.log(response.data.data);
      const accessToken = response?.data?.data?.accessToken;
      const roles = response?.data?.data?.roles;

      setAuth({ roles, accessToken });
      setUser("");
      setPwd("");

      navigate(`/${roles}`);
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
      } else if (err.response?.status === 403) {
        setErrMsg(
          <>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="warning-icon"
            />{" "}
            {err.response.data.message}
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
      console.log(err);
      errRef.current.focus();
    }
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

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
          <span className="signin-msg">
            Entrez votre email et votre mot de passe pour vous connectez
          </span>

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

          <div className="rememberMe">
            <Switch {...label} />
            Se souvenir de moi
          </div>
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
