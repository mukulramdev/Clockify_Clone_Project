import {legacy_createStore as createstore,combineReducers} from 'redux'
import { PageReducer } from './Pagetracker/Reducer'
import { UserdataReducer } from './UserData/UserdataReducer';
import{Timereducer} from './Timer/TimerReducer'
const rootreducer = combineReducers({
    page:PageReducer,
    user:UserdataReducer,
    time:Timereducer
})
export const store = createstore(rootreducer);
