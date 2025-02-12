import { Link, useParams } from "react-router-dom"
import TravelsData from "./../assets/travels.json"
import check from "../assets/images/check.png.png"
import uncheck from "../assets/images/uncheck.png.png"

export default function TravelDetails({ travels }) {

    const { travelId } = useParams()
    const travelInfo = travels.find((travel) =>
        String(travel._id) === String(travelId))

    return (
        <div id="detailsPage">
            <h1>{travelInfo.country}</h1>
            <img id="images" src={travelInfo.image} alt={travelInfo.country} />
            <div id="detailsRow">
                <span>{travelInfo.cities}</span>
                <span>
                    {travelInfo.visited === true && <img id="check" src={check} alt="check"></img>}
                    {travelInfo.visited === false && <img id="check" src={uncheck} alt="uncheck"></img>}
                </span>
                <span>{travelInfo.year}</span>
            </div>
            <p>{travelInfo.description}</p>
        </div>
    )
}