import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import CreatePinPage from "./components/pins/create/createpin";
import PinIndex from "./components/pins/index/renderPins";
import ShowPin from "./components/pins/show/showPin";
import ShowUser from "./components/user/showUser";
import CreateBoardPage from "./components/board/create/createBoard";
import ShowBoard from "./components/board/show/showBoard";
import Splash from "./components/Splash/splash";
import { useSelector } from "react-redux";
import Setting from "./components/user/setting/setting";

function App() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/pin/create" >
            <CreatePinPage />
          </Route>
          <Route path="/pins/:id">
            <ShowPin />
          </Route>
        <Route path="/users/:id/setting">
          <Setting />
        </Route>
        <Route  path="/user/:id">
          <ShowUser />
        </Route>
        <Route path="/boards/:id" >
          <ShowBoard />
        </Route>
        <Route path="/board/create">
          <CreateBoardPage />
        </Route>
        
          <Route exact path="/">
          {sessionUser ?  <PinIndex />:<Splash /> }

          </Route>
          
        </Switch>
    </>
  );
}

export default App;