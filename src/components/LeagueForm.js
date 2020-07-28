import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import '../App.css'



const LeagueForm = () => {
    return(
        <Form className='form'>
    <Form.Field>
      <label>League Name</label>
      <input />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
    )
}

export default LeagueForm