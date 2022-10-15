import style from './Button.module.css'

const Button = props => {
    return(
        <input id={props.id} type="button" className={`${style.button} ${props.propClass}`} onClick={props.onClick} value={props.text}/>
    )
}
export default Button