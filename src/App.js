import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import LeagueForm from './components/LeagueForm'
import Login from './components/Login'


const App = () => {
    const [loading, setLoading] = useState(true);

    // component did mount
    useEffect(() => {
      setLoading(false)
    }, [])

    return(
    <div className='app'> 
      {loading? <p>This page is still loading</p>: 
        <div> 
            <NavBar />
            <Switch>
              <Route exact path='/' render={() => <div>This is the homepage</div>} />
              <Route exact path='/newleague' render={LeagueForm} />
              <Route exact path='/login' render={Login}/>
            </Switch>
        </div>}
    </div>
    )
 }

export default App 













// function App() {
//   const [loading, setLoading] = useState(true)
  
//   // component did mount
//   useEffect(() => {
//     setLoading(false)
//   }, []);
  
  
//   return (
//     <div className="App">
//       {loading? <div>The page is still loading</div> : <div>Ths page is loaded.</div>}
//     </div>
//   );
// }


{/* <p> This is the home page My favorite color is {favoriteColor}. </p> */}


// const [favoriteColor, setFavoriteColor] = useState('pink')

// import NavBar from './components/NavBar'
// import './App.css';
// import { Switch, Route } from 'react-router-dom';


{/* <NavBar />
<Switch>
<Route exact path='/' render={ () =>  <div>  This is the main page </div> } />
</Switch> */}