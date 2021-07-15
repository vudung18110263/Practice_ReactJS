const host = 'https://go-echo-mongo.herokuapp.com'
export const registerApi = (username,password) =>{
    let user ={
        Name : username,
        Password:password
    }
    return fetch(host+'/account', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then ((response)=>{
        return response.json().then(value =>{
            return ({
                value,
                status: response.status,
            })
        })
    })
}
export const loginApi = (username,password) => {
    let user ={
        Name : username,
        Password:password
    }
    return fetch(host+'/account/Login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then ((response)=>{
        return response.json().then(value =>{
            return ({
                value,
                status: response.status,
            })
        })
    })
}
export const findUserByName = (name) => { 
    const token = localStorage.getItem('token')
    return fetch(host+'/account/find/'+name,{
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
    return fetch(host+'/account',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +token
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json().then(value=>{
            return (
                {
                value,
                status: response.status,
                }
            )
        });
    })
}
export const findUsersApi = (name, offset, limit)=>{
    const token = localStorage.getItem('token')
    return fetch(host+'/account/list?name='+name+'&offset='+offset+'&limit='+limit ,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }
    }) 
    .then ((response) =>{
        return response.json().then(value =>{ 
            return ({
                value,
                status: response.status,
            })
        });
    })
}
export const deleteUserApi = (id)=>{
    let user={
        Id: id,
    }
    const token = localStorage.getItem('token')
    return fetch(host+'/account',{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token,
        },
        body: JSON.stringify(user)
    })
    .then ((response)=>{
        return response.json().then(value =>{
            return ({
                value,
                status: response.status,
            })
        })
    })
}
const api={
    registerApi,
    loginApi,
    findUserByName,
    updateUserApi,
    findUsersApi,
    deleteUserApi
}
export default api