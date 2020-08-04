import React, {useState, useEffect} from 'react'
import { Form, Button } from 'semantic-ui-react'
import '../App.css'
import {fetchUser} from '../redux/actions'
import {connect} from 'react-redux'


const Login = (props) => {
   const [username, setusername] = useState('');
    return(
        <Form className='form'>
    <Form.Field onChange={(e) => setusername(e.target.value)} value={username}>
      <label>Username</label>
      <input />
    </Form.Field>
    <Button onClick={() => props.fetchUser(username) } type='submit'>Login</Button>
  </Form>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {fetchUser: (username) =>{dispatch(fetchUser(username))}}
}

export default connect(null, mapDispatchToProps)(Login)