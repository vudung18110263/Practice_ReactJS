import "../../page/login/login.css";
import {useDispatch,useSelector} from 'react-redux'
import React, { useEffect, useState } from 'react';
import {loginUser,updateUser} from '../../store/user'
import {
    Redirect,
    Link
  } from "react-router-dom";
function Form(props) {
    const dispatch = useDispatch()
    const { islogin,user } = useSelector(state => state.user)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [offset, setOfset] = useState(0)
    const [limit, setLimit] = useState(0)
    const handleSubmitUpdateUser = event => {
        event.preventDefault();
        dispatch(updateUser(user, password));

    }
    const handleSubmitFindUser = event =>{
        event.preventDefault();
    }
    return( 
        <div id="login">
            <h3 className="text-center text-white pt-5">{props.Name}</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            {props.Name==="Change Password" ? 

                                <form id="login-form" className="form" className="form" onSubmit={(e)=>handleSubmitUpdateUser(e)}>
                                    <h3 className="text-center text-info">{props.name}</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Username:</label><br/>
                                        <input type="text" name="username" id="username" className="form-control"
                                        disabled={true} value={user}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label><br/>
                                        <input type="text" name="password" id="password" className="form-control"
                                        onChange={(e)=> setPassword(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                    
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                    </div>
                                </form>

                            :props.Name==="Find Users" ?
                            
                                <form id="login-form" className="form" className="form" onSubmit={(e)=>handleSubmitFindUser(e)}>
                                    <h3 className="text-center text-info">{props.name}</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Offset</label><br/>
                                        <input type="number" min="0" name="username" id="username" className="form-control"
                                        onChange={(e)=> setOfset(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Limit</label><br/>
                                        <input type="number" min="0" name="password" id="password" className="form-control"
                                        onChange={(e)=> setLimit(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                    
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                    </div>
                                </form>
                            : <></>}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Form