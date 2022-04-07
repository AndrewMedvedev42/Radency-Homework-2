import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools} from '@redux-devtools/extension';

import rootReducer from './rootReducer'

export default function configureStore() {
  const middlewares = [thunkMiddleware]
    const store = createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(...middlewares)
      )
    )
  
    return store
  }