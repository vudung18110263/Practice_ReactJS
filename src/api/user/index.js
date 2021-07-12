export const registerUser = (username,password) =>{
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

export default registerUser