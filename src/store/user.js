import { createSlice } from '@reduxjs/toolkit'
import registerUser from "../api/user"
// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    RegisterAction:(stage,action) =>{
        stage.user=null;
    }
  },
});

export default slice.reducer
const { RegisterAction } = slice.actions
export const RegisterUser = ({username, password}) => async dispatch =>{
    if(username=='' || password=='' )
    return console.log("null")
    try{
        console.log("username and pass",username)
        const res = await registerUser(username, password)
        console.log("hello",res)
        dispatch(RegisterAction())
    }
    catch (e) {
    return console.error(e.message);
  }
}