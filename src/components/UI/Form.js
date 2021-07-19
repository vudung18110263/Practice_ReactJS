import "../../page/login/login.css";
import {useDispatch,useSelector} from 'react-redux'
import React, {  useState } from 'react';
import {updateUser,findUsers,deleteUser} from '../../store/user'
import { FlashOnRounded } from "@material-ui/icons";
function Form(props) {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const [password, setPassword] = useState('')
    const [offset, setOfset] = useState(0)
    const [limit, setLimit] = useState(0)
    const handleSubmitUpdateUser = event => {
        event.preventDefault();
        dispatch(updateUser(user, password));
    }
    const handleSubmitFindUser = event =>{
        event.preventDefault();
        dispatch(findUsers(user,offset,limit))
    }
    const handleChangeUser = event =>{
        event.preventDefault();
        dispatch(updateUser(props.User,password));
    }
    // const handleDisabled = event =>{
    //     event.preventDefault();
    //     if(document.getElementById("password").disabled)
    //     {
    //         document.getElementById("password").disabled=false
    //         document.getElementById("submit").disabled=false
    //         document.getElementById("delete").disabled=false
    //     }
    //     else
    //     {
    //         document.getElementById("password").disabled=true
    //         document.getElementById("submit").disabled=true
    //         document.getElementById("delete").disabled=true
    //     }
        
    // }
    const handleSubmitUpdateUserDetail = event =>{
        event.preventDefault();
        dispatch(updateUser(props.User.name, password));
        // document.getElementById("submit").disabled=true
        // document.getElementById("delete").disabled=true
        // document.getElementById("password").disabled=true

    }
    return( 
        <div id="login">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            {props.Name==="Change Password" ? 

                                <form id="login-form" className="form"  onSubmit={(e)=>handleSubmitUpdateUser(e)}>
                                    <h3 className="text-center text-info">{props.name}</h3>
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <label htmlFor="username" className="text-info">Username:</label><br/>
                                            <input type="text" name="username" id="username" className="form-control"
                                            disabled={true} value={user}/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="password" className="text-info">Password:</label><br/>
                                            <input type="text" name="password" id="password" className="form-control"
                                            onChange={(e)=> setPassword(e.target.value)}/>
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                    
                                        <input type="submit" name="submit" className="btn btn-info btn-md submit" value="submit"/>
                                    </div>
                                </form>

                            :props.Name==="Find Users" ?
                            
                                <form id="login-form" className="form" onSubmit={(e)=>handleSubmitFindUser(e)}>
                                    <h3 className="text-center text-info">{props.name}</h3>
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <label htmlFor="username" className="text-info">Offset</label><br/>
                                            <input type="number" min="0" name="username" id="username" className="form-control"
                                            onChange={(e)=> setOfset(e.target.value)}/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="password" className="text-info">Limit</label><br/>
                                            <input type="number" min="0" name="password" id="password" className="form-control"
                                            onChange={(e)=> setLimit(e.target.value)}/>
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                    
                                        <input type="submit" name="submit" className="btn btn-info btn-md submit" value="submit"/>
                                    </div>
                                </form>
                            :props.Name==="Detail" ? 
                                <form id="login-form" className="form"  onSubmit={(e)=>handleSubmitUpdateUserDetail(e)}>
                                    <h3 className="text-center text-info">{props.name}</h3>
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <label htmlFor="username" className="text-info">Username:</label><br/>
                                            <input type="text" name="username" id="username" className="form-control"
                                            disabled={true} value={props.User.name}/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="password" className="text-info">Password:</label><br/>
                                            <input type="text" name="password" id="password" className="form-control"
                                            placeholder={props.User.password}
                                            onChange={(e)=> setPassword(e.target.value)}/>
                                        </div>
                                        
                                    </div>
                                    <br/>
                                    <div className="form-group row">
                                        {/* <div className="col-md-6 d-flex justify-content-center">
                                            <button className="btn btn-info btn-md submit" id="update" onClick={(e)=>handleDisabled(e)}>Update</button>
                                        </div> */}
                                        <div className="col-md-6 ">
                                            <input type="submit" name="submit" id="submit" className="btn btn-info btn-md submit" value="submit"
                                            />
                                        </div>
                                        {/* <div className="col-md-4 d-flex justify-content-center">
                                            <button className="btn btn-info btn-md submit" 
                                            disabled={true} 
                                            onClick={(e)=>{
                                                e.preventDefault()
                                                dispatch(deleteUser(props.User.id))
                                                document.getElementById("submit").disabled=true
                                                document.getElementById("delete").disabled=true
                                                document.getElementById("password").disabled=true
                                            }} id="delete">Delete</button>
                                        </div> */}
                                    </div>
                                </form>
                            :<></>}
                            
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Form