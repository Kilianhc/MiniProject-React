import { Link, useNavigate } from "react-router-dom"
import TravelsAdd from "../pages/TravelsAdd"
import check from "../assets/images/check.png.png"
import uncheck from "../assets/images/uncheck.png.png"

export default function TravelCard({ _id, country, cities, visited, year, description, image, deleteButton, setTravelToEdit }) {

    const navigate = useNavigate()

    const handleEdit = () => {
        setTravelToEdit({ _id, country, cities, visited, year, description, image })
        navigate("/travels")
    }

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
                <button id="deleteButton" onClick={() => deleteButton(_id)}>Delete</button><br />
                </Link>
                <button id="updateButton" onClick={handleEdit}>Edit</button> <br />
                <Link to={`/travels/${_id}`}>
                <button>Details</button>
                </Link>
            </span>
            
            

        </div>
    )
}