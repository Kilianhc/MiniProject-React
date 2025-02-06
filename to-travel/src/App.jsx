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

export default function App() {

  return (
    <div className="app">
      <NavBar />
      <div className="mainContainer">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/travels/:travelId" element={<TravelDetails/>} />
        <Route path="/travels" element={<TravelsAdd/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}


