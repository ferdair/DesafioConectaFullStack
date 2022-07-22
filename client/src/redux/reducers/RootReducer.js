import { combineReducers } from 'redux'
import AutoReducer from './AutoReducer'
const RootReducer = combineReducers({
    autos: AutoReducer
})

export default RootReducer
