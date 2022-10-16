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
  return (
    <React.Fragment>
      {
        isModal.status && (
          <Modal sendFilter={sendFilter} data={isModal.data} changeTheme={changeTheme} closeModal={toggleModal}/>
        )
      }
      <div className='app'>
        <MapComp filters={filterOptions} theme={mapTheme} mapUpFunc={toggleModal}></MapComp>
      </div>
    </React.Fragment>
  );
}

export default App;
