import style from './Search.module.css'
import Button from '../UI/Button'
import {useEffect, useRef, useState} from 'react'
import ChangeTheme from './ChangeTheme'
import Geocode from "react-geocode";

const Search = props => {

    Geocode.setApiKey(process.env.REACT_APP_API_KEY);

    let  searchRef = useRef(null)
    let addresses = []
    let randvar = 1;
    let addressSet = new Set()
    let finalArr = []

    console.log(JSON.parse(localStorage.getItem("addresses")))

    const [searchAddr, setSerachAddr] = useState([])

    const submitFunc = async e => {
        try{
            Geocode.fromAddress("Jelgava, " + searchRef.current.value).then(
                (response) => {
                  const { lat, lng } = response.results[0].geometry.location;
                  props.upAddress({lat: lat, lng: lng, zoom: 20})
                  props.closeModal({status: false})
            })
        }
        catch(err){
            document.getElementById("error").style.display="block"
        }
    }
    let searchArray = [] 
    let newArray = []
    const searchChange = async e =>{
        document.getElementById("error").style.display="none"
        newArray = []
        searchArray = []
        JSON.parse(localStorage.getItem("addresses")).forEach((element,i)=>{
            if(e.target.value===""){
                setSerachAddr([])
            }
            else if(element.toLowerCase().includes(e.target.value.toLowerCase())){
                newArray[i] = element
                searchArray = newArray.filter(a=>a)
                searchArray.forEach(el=>{
                    addressSet.add(el)
                })
                finalArr = [...addressSet]
            }
        })
        setSerachAddr(finalArr)
    }
    const changeSearch = e =>{
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
                            return <li key={el} onClick={changeSearch} id={el} className={style.li}>{el}</li>
                        })
                    }
                </ul>
                <Button onClick={submitFunc} propClass={style.btn} text="submit"></Button>
            </div>
        </div>
    )
}
export default Search