import style from './SystemForms.module.css'
import Button from '../../UI/Button'
import { useEffect, useRef, useState } from 'react'

const SystemForms = props =>{

    const [types, setTypes] = useState([])

    const getTypes = async () =>{
        const fetchData = await fetch(`https://lux-tsms.herokuapp.com/api/v1/types`)
        const parseData = await fetchData.json()
        setTypes(parseData)
        console.log(parseData)
    }
    const latRef = useRef(null)
    const lngRef = useRef(null)
    const nameRef = useRef(null)
    const dateRef = useRef(null)
    const typeRef = useRef(null)
    const objectRef = useRef(1)
    const warrantyRef = useRef(1)
    useEffect(()=>{
        getTypes()
    }, [])

    const addSystem = async e =>{
        if(latRef.current.value==""||
        lngRef.current.value==""||
        nameRef.current.value==""||
        dateRef.current.value==""||
        typeRef.current.value==""||
        objectRef.current.value==""||
        warrantyRef.current.value==""){
            alert("Aizpildiet visus laukus!")
        }else{
            const data = {
                systems_latitude:latRef.current.value,
                systems_longitude: lngRef.current.value,
                systems_name:nameRef.current.value,
                systems_date:dateRef.current.value,
                lux_types_id: typeRef.current.value,
                lux_objects_id:objectRef.current.value,
                lux_warranties_id:warrantyRef.current.value
            }
            console.log(data)
            console.log(JSON.stringify(data))
            const fetchData = await fetch(`https://lux-tsms.herokuapp.com/api/v1/systems/create`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            const result = await fetchData.json()
            if(result.status="[s] success [system saved]"){
                props.reloadMap()
                props.closeModal({status: false})
            }else{
                alert("Kaut kas nogāja greizi!")
            }
        }
    }

    return(
        <div className={style.box}>
            <div className={style.wrapper}>
                <label htmlFor="lat">latitude</label>
                <input ref={latRef} className={style.input} id="lat" type="number"/>
            </div>
            <div className={style.wrapper}>
                <label htmlFor="lng">longitude</label>
                <input ref={lngRef} className={style.input} id="lng" type="number"/>
            </div>
            <div className={style.wrapper}>
                <label htmlFor="name">Sistēmas nosaukums</label>
                <input ref={nameRef} className={style.input} id="name" type="text"/>
            </div>
            <div className={style.wrapper}>
                <label htmlFor="date">Sistēmas datums</label>
                <input ref={dateRef} className={style.input} id="date" type="date"/>
            </div>
            <div className={style.wrapper}>
                <label htmlFor="type">Tips</label>
                <select ref={typeRef} className={`${style.input} ${style.option}`} id="type">
                    <option value=""></option>
                    {
                        types.map(el=>{
                            return(
                                <option key={el.types_id} value={el.types_id}>{el.type}/{el.manufacturer}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className={style.wrapper}>
                <label htmlFor="object">Piesaistītais objekts</label>
                <input ref={objectRef} className={style.input} id="object" type="text"/>
            </div>
            <div className={style.wrapper}>
                <label htmlFor="warranty">Garantija</label>
                <input ref={warrantyRef} className={style.input} id="warranty" type="text"/>
            </div>
            <div className={style.wrapper}>
                <Button onClick={addSystem} propClass={style.btn} text="Submit!"></Button>
            </div>
        </div>
    )
}
export default SystemForms