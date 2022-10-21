import React, { useState } from 'react';
import './App.css';
import MapComp from './Components/Map'
import Modal from './UI/Modal'

function App() {
  
  const [filterOptions, setFilterOptions] = useState(['balsts', 'skaititaji', "kontrolieris", "vārti", "konsole"])
  const [mapTheme, setMapTheme] = useState(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`)
  const [isModal, setIsModal] = useState({"status": false, "data": {
    "title": "x",
    "type": "x"
  }})
  const [mapCords, setMapCords] = useState([56.6511, 23.7196])
  const [mapZoom, setMapZoom] = useState(13)

  const toggleModal = props =>{
    setIsModal(props)
  }
  const changeTheme = el => {
    localStorage.setItem("mapTheme", el)
    setMapTheme(el)
  }
  const sendFilter = e =>{
    setFilterOptions(e)
  }
  const upAddress = e =>{
    console.log(e)
    setMapZoom(e.zoom)
    setMapCords([e.lat, e.lng])
  }
  return (
    <React.Fragment>
      {
        isModal.status && (
          <Modal upAddress={upAddress} sendFilter={sendFilter} data={isModal.data} changeTheme={changeTheme} closeModal={toggleModal}/>
        )
      }
      <div className='app'>
        <MapComp cords={mapCords} zoom={mapZoom} filters={filterOptions} theme={mapTheme} mapUpFunc={toggleModal}></MapComp>
      </div>
    </React.Fragment>
  );
}

export default App;
