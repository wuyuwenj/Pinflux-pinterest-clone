import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal';
import logo from '../../images/png/logo-black.png'
import './Navigation.css';
import { useState } from 'react';
import SearchBar from './searchbar';
import DropDown from './dropdown';

function Navigation() {
  // console.log("testest")
  const sessionUser = useSelector(state => state.session.user);
  const [selectbutton,setSelectButton] = useState("home");
  // console.log(sessionUser ? "loggedIn" : "loggedOut")
  
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='sessionButtons'>
        <p><a href="https://github.com/wuyuwenj">GitHub</a></p>
        <p><a href="https://www.linkedin.com/">LinkedIn</a></p>
        <div className="sessionbutt">
          <p><LoginFormModal /></p>
          <p><SignUpFormModal /></p>
        </div>
      </div>
    );
  }
  if (!sessionUser) {
  return(
    <div className="navBar" id='loggedOutNav'>
      <div className='navLogo'>
        <div><Link to="/"><img className="logo" src={logo} height="50"/></Link></div>
        <div><h1 className='pinflux'>Pinflux</h1></div>     
         </div>

      {sessionLinks}
    </div>

  )
  }
  if(sessionUser){
    return(
    <div className="navBar" id='loggedInNav'>
      <div><Link to="/"><img className="logo" src={logo} height="46"/></Link></div>
      <div className="frontNav">
        <div id='navLinkHome' onClick={() => setSelectButton("home")}><Link to="/" className={selectbutton === "home" ? 'selectedButton' : 'unselectedButton'}>Home</Link></div>
        <div className='navLink'><Link to="/pin/create" onClick={() => setSelectButton("createPin")} className={selectbutton === "createPin" ? 'selectedButton' : 'unselectedButton'}>Create</Link></div>
      </div>                     
      <div className='searchBar'><SearchBar></SearchBar></div>

      <div className='backNav'>
        <div className='icons'><button className="circleButton"><i class="fa-solid fa-bell"></i></button></div>
        <div className='icons'><button className="messageButton"><i class="fa-solid fa-comment-dots"></i></button></div>
          <div className='icons'><Link to={`/user/${sessionUser.id}`} className="userButton"><div className="name-text">{sessionUser.username[0]}</div></Link></div>
        <div className='icon'><DropDown></DropDown></div>
      </div>
    </div>
  );
    }
  
}

export default Navigation;
