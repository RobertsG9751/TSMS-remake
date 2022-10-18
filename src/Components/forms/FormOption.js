import style from './FormOptions.module.css'
import Button from '../../UI/Button'

const FormOptions = props => {
    return(
        <div className={style.wrapper}>
            <div className={style.subwrap}>
                <Button propClass={style.btn} text="system"></Button>
                <Button propClass={style.btn} text="unit"></Button>
                <Button propClass={style.btn} text="object"></Button>
                <Button propClass={style.btn} text="edit"></Button>
            </div>
        </div>
    )
}
export default FormOptions