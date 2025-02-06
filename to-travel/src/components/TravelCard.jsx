import {Link} from "react-router-dom"
import TravelsAdd from "../pages/TravelsAdd"

export default function TravelCard({_id, country, city, visited, year, deleteButton}) {



    return(
        <div>
            <h2>{country}</h2>
            <h3>{city}</h3>
            <p>{visited}</p>
            <p>
                {visited === true && <span>V</span>}
                {visited === false && <span>X</span>}
            </p>
            <p>
                {visited === true && <span>{year}</span>}
            </p>
            <div>
              <button onClick={() => deleteButton (_id)}>Delete</button>
              <Link to={"/travels"}><button>Update</button></Link> 
            </div>
            
        </div>
    )
}