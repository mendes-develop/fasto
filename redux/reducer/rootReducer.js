import main from './main'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    main : main
})

export default rootReducer