import React from "react"
import * as styles from "../styles/index.module.less"
import logo from "../../static/images/google_logo.svg"
import TagList from "../components/TagList"
import MyInput from "../components/MyInput"
import Modal from "../components/Modal"
export default function App() {
  return (
    <>
    <div className={styles.content}>
      <div className={styles.logobox}>
        <img src={logo} alt="Logo" />
      </div>
      <MyInput />
      <TagList />
    </div>
    <Modal />
    </>
  )
}
