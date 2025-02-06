import {Link} from "react-router-dom"
import TravelsData from "../assets/travels.json"
import { useState } from "react"
import TravelCard from "../components/TravelCard"

export default function Home() {

    const [travels, setTravels] = useState(TravelsData)

    const deleteButton = (id) => {
        const filteredTravels = travels.filter((travel) => {
            return travel._id !== id
        })
        setTravels(filteredTravels)
    }

    return (
        <div id="homePage">
            <h1 id="title">Travel´s List</h1>
            <div id="items">
                <span>Country</span>
                <span>City</span>
                <span>Visited</span>
                <span>Year</span>
            </div>

            {travels && travels.map((travel) => (
                <div key={travel._id}>
                    <TravelCard {...travel} deleteButton={deleteButton}/>
                    <Link to={`/travels/${travel._id}`}><button>Ver detalles</button></Link>
            </div>
        ))}
        </div>
    )
}