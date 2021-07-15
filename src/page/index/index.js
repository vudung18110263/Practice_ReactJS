import {useDispatch,useSelector} from 'react-redux'
import NavBar from '../../components/UI/Navbar';
import Form from '../../components/UI/Form';
import {
    Redirect
  } from "react-router-dom";

function IndexPage(){
    const dispatch = useDispatch()
    const { isLogin } = useSelector(state => state.user)
    if (!isLogin){
        return(
            <Redirect to="/login"/>
        );
    }
    else {
        return(
            <>
            <NavBar/> 
            <Form Name='Change Password'/>
            </>
        );

    }
    
}

export default IndexPage;