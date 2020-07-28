import React, {useState, useEffect} from 'react'
import { Form, Button } from 'semantic-ui-react'
import '../App.css'


function Login(){
    // const [username, setUsername] = useState('');

    return(
        <Form className='form'>
    <Form.Field>
      <label>Username</label>
      <input />
    </Form.Field>
    <Button type='submit'>Login</Button>
  </Form>
    )
}

export default Login
