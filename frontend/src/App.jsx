import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
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
        <Switch>
          <Route path="/pin/create" >
            <Navigation />
            <CreatePinPage />
          </Route>
          <Route path="/pins/:id">
            <Navigation />
            <ShowPin />
          </Route>
        <Route path="/users/:id/setting">
          <Navigation />
          <Setting />
        </Route>
        <Route  path="/user/:id">
          <Navigation />
          <ShowUser />
        </Route>
        <Route path="/boards/:id" >
          <Navigation />
          <ShowBoard />
        </Route>
        <Route path="/board/create">
          <Navigation />
          <CreateBoardPage />
        </Route>
        
          <Route 
  exact path="/" 
  render={(props) => sessionUser ? <PinIndex {...props} /> : <Splash {...props} key={window.location.pathname + window.location.search + window.location.hash} />} 
/>

        <Redirect to="/" />
        </Switch>
    </>
  );
}

export default App;