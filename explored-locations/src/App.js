import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import NewPlace from "./Places/Pages/NewPlace";
import Users from "./User/Pages/users";
import MainNavigation from "./Shared/Components/Navigation/MainNavigation";

function App() {
  // whatever is written in Router tag that get executed line by line do if Redirect component is at last, that will get executed everytime
  // thus we will end up at "/" always no matter what URL we write in browser
  // If we use switch, we will get to see only the url which we written in browser(sequencial execution doent happen in switch)
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
