import { SHOWMODAL, HIDEMODAL } from "../const/modal.const";

const initialState = {
  showStatus: false,
  curwebname:'',
  curwebaddr:''
  }
  function reducer(state = initialState, action) {
    switch (action.type) {
      case SHOWMODAL: {
        console.log("modal show")
        return {
            ...state,
            showStatus: true,
        }
      }
      case HIDEMODAL:{
        console.log("modal hide")

        return {
            ...state,
            showStatus: false,
          }
      }
      default: {
        return state
      }
    }
  }
  export default reducer
  