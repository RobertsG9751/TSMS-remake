import style from './Search.module.css'
import Button from '../UI/Button'
import {useEffect, useRef} from 'react'

const Search = props => {

    const searchRef = useRef(null)
    let addresses = []

    const submitFunc = e => {
        addresses = JSON.parse(localStorage.getItem("addresses"))
        addresses.forEach(element => {
            if(element.address.toLowerCase().includes(searchRef.current.value)){
                props.upAddress({lat: element.lat, lng: element.lng, zoom: 20})
                props.closeModal({status: false})
            }else{
                console.log("no address found")
            }
        });
    }

    return(
        <div className={`${style.wrapper} center`}>
            <div className={`${style.subwrap} center`}>
                <p className={style.text}>Meklēt:</p>
                <input ref={searchRef} className={style.search} type="text"></input>
                <Button onClick={submitFunc} propClass={style.btn} text="submit"></Button>
            </div>
        </div>
    )
}
export default Search