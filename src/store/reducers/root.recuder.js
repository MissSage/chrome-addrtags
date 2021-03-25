import { combineReducers } from "redux"
import listReducer from './list.reducer'
import modalReducer from './modal.reducer'
export default combineReducers({

  listReducer,
  modalReducer
})
