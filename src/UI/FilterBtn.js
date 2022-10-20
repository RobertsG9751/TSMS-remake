import React, {useState} from 'react'
import style from './FilterBtn.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faBars, faMapLocationDot, faFilter, faPlus} from '@fortawesome/free-solid-svg-icons'
import Options from './Options'

const FilterBtn = props => {

    const [btnState, setBtnState] = useState(true)

    const showOptions = e => {
        const btns = document.querySelectorAll(".filterOption")
        if(btnState){
            btns.forEach(btn=>{
                btn.style.display="flex"
            })
            setBtnState(false)
        }
        else{
            btns.forEach(btn=>{
                btn.style.display="none"
            })
            setBtnState(true)
        }
    }
    const toggleModal = el => {
        props.toggleModal(el)
    }

    return(
        <div className={style.wrapper}>
            <Options type="theme" toggleModal={toggleModal} icon={faMapLocationDot}></Options>
            <Options type="search" toggleModal={toggleModal} icon={faMagnifyingGlass}></Options>
            <Options type="filter" toggleModal={toggleModal} icon={faFilter}></Options>
            <Options type="create" toggleModal={toggleModal} icon={faPlus}></Options>
            <div onClick={showOptions} className={`${style.btn} center`}>
                <FontAwesomeIcon className={style.icon} icon={faBars}/>
            </div>
        </div>
    )
}
export default FilterBtn