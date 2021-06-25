import React, { useState,useRef } from 'react'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Header, Button, Form,Input } from 'semantic-ui-react'
import {signin}  from '../useraction'
import { hideloader } from '../useraction'
// import Loader from './Loader'
// const Signin= React.forwardRef((props,ref)=>{
const Signin = ()=>{

    const [userdata, setUserdata] = useState({ email: '', password: '' })
    // // const inputRef = useRef(null)
    const dispatch = useDispatch()
    const state = useSelector((state)=>state)
    
    // const inputEvent = (e)=>{
    //     setUserdata({...userdata,[e.target.name]:e.target.value})
    // }
    const signinHandler = () => {

        // setUserdata({ ...userdata, [e.target.name]: e.target.value })
        dispatch(signin(userdata))
        setUserdata({
          username: '',
          password: ''
        })
        console.log(userdata)
      }
    // console.log(ref)
    if(state.signIn._id)return <Redirect to='/'/> 
    return (
        <>{

        state.loader.isloading===true&&!state.signIn._id?
            dispatch(hideloader())
        :null
        }
        {/* <Loader/> */}
            <Container text>
            <Header as='h2'>Signin</Header>
                {/* <form onSubmit={submitHandler}> */}
                    <Form onSubmit={signinHandler}>
                    
                    <Form.Field>


                        <label>Email</label>
                        <Input placeholder='User Name' onChange={(e)=>setUserdata({...userdata,email:e.target.value})}  name='email' type='text' value={userdata.email} />

                    </Form.Field>
                    <Form.Field>


                        <label>Password</label>
                        <Input placeholder='Password' onChange={(e)=>setUserdata({...userdata,password:e.target.value})} value={userdata.password}  name='password' type='password'   />

                    </Form.Field>

                    <Button primary type='submit'>Submit</Button>
                </Form>
                {/* </form> */}
            </Container>

        </>
    )
}

export default Signin
