import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./../api/axios";

const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PHONE_REGEX = /^(\+243|0)[1-9]\d{8}$/;

// cont TEL_REGEX

const REGISTER_URL = "/register";

const Register = () => {
  const prenomRef = useRef();
  const nomRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();
  const errRef = useRef();

  const [prenom, setPrenom] = useState("");
  const [validPrenom, setValidPrenom] = useState(false);
  const [prenomFocus, setPrenomFocus] = useState(false);

  const [nom, setNom] = useState("");
  const [validnom, setValidNom] = useState(false);
  const [nomFocus, setNomFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validemail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [telephone, setTelephone] = useState("");
  const [validtelephone, setValidTelephone] = useState(false);
  const [telephoneFocus, setTelephoneFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  /*** useEffect */

  useEffect(() => {
    prenomRef.current.focus();
  }, []);

  useEffect(() => {
    nomRef.current.focus();
  }, []);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    telephoneRef.current.focus();
  }, []);

  /*** REGEX ****/
  useEffect(() => {
    setValidPrenom(NAME_REGEX.test(prenom));
  }, [prenom]);

  useEffect(() => {
    setValidNom(NAME_REGEX.test(nom));
  }, [nom]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidTelephone(PHONE_REGEX.test(telephone));
  }, [telephone]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  /**--------- */

  useEffect(() => {
    setErrMsg("");
  }, [prenom, nom, email, telephone, pwd, matchPwd]);

  /** handleSubmit **/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = NAME_REGEX.test(prenom);
    const v2 = NAME_REGEX.test(nom);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PHONE_REGEX.test(telephone);
    const v5 = PWD_REGEX.test(pwd);

    if (!v1 || !v5 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ prenom, nom, email, telephone, pwd }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);

      setPrenom("");
      setNom("");
      setEmail("");
      setTelephone("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };
  console.log("response");

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            {/**------------------------------------------------------------------ */}
            <label htmlFor="prenom">
              Prenom:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPrenom ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPrenom || !prenom ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="prenom"
              ref={prenomRef}
              autoComplete="off"
              onChange={(e) => setPrenom(e.target.value)}
              value={prenom}
              required
              aria-invalid={validPrenom ? "false" : "true"}
              aria-describedby="uidnote1"
              onFocus={() => setPrenomFocus(true)}
              onBlur={() => setPrenomFocus(false)}
            />
            <p
              id="uidnote1"
              className={
                prenomFocus && prenom && !validPrenom
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            {/**----------------------------------------------------------------------- */}

            {/**------------------------------------------------------------------ */}
            <label htmlFor="nom">
              Nom :
              <FontAwesomeIcon
                icon={faCheck}
                className={validnom ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validnom || !nom ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="prenom"
              ref={nomRef}
              autoComplete="off"
              onChange={(e) => setNom(e.target.value)}
              value={nom}
              required
              aria-invalid={validnom ? "false" : "true"}
              aria-describedby="uidnote2"
              onFocus={() => setNomFocus(true)}
              onBlur={() => setNomFocus(false)}
            />
            <p
              id="uidnote2"
              className={
                nomFocus && nom && !validnom ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            {/**----------------------------------------------------------------------- */}

            {/**------------------------------------------------------------------ */}
            <label htmlFor="email">
              Email :
              <FontAwesomeIcon
                icon={faCheck}
                className={email ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={!email ? "hide" : "invalid"}
              />
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validemail ? "false" : "true"}
              aria-describedby="uidnote3"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="uidnote3"
              className={
                emailFocus && email && !setEmail ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            {/**----------------------------------------------------------------------- */}
            {/**------------------------------------------------------------------ */}
            <label htmlFor="telephone">
              Telephone :
              <FontAwesomeIcon
                icon={faCheck}
                className={telephone ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validtelephone || !telephone ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="telephone"
              ref={telephoneRef}
              autoComplete="off"
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
              required
              aria-invalid={validtelephone ? "false" : "true"}
              aria-describedby="uidnote4"
              onFocus={() => setTelephoneFocus(true)}
              onBlur={() => setTelephoneFocus(false)}
            />
            <p
              id="uidnote4"
              className={
                telephoneFocus && telephone && !setTelephone
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            {/**----------------------------------------------------------------------- */}

            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button
              disabled={
                !validPrenom ||
                !validnom ||
                !validemail ||
                !validtelephone ||
                !validPwd ||
                !validMatch
                  ? true
                  : false
              }
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="#">Sign In</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};
export default Register;
