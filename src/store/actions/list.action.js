import { CREATE, DELETE } from "../const/list.const"

export const create = payload => ({ type: CREATE, payload })
export const del = payload => ({ type: DELETE, payload })
