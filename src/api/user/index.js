export const registerApi = (username,password) =>{
    let user ={
        Name : username,
        Password:password
    }
    return fetch('http://localhost:8080/account', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        return res.json().then(value => {
            return value
        })
    })
}
export const loginApi = (username,password) => {
    let user ={
        Name : username,
        Password:password
    }
    return fetch('http://localhost:8080/account/Login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then((response) =>{
        return response.json().then(value =>{
            return value
        })
    })
}
export const findUserByName = (name) => { 
    const token = localStorage.getItem('token')
    return fetch('http://localhost:8080/account/find/'+name,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        }
    })
    .then((response)=>{
        return response.json().then(value=>{
            return value
        });
    })
}
export const updateUserApi = (id,name,password) =>{
    let user ={
        ID:id,
        Name:name,
        Password:password
    }
    const token = localStorage.getItem('token')
    return fetch('http://localhost:8080/account',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +token
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json().then(value=>{
            return value
        });
    })
}
export default {registerApi,loginApi,findUserByName,updateUserApi}