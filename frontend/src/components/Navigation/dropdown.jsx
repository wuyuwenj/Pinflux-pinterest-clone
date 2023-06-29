import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./dropdown.css";
import { useHistory,Redirect } from "react-router-dom";

const DropDown = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logoutClick = (e) => {
    e.preventDefault();
    setTimeout(setRedirect(true), 1000);

    dispatch(sessionActions.logout());
  };
  if (redirect) {
    return <Redirect to={`/`} />;
  }

  // link for table will change later
  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={openMenu}>
        <i className="fa-solid fa-angle-down"></i>
      </button>
      {showMenu && (
        <div className="dropdown-content">
          <div className="currentlyIn"> Currently in</div>
          <br />
          <Link to={`/user/${sessionUser.id}`}>
            <table>
              <tbody>
                <tr>
                  <td>
                    {sessionUser.imgurl ? (
                      <img className="pfpPic" src={sessionUser.imgurl} alt="" />
                    ) : (
                      <div className="Nopic">
                        {sessionUser.username && sessionUser.username[0]}
                      </div>
                    )}
                  </td>
                  <td>
                    <div className="username">{sessionUser.username}</div>
                    <div className="userinfo">Personal</div>
                    <div className="userinfo">{sessionUser.email}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Link>
          <br />
          <div className="moreoption">More options</div>
          <br />
          <Link to={`/users/${sessionUser.id}/setting`} className="setting">
            Settings
          </Link>

          <Link to="/" className="logout" onClick={logoutClick}>
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropDown;
