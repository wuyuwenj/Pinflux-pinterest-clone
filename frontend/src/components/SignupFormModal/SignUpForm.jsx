import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import Loading from "../LoadingPage/Loading";
import "./SignupForm.css";
import logo from "../../images/png/logo-black.png";
function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setUsername(email.split("@")[0]);
  }, [email]);

  if (sessionUser) {
    history.push("/");
  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.signup({ email, username, password }))
      .then(() => {
        dispatch(sessionActions.login({ credential: email, password }));
      })
      .then(() => {
        setLoading(false);
      })
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <>
      <div className="modalLogo">
        <a href="">
          <img className="mLogo" src={logo} alt="" width="55" height="55" />
        </a>
      </div>

      <h1>Welcome to Pinflux</h1>

      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <br />
          <input
            className="modalinput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </label>
        <br />
        <label>
          Password
          <br />
          <input
            className="modalinput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </label>
        <br />
        <br />
        <br />
        {isLoading ? (
          <Loading />
        ) : (
          <button type="submit" className="modalButton">
            Sign Up
          </button>
        )}
      </form>
    </>
  );
}

export default SignupForm;
