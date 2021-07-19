
import Login from './page/login'
import Register from './page/register'
import IndexPage from'./page/index'
import UsersPage from './page/index/users'
import UserManagerPage from './page/index/UserManagerPage'
import NavBar from './components/NavBar/NavBar.js'
import DetailUser from './page/detailUser/detailUser'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact><IndexPage/></Route>
          <Route path="/login" exact><Login/></Route>
          <Route path="/findUser" exact><UsersPage/> </Route>
          <Route path="/register" exact><Register/></Route>
          <Route path="/usermanager" ><UserManagerPage/></Route>
          <Route path="/detail"><DetailUser/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
