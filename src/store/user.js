import { createSlice } from '@reduxjs/toolkit'
import {registerApi,loginApi,findUserByName,updateUserApi } from "../api/user"
// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user') || null,
    isLogin: localStorage.getItem('isLogin') || false,
  },
  reducers: {
    registerAction:(state,action) =>{
      localStorage.setItem("token",action.payload.token);
      //console.log("action",action.payload)
      state.user=action.payload.name;
      state.isLogin=true;
      localStorage.setItem('user',action.payload.name)
      localStorage.setItem("isLogin",true)
    },
    loginAction:(state, action) =>{
      localStorage.setItem("token",action.payload.token);
      state.user=action.payload.name;
      //localStorage.setItem("islogin","ok")
      state.isLogin=true;
      localStorage.setItem('user',action.payload.name)
      localStorage.setItem("isLogin",true)
    },
    logoutAction:(state,action) =>{
      localStorage.removeItem("token")
      //localStorage.setItem("islogin","")
      state.isLogin=false;
      state.user=null
      localStorage.setItem('user',null)
      localStorage.setItem("isLogin",false)
    }
  },
});

export default slice.reducer
const { registerAction, loginAction,logoutAction } = slice.actions
export const registerUser = (username, password) => async dispatch =>{
    if(username==='' || password==='' )
    return alert("username or password none")
    try{
      const res = await registerApi(username, password)
      //localStorage.setItem("token",res.token)
      dispatch(registerAction(res))
    }
    catch (e) {
    return alert("username was exist")
  }
}
export const loginUser = (username,password) => async dispatch => {
  if(username===''||password==='')
  return alert("username or password none")
  try{
    const res = await loginApi(username, password)
    dispatch(loginAction(res))
  }
  catch(e){
    return alert(e.message)
  }
}
export const findUser = (username) => async dispatch =>{
  if(username==='')
    return alert("username none")
  try{
    const res = await findUserByName(username)
    return console.log(res)
  }
  catch(e){
    return alert(e.message)
  }
}
export const updateUser = (username, password) => async dispatch => {
  if(username==='' || password==='' )
    return alert("username or password none")
  try{
    const user = await findUserByName(username)
    const userUpdate = await updateUserApi(user.id,username,password)
    return alert("successful")
  }
  catch(e) {
    return alert("fail")
  }
}
export const logoutUser = () => async dispatch => {
  try{
    dispatch(logoutAction())
  }
  catch(e) {
    return alert("fail")
  }
}