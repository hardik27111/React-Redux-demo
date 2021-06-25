import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

// const store = createStore(rootReducer, applyMiddleware(thunk))
export function configureStore() {

    return createStore(
      rootReducer,
  
      //Apply the middleware usign the Redux's provided applymiddleware function
  
      applyMiddleware(
        thunk
      )
    )
  }
