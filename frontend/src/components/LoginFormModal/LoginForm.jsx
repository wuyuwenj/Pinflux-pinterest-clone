import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import logo from '../../images/png/logo-black.png'
import Loading from "../LoadingPage/Loading";
function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    setErrors([]);
  
    if (!credential||!password)return;
    return dispatch(sessionActions.login({ credential, password })).then(() => {
      setLoading(false);
    }).catch(async (res) => {
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

  const handleDemo = async () => {
    setCredential("DemoUser1@email.com");
    setPassword("password");
    const user = { credential: "DemoUser1@email.com", password: "password" };

    try {
      await dispatch(sessionActions.login(user));
      // Wait for the login dispatch to finish before calling handleSubmit
      handleSubmit(new Event("submit"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='modalLogo'><a href=""><img className="mLogo" src={logo} alt="" width="55" height="55" /></a></div>
      <h1>Welcome to Pinflux</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label className="modalEmail">
          Email Address
          <br/>
          <input
            className="modalinput"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
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
        {isLoading&&<Loading />}
        <button type="submit" className="modalButton">Log In</button>

        <br />
        <p className="OR">OR</p>
        <button className="modalButton" onClick={handleDemo}>Sign In with Demo User</button>
        </form>
    </>
  );
}

export default LoginForm;