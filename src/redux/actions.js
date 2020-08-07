const URL = 'http://localhost:3000/'

const setUser = (user) => {
    return {type: 'NEW_USER', payload: user}
}

const setLeague = (league) => {
    return {type: 'SET_CURRENT_LEAGUE', payload: league}
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

const postLeague = (obj) => {
    return async(dispatch) => {
        try {
            const response = await fetch(URL+'leagues', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(obj)
            })
            const league = await response.json()
            dispatch(setLeague(league))
        }
        catch (err) {
            console.log(err)
        }
    }
}

const fetchLeague = (leagueId) => {
    return async(dispatch) => {
        const response = await fetch(URL+`leagues/${leagueId}`)
        const league = await response.json()
        console.log(league)
        dispatch(setLeague(league))
    }
}


export {fetchUser, postLeague, fetchLeague}