import React from "react"
import { Provider,useStore } from "react-redux"
import App from './App'

export default function Home() {
  const store= useStore()
  return <Provider store={store}><App /></Provider>
}