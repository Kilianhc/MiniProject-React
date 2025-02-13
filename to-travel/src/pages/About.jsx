import {Link} from "react-router-dom"
import aboutimg from "../assets/images/About.webp"
import GitIcon from "../assets/images/GitIconFooter.png"
import InIcon from "../assets/images/InIcon.png"

export default function About() {
    return (
        <div id="aboutPage">
            <h1 id="title">To Travel List App</h1>
            <p>To Travel List App is a React app. It functions as a travel planner, allowing users to manage past and upcoming trips. Users can add, edit, delete, and view details of each trip easily. <br/> 
              The intuitive interface makes trip organization seamless and efficient. Perfect for keeping track of all your travel adventures!
            </p>
            <img src={aboutimg} alt={aboutimg} />
            <h2>Kilian D. Hernández Chirino</h2>
            <div id="icons">
                <a target="_blank" href="https://github.com/Kilianhc"><img id="gitIcon" src={GitIcon} alt={GitIcon}></img></a>
                <a target="_blank" href="https://www.linkedin.com/in/kilian-hern%C3%A1ndez-chirino-b84aa8168/"><img id="inIcon" src={InIcon} alt={InIcon}></img></a>
            </div>
        </div>
    )
}