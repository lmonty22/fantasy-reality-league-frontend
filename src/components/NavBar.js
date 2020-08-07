import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NavBar = (props) => {
    const [activeItem, setactiveItem] = useState('editorials');
    return(
        <Menu>
        <Link to='/'><Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={() => setactiveItem('home')}
        >
            Home
        </Menu.Item></Link>


       {props.currentUser? 
        <Link to='/profile'>
          <Menu.Item
          name='Profile'
          active={activeItem === 'profile'}
          onClick={() => setactiveItem('profile')}>
            Profile
          </Menu.Item>
        </Link>   
       :<Link to='/login'><Menu.Item
          name='Login'
          active={activeItem === 'login'}
          onClick={() => setactiveItem('login')}
        >
          Login
    </Menu.Item></Link> }

    {props.currentUser?
        <Link to='/newleague'>
        <Menu.Item
          name='Create League'
          active={activeItem === 'createLeague'}
          onClick={() => setactiveItem('createLeague')}
        >
            Create League
        </Menu.Item>
        </Link>: null }
      </Menu>
    )
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
