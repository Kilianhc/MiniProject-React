import {Link} from "react-router-dom"
import TravelsData from "../assets/travels.json"
import { useState } from "react"
import TravelCard from "../components/TravelCard"

export default function Home({travels, deleteButton, setTravelToEdit}) {

    return (
        <div id="homePage">

            <div id="travelHeader">
                <span>Country</span>
                <span>Cities</span>
                <span>Visited</span>
                <span>Year</span>
                <span></span>
            </div>

            {travels.map((travel) => (
                <div id="containerTravel" key={travel._id}>
                    <TravelCard {...travel} deleteButton={deleteButton} setTravelToEdit={setTravelToEdit}/>
                    <Link to={`/travels/${travel._id}`}><button>Ver detalles</button></Link>
                </div>
        ))}
        </div>
    )
}