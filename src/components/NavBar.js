import React, {useState} from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NavBar = () => {
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

       <Link to='/login'><Menu.Item
          name='Login'
          active={activeItem === 'login'}
          onClick={() => setactiveItem('login')}
        >
          Login
        </Menu.Item></Link> 

        <Link to='/newleague'>
        <Menu.Item
          name='Create League'
          active={activeItem === 'createLeague'}
          onClick={() => setactiveItem('createLeague')}
        >
            Create League
        </Menu.Item>
        </Link>
      </Menu>
    )
}

export default NavBar