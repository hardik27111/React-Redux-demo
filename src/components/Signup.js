import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Checkbox, Container, Header, Form } from 'semantic-ui-react'
import {signUp} from '../useraction'
import { Redirect } from 'react-router-dom'
function Signup () {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state)
  console.log(state)
  const [signupdata, setSignupdata] = useState({ name: '', email: '', password: '' })
  // const inputEvent = (e) =>{
  //   setSignupdata({...signupdata,[e.target.name]:e.target.value})
  // }

  const signUphandler = () =>{
    dispatch(signUp(signupdata))
  }
  if(state.signIn._id)return <Redirect to='/'/>
  return (<>
    <Container text>
      <Header as='h2'>Signup</Header>
      <Form onSubmit={signUphandler}>
        <Form.Field>
          <label>Name</label>
          <input placeholder='User Name' name='name' type='text'  value={signupdata.name} onChange={(e)=>setSignupdata({...signupdata,name:e.target.value})} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' name='email' type='email' value={signupdata.email} onChange={(e)=>setSignupdata({...signupdata,email:e.target.value})}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' name='password' type='password' value={signupdata.password} onChange={(e)=>setSignupdata({...signupdata,password:e.target.value})} />
        </Form.Field>

        <Button primary type='submit'>Submit</Button>
      </Form></Container></>
  )
}

export default Signup