import {useDispatch,useSelector} from 'react-redux'
import React, { useEffect } from 'react';
import Form from '../../components/UI/Form';
import {logoutUser,findUser} from '../../store/user'
import {
    Redirect,
    useLocation,
} from "react-router-dom";

function DetailUser(){
    const dispatch = useDispatch()
    const { user,isLogin,userDetail } = useSelector(state => state.user)

    const useQuery =()=> {
        return new URLSearchParams(useLocation().search);
    }
    let query= useQuery()
    const u=query.get('name') || null
    
    if (!isLogin || user!=="admin"){
        dispatch(logoutUser())
        return(
            <Redirect to="/login"/>
        );
    }
    // useEffect(async()=>{
    //     dispatch(findUser(u))
    // },[u])
    if (userDetail === null) {
        return(
            <>
            <h3>Not found</h3>
            </>
        );
    }
    if (userDetail.name===u) {
        return(
            <>
            <Form Name='Detail' User={userDetail}/>
            </>
        )
    }
    return(
        <>
        <h3>Not found</h3>
        </>
    );

}

export default DetailUser