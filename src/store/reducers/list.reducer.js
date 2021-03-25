import { CREATE, DELETE } from "../const/list.const"
const initialState = {
  list: [
    { webname: "百度", webaddress: "https://www.baidu.com" },
    { webname: "淘宝", webaddress: "https://www.taibao.com" },
  ],
}
const CreateNewTag=(state,action)=>{
  console.log(action.payload)
  let newstate = JSON.parse(JSON.stringify(state))
  newstate.list.push(action.payload)
  console.log("added")
  console.log({...state,list:newstate})
  return {...state,list:newstate.list}
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE: {
      return CreateNewTag(state,action)
    }
    case DELETE: {
      let deledlist = state.list.filter(
        item =>
          item.webname !== action.payload.webname &&
          item.webaddress !== action.payload.webaddress
      )
      return {
        ...state,
        list: deledlist,
      }
    }
    default: {
      return state
    }
  }
}
export default reducer
