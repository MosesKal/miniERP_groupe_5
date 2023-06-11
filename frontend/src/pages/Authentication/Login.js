import React, { Fragment, useState } from "react";

const Login = () => {
  const [prenom, setPrenom] = useState("prenom");
  const [nom, setNom] = useState("nom");
  const [email, setEmail] = useState("test@gmail.com");
  const [telephone, setTelephone] = useState("0992422969");
  const [password, setPassword] = useState("moses");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { prenom, nom, email, telephone, password };
      const response = await fetch("http://localhost:2000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(body)
    //   window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <div className="container-fluid taille">
        <div className="row taille">
          <div className="col-4">Column</div>
          <div className="col-8">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-8">
                  <form onSubmit={onSubmitForm}>
                    <div className="mb-3">
                      <label htmlFor="prenom" className="form-label">
                        Prenom
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="prenom"
                        aria-describedby="prenomHelp"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                      />
                      <div id="prenomHelp" className="form-text">
                        vous ne pouvez pas soumettre ce formulaire sans prenom.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nom" className="form-label">
                        Nom
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nom"
                        aria-describedby="nomHelp"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                      />
                      <div id="nomHelp" className="form-text">
                        vous ne pouvez pas soumettre ce formulaire sans nom.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Adresse mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div id="emailHelp" className="form-text">
                        vous ne pouvez pas soumettre ce formulaire sans .
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="telephone" className="form-label">
                        Telephone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="telephone"
                        aria-describedby="telephoneHelp"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                      <div id="telephoneHelp" className="form-text">
                        vous ne pouvez pas soumettre ce formulaire sans .
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Mot de passe
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div> */}
                    <button type="submit" className="btn-lg btn-primary">
                      Créer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
