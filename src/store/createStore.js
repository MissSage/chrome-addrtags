import { createStore } from "redux"
import rootRecuder from "./reducers/root.recuder"

function getStore() {
  const store = createStore(rootRecuder)
  return store
}
export default getStore
