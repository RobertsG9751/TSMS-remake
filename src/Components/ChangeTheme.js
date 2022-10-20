import style from './ChangeTheme.module.css'
import Button  from '../UI/Button'
import L from 'leaflet';

const ChangeTheme = props => {

    const toggleDark = el =>{
        props.changeTheme('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png')
        props.closeModal({"status": false})
    }
    const toggleLight = el =>{
        props.changeTheme(`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png`)
        props.closeModal({"status": false})
    }
    const toggleDefault = el =>{
        props.changeTheme(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`)
        props.closeModal({"status": false})
    }
    const toggleSatelite = el =>{
        props.changeTheme(`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`)
        props.closeModal({"status": false})
    }
    const toggleRed = el =>{
        props.changeTheme(`https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png`)
        props.closeModal({"status": false})
    }
    const toggleBlackout = el =>{
        props.changeTheme(`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`)
        props.closeModal({"status": false})
    }
    const toggleColored = el =>{
        props.changeTheme(`http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png`)
        props.closeModal({"status": false})
    }
    const toggleBrown = el =>{
        props.changeTheme(`https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png`)
        props.closeModal({"status": false})
    }

    return(
        <div className={`${style.box} center`}>
            <Button propClass={style.btn} onClick={toggleDark} text="Dark"/>
            <Button propClass={style.btn} onClick={toggleLight} text="Light"/>
            <Button propClass={style.btn} onClick={toggleDefault} text="Default"/>
            <Button propClass={style.btn} onClick={toggleSatelite} text="Satelite"/>
            <Button propClass={style.btn} onClick={toggleRed} text="Red"/>
            <Button propClass={style.btn} onClick={toggleBlackout} text="Blackout"/>
            <Button propClass={style.btn} onClick={toggleColored} text="Colored"/>
            <Button propClass={style.btn} onClick={toggleBrown} text="Brown"/>
        </div>
    )
}
export default ChangeTheme