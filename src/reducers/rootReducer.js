import signinReducer from './signinReducer'
import userdataReducer from './userdataReducer'
import { combineReducers } from 'redux'
import loaderReducer from './loadReducer'
const rootReducer = combineReducers({
    signIn: signinReducer,
    users:userdataReducer,
    loader:loaderReducer
})

export default rootReducer