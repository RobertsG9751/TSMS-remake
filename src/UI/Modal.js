import style from './Modal.module.css'
import React, {useState} from 'react'
import ReactDOM from "react-dom" 
import Button from './Button'
import ChangeTheme from '../Components/ChangeTheme'
import Data from '../Components/Data'


const ModalBox = props => {

    const [type, setType] = useState(props.data.type)
    const closeModal = el => {
        props.closeModal({"status": false})
    }

    return(
        <div className={style.background}>
            <div className={style.modal}>
                <Button propClass={style.btn} onClick={closeModal} text="Close"></Button>
                <div className={style.nav}>{props.data.title}</div>
                {
                    type==="theme" && (
                        <ChangeTheme closeModal={props.closeModal} changeTheme={props.changeTheme}/>
                    )
                }{
                    type==="data" &&(
                        <Data data={props.data}></Data>
                    )
                }
            </div>
        </div>
    )
}
const Modal = props => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<ModalBox data={props.data} changeTheme={props.changeTheme} closeModal={props.closeModal}/>, document.getElementById("modal"))}
        </React.Fragment>
    )
}
export default Modal