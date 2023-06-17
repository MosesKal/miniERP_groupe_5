import React from "react";
import { Icon } from "@iconify/react";
import imgIllustration from "../assets/Illustration.png";


const Attente = () => {


  return (
    <div className="register-containers">
      {/* {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/Login">Sign In</Link>
          </p>
        </section>
      ) : ()} */}
      <section className="illustration-wrapper-register">
        <div className="logo">
          <Icon icon="icon-park-solid:blockchain" className="icon-logo" />
          <span className="app-title">small-erp</span>
        </div>
        <div className="icon-illustration">
          <img src={imgIllustration} alt="Logo" />
        </div>
      </section>

      <section className="register-former-container">

      </section>
    </div>
  );
};
export default Attente;
