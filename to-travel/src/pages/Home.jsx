import {Link} from "react-router-dom"
import TravelsData from "../assets/travels.json"
import { useState } from "react"
import TravelCard from "../components/TravelCard"

export default function Home({travels, deleteButton}) {

    return (
        <div id="homePage">
            <h1 id="title">Travel´s List</h1>

            {travels.map((travel) => (
                <div key={travel._id}>
                    <TravelCard {...travel} deleteButton={deleteButton}/>
                    <Link to={`/travels/${travel._id}`}><button>Ver detalles</button></Link>
                    <hr />
            </div>
        ))}
        </div>
    )
}