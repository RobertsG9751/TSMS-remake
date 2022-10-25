import style from './FormOptions.module.css'
import Button from '../../UI/Button'

const FormOptions = props => {

    const toggleSystems = props =>{
        
    }
    const toggleUnits = props =>{

    }
    const toggleObjects = props =>{

    }
    const toggleEdit = props =>{

    }

    return(
        <div className={`${style.wrapper} center`}>
            <div className={style.subwrap}>
                <Button onClick={toggleSystems} propClass={style.btn} text="system"></Button>
                <Button onClick={toggleUnits} propClass={style.btn} text="unit"></Button>
                <Button onClick={toggleObjects} propClass={style.btn} text="object"></Button>
                <Button onClick={toggleEdit} propClass={style.btn} text="edit"></Button>
            </div>
        </div>
    )
}
export default FormOptions