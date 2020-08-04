import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'
import '../App.css'



const LeagueForm = () => {
    const [leagueName, setLeagueName] = useState('');
    return(
      <Form className='form'>
    <Form.Field onChange={(e) => setLeagueName(e.target.value)} value={leagueName}>
      <label>League Name</label>
      <input />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
    )
}

export default LeagueForm