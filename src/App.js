
import Login from './page/login'
import Register from './page/register'
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
          <Route path="/" exact><Login/> </Route>
          <Route path="/register" exact><Register/> </Route>
        </Switch>
      </Router>
      {/* <Login/> 
      <Register/>*/}
    </div>

  );
}

export default App;
