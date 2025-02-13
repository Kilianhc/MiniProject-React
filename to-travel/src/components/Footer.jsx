import {Link} from "react-router-dom"
import GitIconFooter from "../assets/images/GitIconFooter.png"

export default function Footer() {
    return (
        <div id="footer">
            <img src={GitIconFooter} alt={GitIconFooter} />
            <a target="_blank" href="https://github.com/Kilianhc/MiniProject-React">Github Repository</a>
        </div>
    )
}