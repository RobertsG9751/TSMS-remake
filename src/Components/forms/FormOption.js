import style from './FormOptions.module.css'
import Button from '../../UI/Button'

const FormOptions = props => {
    const toggleSystems = e =>{
        props.toggleModal({"status": true, "data": {
            "title": "system",
            "type": "systemForms",
            "id": e.target.id
        }})
    }
    const toggleUnits = e =>{

    }
    const toggleObjects = e =>{

    }
    const toggleEdit = e =>{

    }

    return(
        <div className={`${style.wrapper} center`}>
            <div className={style.subwrap}>
                <Button id="systemForm" onClick={toggleSystems} propClass={style.btn} text="system"></Button>
                <Button onClick={toggleUnits} propClass={style.btn} text="unit"></Button>
                <Button onClick={toggleObjects} propClass={style.btn} text="object"></Button>
                <Button onClick={toggleEdit} propClass={style.btn} text="edit"></Button>
            </div>
        </div>
    )
}
export default FormOptions