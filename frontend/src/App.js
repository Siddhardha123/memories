
import './App.css';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import {BrowserRouter as Router , Route,Redirect,Switch} from "react-router-dom";
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users />
          </Route>
          <Route path="/places/new" exact={true}>
            <NewPlace />
          </Route>
          <Redirect to="/" />
          <Route path="/:userId/places" exact={true}>
              <UserPlaces />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
