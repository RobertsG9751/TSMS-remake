import React, { useState } from 'react';
import './App.css';
import MapComp from './Components/Map'
import Modal from './UI/Modal'

function App() {
  
  const [mapTheme, setMapTheme] = useState(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`)
  const [isModal, setIsModal] = useState({"status": false, "data": {
    "title": "x",
    "type": "x"
  }})

  const toggleModal = props =>{
    setIsModal(props)
  }
  const changeTheme = el => {
    setMapTheme(el)
  }
  return (
    <React.Fragment>
      {
        isModal.status && (
          <Modal data={isModal.data} changeTheme={changeTheme} closeModal={toggleModal}/>
        )
      }
      <div className='app'>
        <MapComp theme={mapTheme} mapUpFunc={toggleModal}></MapComp>
      </div>
    </React.Fragment>
  );
}

export default App;
