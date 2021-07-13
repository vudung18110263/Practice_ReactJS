
import Login from './page/login'
import Register from './page/register'
import IndexPage from'./page/index'
import FindUserPage from './page/index/findUser'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact><IndexPage/></Route>
          <Route path="/login" exact><Login/> </Route>
          <Route path="/findUser" exact><FindUserPage/> </Route>
          <Route path="/register" exact><Register/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
