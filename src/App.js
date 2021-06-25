import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Signin from './components/Signin';
import Signup from './components/Signup'
import { loaduser } from './useraction'
import Usertable from './components/Usertable';
import { Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import Loader from './components/Loader';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  console.log('appeffect')
  // const [userdata, setUserdata] = useState({ user: '', username: '', password: '' })
  // const [signupdata, setSignup] = useState({ name: '',email:'', password: '' })
  // const signinRef = useRef(null)
  // const signupRef = useRef(null)
  // const state = useSelector((state) => state.signIn.username)
  const dispatch = useDispatch()
  const state = useSelector((state)=>state)

  useEffect(()=>{
    dispatch(loaduser())
    
  },[])
  // const signinHandler = () => {
  //   setUserdata({ ...userdata, [signinRef.current.name]: signinRef.current.value }) 
  //   console.log(userdata)   
  //   dispatch(signin(userdata))
  //   setUserdata({
  //     user: state,
  //     username: '',
  //     password: ''
  //   })
  //   console.log(userdata)
  // }

  // const signUphandler = ()=>{
  //   setSignup(perv => ({ ...perv, [signupRef.current.name]: signupRef.current.value }))
  //   // console.log(signupdata)
  //   // dispatch(signUp(signupdata))

  //   setSignup({
  //     username: '',
  //     email:'',
  //     password: ''
  //   })
  // }

  return (
    <>
<ToastContainer/>
      {/* {localStorage.getItem('token') ? <Usertable/> : <Signin ref={inputRef} submitHandler={submitHandler} />} */}
      <Loader/>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Usertable} />
        
        {/* {state.signIn._id?( */}
          
        {/* ):( */}
          <Route exact path='/signin' >
        <Signin />
        </Route>,
        <Route exact path='/signup' >
        <Signup  />
        </Route>
        {/* )} */}
      </Switch>

    </>
  );
}

export default App;
