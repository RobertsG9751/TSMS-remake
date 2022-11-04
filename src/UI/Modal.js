import style from './Modal.module.css'
import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom" 
import Button from './Button'
import ChangeTheme from '../Components/ChangeTheme'
import Data from '../Components/Data'
import Filter from '../Components/Filter'
import FormOptions from '../Components/forms/FormOption'
import Search from '../Components/Search'
import SystemForms from '../Components/forms/SystemForms'


const ModalBox = props => {

    const [type, setType] = useState(props.data.type)
    const closeModal = el => {
        props.closeModal({"status": false})
    }
    const sendFilter = e =>{
        props.sendFilter(e)
    }
    const upAddress = e =>{
        props.upAddress(e)
    }
    useEffect(()=>{
        setType(props.data.type)
    },[props.data.type])
    return(
        <div className={`${style.background} center`}>
            <div className={style.modal}>
                <Button propClass={style.btn} onClick={closeModal} text="Close"></Button>
                <div className={`${style.nav} center`}>{props.data.title}</div>
                {
                    type==="theme" && (
                        <ChangeTheme closeModal={props.closeModal} changeTheme={props.changeTheme}/>
                    )
                }{
                    type==="data" &&(
                        <Data data={props.data}></Data>
                    )
                }{
                    type==="filter"&&(
                        <Filter closeModal={props.closeModal} sendFilter={sendFilter}></Filter>
                    )
                }{
                    type==="create"&&(
                        <FormOptions toggleModal={props.toggleModal} closeModal={props.closeModal}></FormOptions>
                    )
                }{
                   type==="search"&&(
                        <Search upAddress={upAddress} closeModal={props.closeModal}></Search>
                   )
                }{
                    type==="systemForms"&&(
                        <SystemForms reloadMap={props.reloadMap} closeModal={props.closeModal}></SystemForms>
                    )
                }
            </div>
        </div>
    )
}
const Modal = props => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<ModalBox reloadMap={props.reloadMap} toggleModal={props.toggleModal} upAddress={props.upAddress} sendFilter={props.sendFilter} data={props.data} changeTheme={props.changeTheme} closeModal={props.closeModal}/>, document.getElementById("modal"))}
        </React.Fragment>
    )
}
export default Modal