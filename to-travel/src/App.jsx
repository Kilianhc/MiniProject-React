import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import TravelsAdd from "./pages/TravelsAdd";
import TravelDetails from "./pages/Traveldetails";
import ErrorPage from "./pages/ErrorPage";
import './App.css'
import TravelsData from "./assets/travels.json"

export default function App() {

  const [travels, setTravels] = useState(TravelsData)
  const [travelToEdit, setTravelToEdit] = useState(null)

  const deleteButton = (id) => {
    const filteredTravels = travels.filter((travel) => {
      return travel._id !== id
    })
    setTravels(filteredTravels)
  }

  const handleAddTravel = (newTravel) => {
    if (travelToEdit) {
      setTravels(travels.map((travel) => (travel._id === travelToEdit._id ? newTravel : travel)))
      setTravelToEdit(null)
    } else {
      setTravels([...travels, { _id: Date.now(), ...newTravel }])
    }

  }

  return (
    <div className="app">
      <NavBar />
      <div className="mainContainer">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home travels={travels} deleteButton={deleteButton} setTravelToEdit={setTravelToEdit} />} />
          <Route path="/about" element={<About />} />
          <Route path="/travels/:travelId" element={<TravelDetails travels={travels} />} />
          <Route path="/travels" element={<TravelsAdd handleAddTravel={handleAddTravel} travelToEdit={travelToEdit} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}


