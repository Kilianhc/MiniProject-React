import { Link } from "react-router-dom"
import TravelsAdd from "../pages/TravelsAdd"
import check from "../assets/images/check.png.png"
import uncheck from "../assets/images/uncheck.png.png"

export default function TravelCard({ _id, country, cities, visited, year, deleteButton, setTravelToEdit }) {



    return (
        <div id="travelCard">
            
                <span>{country}</span>
                <span>{cities}</span>
                <span>
                    {visited === true && <img id="check" src={check} alt="check"></img>}
                    {visited === false && <img id="check" src={uncheck} alt="uncheck"></img>}
                </span>
                <span>{year}</span>

            <span id="buttons">
                <Link to={"/"}>
                <button onClick={() => deleteButton(_id)}>Delete</button>
                </Link>
                <Link to={"/travels"}>
                <button onClick={() => setTravelToEdit({_id, country, cities, visited, year})}>Edit</button>
                </Link>   
            </span>

        </div>
    )
}