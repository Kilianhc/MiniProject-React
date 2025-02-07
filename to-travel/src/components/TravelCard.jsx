import { Link } from "react-router-dom"
import TravelsAdd from "../pages/TravelsAdd"
import check from "../assets/images/check.png.png"
import uncheck from "../assets/images/uncheck.png.png"

export default function TravelCard({ _id, country, city, visited, year, deleteButton }) {



    return (
        <div id="travelCard">
            <div id="itemsTravels">
                <h2>{country}</h2>
                <h3>{city}</h3>
                <p>
                    {visited === true && <img id="check" src={check} alt="check"></img>}
                    {visited === false && <img id="check" src={uncheck} alt="uncheck"></img>}
                </p>
                <p>
                    {visited === true && <span>{year}</span>}
                </p>
            </div>

            <div id="buttons">
                <button onClick={() => deleteButton(_id)}>Delete</button>
                <Link to={"/travels"}><button>Update</button></Link>
                
            </div>

        </div>
    )
}