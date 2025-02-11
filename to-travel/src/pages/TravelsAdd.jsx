import { useEffect } from "react"
import { useState } from "react"
import {Link} from "react-router-dom"

export default function TravelsAdd({handleAddTravel, travelToEdit}) {

    const [country, setCountry] = useState(" ")
    const [cities, setCities] = useState(" ")
    const [visited, setVisited] = useState(false)
    const [year, setYear] = useState(2025)
    const [why, setWhy] = useState(" ")
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        if(travelToEdit) {
            setCountry(travelToEdit.country)
            setCities(travelToEdit.cities)
            setVisited(travelToEdit.visited)
            setYear(travelToEdit.year)
            setWhy(travelToEdit.why)
            setIsEditing(true)
        }
    }, [travelToEdit])

    const handleInput = (e) => {
        const {name, value} = e.target
        switch (name) {
            case "country": setCountry(value); break;
            case "cities": setCities(value); break;
            case "visited": setVisited(JSON.parse(value)); break;
            case "year": setYear(value); break;
            case "why": setWhy(value); break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTravel = {country, cities, visited, year, why}
        handleAddTravel(newTravel)

        setCountry(" ")
        setCities(" ")
        setVisited(false)
        setYear(2025)
        setWhy(" ")
    }

    return (
        <div id="form">
            <form onSubmit={handleSubmit}>
                 <span>Add or Update a Travel</span>
                 <div>
                    <label>Country
                        <input name="country" type="text" value={country} placeholder="Country" onChange={handleInput}/>
                    </label>
                    <label>Cities
                        <input name="cities" type="text" value={cities} placeholder="Cities" onChange={handleInput} />
                    </label>
                    <label>Are you visited this country?
                        <select name="visited" value={visited} onChange={handleInput}>
                            <option value="true">Yes!</option>
                            <option value="false">Not...yet</option>
                        </select>
                    </label>
                    <label>Year of your travel
                        <input name="year" type="text" value={year} placeholder="Year of your travel" onChange={handleInput} />
                    </label>
                    <label>Why do you like this travel?
                        <textarea name="why" id="whyForm" value={why} placeholder="Because..." onChange={handleInput} />
                    </label>
                    <button type="submit">Save</button>
                 </div>
            </form>
            
        </div>
    )
}