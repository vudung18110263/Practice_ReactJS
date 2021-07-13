import {useDispatch,useSelector} from 'react-redux'
import NavBar from '../../components/UI/Navbar';
import Form from '../../components/UI/Form';
import {
    Redirect,
    Link
  } from "react-router-dom";

function IndexPage(){
    const dispatch = useDispatch()
    const { user,isLogin } = useSelector(state => state.user)
    const login = localStorage.getItem('isLogin');
    //const islogin =localStorage.getItem('islogin')
    console.log("user",user)
    console.log("islogin",isLogin,login);
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