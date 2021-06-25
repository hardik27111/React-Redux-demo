import axios from "axios"
import { ToastContainer, toast } from 'react-toastify'
import { setHeader } from "./Header"
import { useCallback } from "react"


export const showloader = () => {
  return (dispatch) => {
    dispatch({
      type: 'SHOW_LOADER'
    })
  }
}

export const hideloader = () => {
  return (dispatch) => {

    dispatch({
      type: 'HIDE_LOADER'
    })
  }
}

export const signin = (user) => {

  return (dispatch, getState) => {
    axios.post('http://localhost:3008/api/signin', user)
      .then((res) => {
        console.log(res)
        // dispatch(showloader())
        localStorage.setItem('token', res.data)
        dispatch({
          type: 'SIGN_IN',
          token: res.data
        })

      }).catch((error) => {
        // console.log(error.response)
        toast.error(error.response.data, {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      })
  }
}

export const signUp = (user) => {
  // console.log(user)
  return (dispatch) => {

    axios.post('http://localhost:3008/api/signup', user).then((res) => {
      // dispatch(showloader())
      localStorage.setItem('token', res.data)
      dispatch({
        type: 'SIGN_UP',
        token: res.data
      })
      // setTimeout(() => {
      //   dispatch(hideloader())
      // }, 2000);
    }).catch(error => {
      // console.log(err.response)
      toast(error.response.data, {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    })
  }
}

export const loaduser = () => {
  return (dispatch, getState) => {
    dispatch(showloader())
    const token = getState().signIn.token
    setHeader()
    if (token) {
      dispatch({
        type: 'USER_LOADED',
        token
      })
      setTimeout(() => {
        dispatch(hideloader())
      }, 2000);
    } else return null
  }
}


export const userdata = () => {
  // return async(dispatch,getState)=>{
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  //     // console.log(res)
  //     if(res!==null){

  //         dispatch({
  //             type:'USER_DATA',
  //             res
  //         })
  //     }

  // }
  return async (dispatch, getState) => {
    dispatch(showloader())
    // const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
    const usersdata = res.data
    dispatch({
      type: 'USER_DATA',
      usersdata
    })
    setTimeout(() => {
      dispatch(hideloader())
    }, 2000);
    }).catch((error)=>{
      toast(error.response.data, {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    })
  }
}

export const ascending = (key) => {
  return (dispatch, getState) => {
    const user = getState().users.userinfo
    // console.log(user)
    if (user) {

      dispatch({
        type: 'ASCENDING',
        user,
        key
      })
    } else {
      return null
    }
    // const res = user.sort((a,b)=>(a[key]>b[key]?1:-1))
  }
}
export const descending = (key) => {
  return (dispatch, getState) => {
    const user = getState().users.userinfo
    if (user) {
      dispatch({
        type: 'DESCENDING',
        user,
        key
      })
    } else {
      return null
    }
  }
}

export const search = (key) => {
  return (dispatch, getState) => {
    // // const user = getState().users.userinfo
    // console.log(user)
    dispatch({
      type: 'SEARCH',
      key
    })
  }
}
export const signout = () => {
  return (dispatch) => {
    dispatch({
      type: 'SIGN_OUT'
    })
  }
}