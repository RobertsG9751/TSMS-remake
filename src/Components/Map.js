import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker, Popup, MapContainer, TileLayer} from 'react-leaflet'
import style from './Map.module.css'
import FilterBtn from '../UI/FilterBtn';
import * as Colors from '../Data/Colors'
import Button from '../UI/Button'


const MapComp = props => {

    const [systems, setSystems] = useState([])

    const fetchData = async (e) =>{
        const fetchData = await fetch(`https://lux-tsms.herokuapp.com/api/v1/systems`)
        const parsedData = await fetchData.json()
        setSystems(parsedData)
    }
    
    useEffect(()=>{
        fetchData()
    }, [])

    const assignColor = (el) => {
        switch (el.type){
            case 'vārti':
                return Colors.purpleIcon
            case "konsole":
                return Colors.redIcon
            case "kontrolieris":
                return Colors.yellowIcon
            case "skaitītājs":
                return Colors.greenIcon
            case "balsts":
                return Colors.blueIcon
            default:
                return Colors.greyIcon
        }
    }
    const toggleModal = (el) =>{
        if(el.status){
            props.mapUpFunc(el)
        }else{
            props.mapUpFunc({"status": true, "data": {
                "title": "Dati",
                "type": "data",
                "id": el.target.id
            }})
        }
    }
    return(
        <MapContainer center={[56.6511, 23.7196]} zoom={13} scrollWheelZoom={true}>
            <TileLayer key={props.theme}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={localStorage.getItem("mapTheme")}
                />
                {
                systems.map(el=>{
                    return(
                        <Marker icon={assignColor(el)} key={el.systems_id} position={[el.systems_latitude,  el.systems_longitude]}>
                            <Popup>
                                Iela: {el.objects_name} <br/>
                                Garantija: {el.warranties_date} <br/>
                                Tips: {el.type} <br/>
                                <Button id={el.systems_id} onClick={toggleModal} propClass={style.btn} text={"Vēl dati"}></Button>
                            </Popup>
                        </Marker>
                    )
                })
            }
            <FilterBtn toggleModal={toggleModal}/>
        </MapContainer>
    )
}
export default MapComp