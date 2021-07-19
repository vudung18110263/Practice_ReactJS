import {useDispatch,useSelector} from 'react-redux'
import Form from '../../components/UI/Form';
import {logoutUser} from '../../store/user'
import {
    Redirect
} from "react-router-dom";

function FindPage(){
    const dispatch = useDispatch()
    const { user,isLogin } = useSelector(state => state.user)
    if (!isLogin || user===null){
        dispatch(logoutUser())
        return(
            <Redirect to="/login"/>
        );
    }
    else {
        return(
            <>
            <Form Name='Change Password'/>
            </>
        );
    }
    
}

export default FindPage;