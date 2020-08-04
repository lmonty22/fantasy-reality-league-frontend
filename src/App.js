import React, {useState, useEffect} from 'react'
import { Route, Switch, withRouter, Redirect} from "react-router-dom"
import NavBar from './components/NavBar'
import LeagueForm from './components/LeagueForm'
import Login from './components/Login'
import {connect} from 'react-redux'


const App = () => {
    const [loading, setLoading] = useState(true);

    // component did mount
    useEffect(() => {
      setLoading(false)
    }, [])

    return(
    <div className='app'> 
            <NavBar />
            {loading? <div className='spinnerDiv'>This page is loading</div>:
            <Switch>
          <Route exact path="/" render={() => <div>This is the homepage</div>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/newleague' component={LeagueForm}/>
          <Route render={()=> <div>404 No Route Found</div> } />
      </Switch> 
      }
    </div>
    )
 }

 const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));













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