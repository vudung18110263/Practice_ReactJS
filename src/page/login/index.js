import "./login.css";
import {
    Link
  } from "react-router-dom";
function Login() {
    return(
        <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="" method="post">
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br/>
                                    <input type="text" name="username" id="username" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br/>
                                    <input type="text" name="password" id="password" className="form-control"/>
                                </div>
                                <div className="form-group">
                                   
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                </div>
                                <div id="register-link" className="text-right">
                                    {/* <a href="#" className="text-info">Register here</a> */}
                                    <br/>
                                    <Link to="/register" className="text-info">Register here</Link>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login