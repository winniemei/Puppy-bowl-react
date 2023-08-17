import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom";
import './App.css'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0);
  const [selectedPup, setSelectedPup] = useState([]);

  return (
    <>
        
      <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path="/SinglePlayer/:id" element={<SinglePlayer />}></Route>
          <Route path="/NewPlayerForm" element={<NewPlayerForm />}></Route>
      </Routes>
      <NavBar />

      </>
  )
}

export default App
