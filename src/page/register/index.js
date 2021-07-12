import '../login/login.css';
import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect, useState } from 'react';
import {RegisterUser} from '../../store/user'

function Register(){
    const dispatch = useDispatch()
    //const { user } = useSelector(state => state.user)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(RegisterUser(username, password));
    }
    return(
        <div id="register">
            <h3 className="text-center text-white pt-5">Register form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" onSubmit={(e)=>handleSubmit(e)}>
                                <h3 className="text-center text-info">Register</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br/>
                                    <input type="text" name="username" id="username" className="form-control" onChange={(e) => setUsername(e.target.value.toString())}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br/>
                                    <input type="text" name="password" id="password" className="form-control" onChange={(e) => {setPassword(e.target.value.toString()); console.log(username)}}/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register