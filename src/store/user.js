import { createSlice } from '@reduxjs/toolkit'
import {
  registerApi,
  loginApi,
  findUserByName,
  updateUserApi,
  findUsersApi,
  deleteUserApi } from "../api/user"
// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user') || null,
    isLogin: localStorage.getItem('isLogin') || false,
    listUsers: null,
  },
  reducers: {
    registerAction:(state,action) =>{
      localStorage.setItem("token",action.payload.token);
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
      state.isLogin=false
      state.user=null
      state.listUsers=null
      localStorage.setItem('user',null)
      localStorage.setItem("isLogin",false)
    },
    findUsersAction:(state,action)=>{
      state.listUsers=action.payload.value
    },
    deleteAction:(state,action)=>{
      const a1 = state.listUsers.slice(0, action.payload);
      const a2 = state.listUsers.slice(action.payload + 1, state.listUsers.length);
      state.listUsers = a1.concat(a2);
    }
  },
});

export default slice.reducer
const { registerAction, loginAction,logoutAction,findUsersAction,deleteAction } = slice.actions
export const registerUser = (username, password) => async dispatch =>{
    if(username==='' || password==='' )
    return alert("username or password none")
    try{
      const res = await registerApi(username, password)
      //localStorage.setItem("token",res.token)
      console.log(res)
      if(res.status===200)
        dispatch(registerAction(res.value))
      else
        return alert("username was exist")
    }
    catch (e) {
    return alert("fail")
  }
}
export const loginUser = (username,password) => async dispatch => {
  if(username===''||password==='')
  return alert("username or password none")
  try{
    const res = await loginApi(username, password)
    if(res.status===200)
      dispatch(loginAction(res.value))
    else
      return alert("fail")
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
    const res = await updateUserApi(user.id,username,password)
    if(res.status===200)
      return alert("successful")
    if(res.status===401){
      dispatch(logoutAction())
      return alert("login expired")
    }
    return alert("fail")
  }
  catch(e) {
    return alert("error")
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
export const findUsers = (name,offset,limit) => async dispatch => {
  if(name === '' || offset <0 || limit<0) 
    return alert("fail")

  
  try{
    const res = await findUsersApi(name,offset,limit)
    if(res.status===200)
      dispatch(findUsersAction(res))
    else if(res.status===401){
      dispatch(logoutAction())
      return alert("login expired")
    }
    else
      return alert("fail")
  }
  catch(e){
    return alert(e)
  }
}
export const deleteUser = (id,index) => async dispatch => {
  if(id==='')
    return alert("fail")
  try {
    const res = await deleteUserApi(id)
    if(res.status ===200){
      dispatch(deleteAction(index))
    }
    else if(res.status===401){
      dispatch(logoutAction())
      return alert("login expired")
    }
    else
      return alert("fail")
  }
  catch(e) {
    return alert("error")
  }
}