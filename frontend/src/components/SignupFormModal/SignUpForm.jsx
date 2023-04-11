import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import logo from '../../images/png/logo-black.png'
import LoginFormModal from "../LoginFormModal";
import Loading from "../LoadingPage/Loading";
function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setUsername(email.split('@')[0])
  }, [email])

  if (sessionUser) return <Redirect to="/" />;

  

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
      .then(() => {
        dispatch(sessionActions.login({ credential: email, password }))})
        .then(() => {
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

const handleform = () => {
    
}
// if(Loading) return <Loading />
  return (
    <>
      <div className='modalLogo'><a href=""><img className="mLogo" src={logo} alt="" width="55" height="55" /></a></div>

      <h1>Welcome to Pinflux</h1>
      {/* {Loading ? <Loading />: null} */}
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => <li key={error}>{error}</li>)}
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
        {/* <label>
          Age
          <br />
          <input
            className="modalinput"
            type="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            required
          />
        </label> */}
        <br />
        <br />
        <button type="submit" className="modalButton">Sign Up</button>
        {/* <div>
          Already a member?
          <p className="change-form" onClick={handleform}>Log in</p></div> */}
      </form>
    </>
  );
}

export default SignupForm;