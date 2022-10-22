import style from './Search.module.css'
import Button from '../UI/Button'
import {useEffect, useRef, useState} from 'react'
import ChangeTheme from './ChangeTheme'
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const Search = props => {

    const provider = new OpenStreetMapProvider();

    let  searchRef = useRef(null)
    let addresses = []
    let randvar = 1;
    let addressSet = new Set()
    let finalArr = []
    const [searchAddr, setSerachAddr] = useState([])

    const submitFunc = async e => {
        try{
            const results = await provider.search({ query: "Jelgava, " + searchRef.current.value});
            props.upAddress({lat: results[0].y, lng: results[0].x, zoom: 20})
            props.closeModal({status: false})
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
            else if(element.address.includes(e.target.value.toLowerCase())){
                newArray[i] = element.address
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