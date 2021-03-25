import React from "react"
import * as styles from "../styles/index.module.less"
import addimg from "../../static/images/add.svg"
import iconmore from "../../static/images/icon_more_vert.svg"
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import * as modalActions from '../store/actions/modal.action'
function TagList({list,show}) {
  let columnCount = list.length < 5 ? list.length+1 :list.length===5? 3:4
  let width = columnCount * 124
  return (
    
    <div
      className={styles.taglist}
      style={{ columnCount: columnCount, width: width }}
    >
      {/* {JSON.stringify(list)} */}
      {list.map(item => (
          <a
          tragable="true"
          key={item.webaddress}
            title={item.webname}
            className={styles.tile}
            href={item.webaddress}
          >
            <div className={styles.icon}>
              <img src={iconmore} alt="" />
            </div>
            <div className={styles.tileicon}>
              <img src={item.webaddress+"/favicon.ico"} alt=" " />
            </div>
            <div className={styles.tiletitle}>
              <span>{item.webname}</span>
            </div>
          </a>
        ))
      }
      <button type="button" onClick={show} className={styles.addShortcut}>
        <div className={styles.tileicon}>
          <img src={addimg} alt="add" />
        </div>
        <div className={styles.tiletitle}>
          <span>添加快捷方式</span>
        </div>
      </button>
    </div>
  )
}
const mapStateToProps=state=>({
  list:state.listReducer.list
})
const mapDispatchToprops=dispatch=>bindActionCreators(modalActions,dispatch)
export default connect(mapStateToProps,mapDispatchToprops)(TagList)
