import {useDispatch,useSelector} from 'react-redux'
import React from 'react';
import {deleteUser} from '../../store/user'
function ListUsers (){
    const dispatch = useDispatch()
    const {listUsers} = useSelector(state => state.user)

    
    return(
        <>
        <br/>
        <br/>
        <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-6">
            <ul className="list-group">
                {listUsers == null ? <></> :
                    <li className="list-group-item active">
                        <div className="row">
                            <div className="col-md-5">
                                username
                            </div>
                            <div className="col-md-5">
                                password
                            </div>
                            <div className="col-md-2">
                                
                            </div>
                        </div>
                    </li>
                }
                {listUsers == null ? <></> : listUsers.map( (item,index) =>{
                    return (
                        <li className="list-group-item" key={index}>
                            <div className="row">
                                <div className="col-md-5">
                                    {item.name}
                                </div>
                                <div className="col-md-5">
                                    {item.password}
                                </div>
                                <div className="col-md-2">
                                    <button type="button" className="btn btn-danger" onClick={(e)=>{dispatch(deleteUser(item.id,index))}}>Delete</button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>

          
        </div>
            
      <div className="col-md-3">
      </div>
      </div>
      </>
    )
}
export default ListUsers