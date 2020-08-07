import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'
import '../App.css'
import {connect} from 'react-redux'
import { postLeague } from '../redux/actions'

const LeagueForm = (props) => {
    const [leagueName, setLeagueName] = useState('');
    return(
      <Form className='form'>
    <Form.Field onChange={(e) => setLeagueName(e.target.value)} value={leagueName}>
      <label>League Name</label>
      <input />
    </Form.Field>
    <Button onClick={() => props.postLeague({name: leagueName, user_id: props.currentUser.id})}type='submit'>Submit</Button>
  </Form>
    )
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postLeague: (obj) => {dispatch(postLeague(obj))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeagueForm)