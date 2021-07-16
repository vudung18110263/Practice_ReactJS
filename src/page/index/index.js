import {useDispatch,useSelector} from 'react-redux'
import Form from '../../components/UI/Form';
import ListUsers from '../../components/UI/ListUser';
import {logoutUser} from '../../store/user'
import {
    Redirect
  } from "react-router-dom";

function FindPage(){
    const dispatch = useDispatch()
    const { user,isLogin } = useSelector(state => state.user)
    if (!isLogin || user==null){
        dispatch(logoutUser())
        return(
            <Redirect to="/login"/>
        );
    }
    else {
        if(user=="admin")
            return(
                
                <>
                { user === "admin" ?
                <>
                <Form Name='Change Password'/>
                <ListUsers/>
                </>
                : <></>}
                </>

            );
        else
            return(<></>);

    }
    
}

export default FindPage;