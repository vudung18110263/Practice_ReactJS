import {useDispatch,useSelector} from 'react-redux'
import Form from '../../components/UI/Form';
import ListUsers from '../../components/UI/ListUser';
import {
    Redirect
  } from "react-router-dom";

function UsersPage(){
    const dispatch = useDispatch()
    const { user,isLogin } = useSelector(state => state.user)
    if (!isLogin){
        return(
            <Redirect to="/login"/>
        );
    }
    else {

        return(
            
            <>
            { user === "admin" ?
            <>
            <Form Name='Find Users'/>
            <ListUsers/>
            </>
            : <></>}
            </>

        );


    }
    
}

export default UsersPage;