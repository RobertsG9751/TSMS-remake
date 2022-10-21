import style from './Search.module.css'
import Button from '../UI/Button'
import {useEffect, useRef, useState} from 'react'
import ChangeTheme from './ChangeTheme'

const Search = props => {

    let  searchRef = useRef(null)
    let addresses = []
    const [searchAddr, setSerachAddr] = useState([])

    const submitFunc = e => {
        console.log(searchRef.current.value)
        addresses = JSON.parse(localStorage.getItem("addresses"))
        addresses.forEach(element => {
            if(element.address.toLowerCase().includes(searchRef.current.value.toLowerCase())){
                props.upAddress({lat: element.lat, lng: element.lng, zoom: 20})
                props.closeModal({status: false})
            }else{
                document.getElementById("error").style.display="block"
            }
        });
    }
    const searchChange = e =>{
        JSON.parse(localStorage.getItem("addresses")).forEach((el, i)=>{
            if(el.address.includes(e.target.value.toLowerCase())){
                if(!searchAddr.includes(el.address)){
                    console.log(el.address)
                    setSerachAddr(current=>[el.address])
                }
            }
        })
    }
    const setSearch = e =>{
        searchRef.current.value=e.target.id
    }

    return(
        <div className={`${style.wrapper} center`}>
            <div className={`${style.subwrap} center`}>
                <p className={style.text}>Meklēt:</p>
                <input onChange={searchChange} ref={searchRef} className={style.search} type="text"></input>
                <p id="error" className={style.error}>Error! Address not found!</p>
                <ul id="searchList" className={`${style.ul}`}>
                    {
                        searchAddr.map(el=>{
                            return <li key={el} onClick={setSearch} id={el} className={style.li}>{el}</li>
                        })
                    }
                </ul>
                <Button onClick={submitFunc} propClass={style.btn} text="submit"></Button>
            </div>
        </div>
    )
}
export default Search