import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'

const intialState = {
    token:localStorage.getItem('token'),
    name:null,
    email:null,
    _id:null
}

const signinReducer = (state=intialState,action)=>{
    switch (action.type) {
        case 'USER_LOADED':
        case 'SIGN_IN':
        case 'SIGN_UP':
            toast.info('Welcome...',{
                position:toast.POSITION.BOTTOM_RIGHT
            })
            const user = jwtDecode(action.token)
            return{
                ...intialState,
                token:action.token,
                name:user.name,
                email:user.email,
                _id:user._id
            }
        case 'SIGN_OUT':
            localStorage.removeItem('token')
            toast('Signout...',{
                position:toast.POSITION.BOTTOM_RIGHT
            })
            return{
                ...intialState,
                token:null
            }
        // case 'LOGIN_SUCCESS':
        //     if(!localStorage.getItem('token')){
        //         localStorage.setItem('token',action.res.data)
        //         const token = localStorage.getItem('token')
        //         const user = jwtDecode(token)
    
        //         return {
        //             username:user.name,
        //             loading:false
        //         } 
        //     }else{
        //         const token = localStorage.getItem('token')
        //         const user = jwtDecode(token)
    
        //         return {
        //             username:user.name,
        //             loading:false
        //         } 
        //     }
            
            
    
        default:
            return state;
    }
}

export default signinReducer