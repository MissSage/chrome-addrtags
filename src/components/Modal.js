import React from "react"
import useInput from "../hooks/useInput"
import * as styles from "../styles/index.module.less"
import {
  connect,
  // ,useDispatch
  // ,useStore
} from "react-redux"
import * as listActions from "../store/actions/list.action"
import * as modalActions from "../store/actions/modal.action"
// import {CREATE} from '../store/const/list.const'
import { bindActionCreators } from "redux"
function Modal({ showStatus, create, hide }) {
  const webname = useInput("")
  const webaddress = useInput("")
  let wn = webname.input.value
  let wa = webaddress.input.value
  let nameerr=""
  let addrerr=""
  let isNOE=!wn || !wa | (wn.trim() === "") || wa.trim() === ""
  function handleSubmit(e) {
    e.preventDefault()
    if (isNOE) {
      return
    }
    // dispatch({type:CREATE,payload:{webname:wn,webaddress:wa}})
    create({ webname: wn, webaddress: wa })
    webaddress.setValue("")
    webname.setValue("")
    hide()
  }
  return (
    <div
      style={{ display: showStatus ? "block" : "none" }}
      className={styles.bgshadow}
    >
      <div className={styles.shadebox}>
        <div className={styles.modalbox}>
          <div className={styles.modaltitle}>添加快捷方式</div>
          <form onSubmit={handleSubmit} className={styles.modalform}>
            <label htmlFor="webaddress">名称</label>

            <input
              id="webname"
              className="form-control form-control-lg"
              type="text"
              autoComplete="off"
              {...webname.input}
            />
            <div className={styles.inputerror}>{nameerr}</div>

            <label htmlFor="webaddress">网址</label>

            <input
              className="form-control form-control-lg"
              id="webaddress"
              type="text"
              autoComplete="off"
              {...webaddress.input}
            />
            <div className={styles.inputerror}>{addrerr}</div>
            <div className={styles.formgroup}>
              <button
                type="button"
                onClick={hide}
                className={styles.normalbutton}
              >
                取消
              </button>
              <button type="submit" className={isNOE===true?styles.submitbutton:styles.submitdisable}>
                提交
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  showStatus: state.modalReducer.showStatus,
  list: state.listReducer.list,
})
const mapDispatchToprops = dispatch => ({
  ...bindActionCreators(listActions, dispatch),
  ...bindActionCreators(modalActions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToprops)(Modal)
// export default Modal
