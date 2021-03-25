import React from 'react'

import search from "../../static/images/search.svg"
import voice from "../../static/images/googlemic_clr_24px.svg"
import * as styles from "../styles/index.module.less"

function MyInput(){
    return(
      <div className={styles.realbox}>
        <input
          type="search"
          className={styles.input}
          autoComplete="off"
          placeholder="在 Google 上搜索，或者输入一个网址"
        />
        <div className={styles.inputbefore}><img src={search} alt="search"/></div>
        <div className={styles.inputafter}><img src={voice} alt="search"/></div>
      </div>
    )
  }
  export default MyInput