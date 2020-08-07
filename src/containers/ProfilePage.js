import React, {useState, useEffect} from 'react'
import { Form, Button } from 'semantic-ui-react'
import '../App.css'
import {fetchUser} from '../redux/actions'
import {connect} from 'react-redux'


const ProfilePage = (props) => {
    return (
        <div>Profile Page</div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {fetchUser: (username) =>{dispatch(fetchUser(username))}}
}

export default connect(null, null)(ProfilePage)