import style from './Data.module.css'
import React, {useEffect, useState} from 'react'

const Data = props => {

    const [unitData, setUnitData] = useState([])
    console.log(unitData)

    const fetchUnits = async () => {
        const fetchData = await fetch(`https://lux-tsms.herokuapp.com/api/v1/units/${+props.data.id}`)
        const parsedData = await fetchData.json()
        setUnitData(parsedData)
    }
    useEffect(() => {
        fetchUnits()
    }, [])

    return(
        <div className={style.box}>
            {
                unitData.map(el=>{
                    return(
                        <div className={style.container} key={el.units_id}>
                            <h4>Tips: {el.part}</h4>
                            <h4>Sērijas nr.: {el.units_serial_number}</h4>
                            <h4>Datums: {el.units_date}</h4>
                            <h4>Virziens: {el.direction}</h4>
                            <h4>Garantija: {el.warranties_date}</h4>
                            <h4>Ražotājs: {el.manufacturer}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Data