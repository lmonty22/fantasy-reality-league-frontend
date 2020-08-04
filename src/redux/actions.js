const URL = 'http://localhost:3000/'

const setUser = (user) => {
    return {type: 'NEW_USER', payload: user}
}

const fetchUser = (username)=> {
    return async(dispatch) => {
    try{ 
        const response = await fetch(URL + 'login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({username: username})
        })
        const user = await response.json()
        dispatch(setUser(user))
    }
    catch(err) {
        console.log(err)
    }
    }
}


export {fetchUser}