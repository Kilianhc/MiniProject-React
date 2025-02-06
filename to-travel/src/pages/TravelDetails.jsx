import {Link, useParams} from "react-router-dom"
import TravelsData from "./../assets/travels.json"

export default function TravelDetails(props) {

    const {travelId} = useParams()
    const travelInfo = TravelsData.find((travel) => travel._id === travelId)

    return (
        <div id="detailsPage">
            <h1>{travelInfo.country}</h1>
        </div>
    )
}