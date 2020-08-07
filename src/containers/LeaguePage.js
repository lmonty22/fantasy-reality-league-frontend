import React, {useState, useEffect} from 'react'
import { Form, Button } from 'semantic-ui-react'
import '../App.css'
import {fetchLeague} from '../redux/actions'
import {connect} from 'react-redux'


const LeaguePage = (props) => {
    const [loading, setLoading] = useState(true);
    // component did mount
    useEffect(() => {
      setLoading(false)
      props.fetchLeague(props.match.params.id)
    }, [])
    return (
        props.currentLeague? 
        <div>{props.currentLeague.name}</div>: <div>League not found</div>
    )
}

const mapStateToProps = (state) => {
    return {
      currentLeague: state.currentLeague
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {fetchLeague: (leagueId) =>{dispatch(fetchLeague(leagueId))}}
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(LeaguePage)