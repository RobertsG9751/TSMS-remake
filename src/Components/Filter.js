import style from './Filter.module.css'
import Button from '../UI/Button'
import React, {useState, useRef} from 'react'

const Filter = props => {

    const [checkedState, setCheckedState] = useState([])

    const addToFilter = e => {
        if(!checkedState.includes(e.target.id)){
            setCheckedState(curr=>[...curr, e.target.id])
        }
        else{
            setCheckedState(checkedState.filter(function(item){
                return item !== e.target.id
            }))
        }
    }

    const filterFunc = e =>{
        props.sendFilter(checkedState)
        props.closeModal({"status": false})
    }

    return(
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.input}>
                    <input onChange={addToFilter} id="vārti" className={style.checkbox}  type="checkbox"></input>
                    <label htmlFor="vārti" className={style.text}> - Vārti</label>
                </div>
                <div className={style.input}>
                    <input onChange={addToFilter} id="konsole" className={style.checkbox}  type="checkbox"></input>
                    <label htmlFor="konsole" className={style.text}> - Konsole</label>
                </div>
                <div className={style.input}>
                    <input onChange={addToFilter} id="kontrolieris" className={style.checkbox} type="checkbox"></input>
                    <label htmlFor="kontrolieris" className={style.text}> - Kontrolieris</label>
                </div>
                <div className={style.input}>
                    <input onChange={addToFilter} id="skaititajs" className={style.checkbox} type="checkbox"></input>
                    <label htmlFor="skaititajs" className={style.text}> - Skaitītājs</label>
                </div>
                <div className={style.input}>
                    <input onChange={addToFilter} id="balsts" className={style.checkbox}  type="checkbox"></input>
                    <label htmlFor="balsts" className={style.text}> - Balsts</label>
                </div>
                <Button text="filter" onClick={filterFunc} propClass={style.btn}></Button>
            </div>
        </div>
    )
}
export default Filter