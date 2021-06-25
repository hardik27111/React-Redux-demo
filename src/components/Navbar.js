import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Input, Menu } from 'semantic-ui-react'
import { signout } from '../useraction'

function Navbar() {
    const [activeItem, setactiveItem] = useState({ activeItem: 'home' })

    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    const handleItemClick = (e, { name }) => setactiveItem({ activeItem: name })

    const handleLogout = () => {
        dispatch(signout())
        history.push("/signin")
    }
    return (
        <>
            <div style={{ backgroundColor: '#383838', color: '#fff' }}>

                <Menu secondary >
                    <Menu.Menu position='right'>

                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={handleItemClick}

                    >
                        <div>
                            <NavLink exact style={{ color: '#fff' }} aria-current="page" to="/">Home</NavLink>
                        </div>
                    </Menu.Item>
                    {
                        state.signIn._id ? (
                            <>
                            <Menu.Item>
                                    <div style={{color:'#fff'}}>
                                        <p>{state.signIn.name}</p>
                                    </div>
                                </Menu.Item>
                                <Menu.Item
                                    name='logout'
                                    active={activeItem === 'logout'}
                                    onClick={handleLogout}
                                >
                                    <div>

                                        <Button style={{ color: '#fff' }} aria-current="page" primary>Logout</Button>
                                    </div>
                                </Menu.Item>
                                
                            </>
                        ) : (

                            <>
                                <Menu.Item
                                    name='signin'
                                    active={activeItem === 'signin'}
                                    onClick={handleItemClick}
                                >
                                    <div>

                                        <NavLink exact style={{ color: '#fff' }} aria-current="page" to="/signin">Signin</NavLink>
                                    </div>
                                </Menu.Item>
                                <Menu.Item
                                    name='signup'
                                    active={activeItem === 'signup'}
                                    onClick={handleItemClick}
                                >
                                    <div>
                                        <NavLink exact style={{ color: '#fff' }} aria-current="page" to="/signup">Signup</NavLink>
                                    </div>
                                </Menu.Item>
                            </>
                        )
                    }
                    </Menu.Menu>
                </Menu>
            </div>
        </>
    )
}

export default Navbar
