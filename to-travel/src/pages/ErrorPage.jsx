import logo404 from "../assets/images/logo.png"
import {Link} from "react-router-dom"
import Home from "./Home"

export default function ErrorPage() {
    return(
        <div id="errorPage">
            <img src={logo404} alt="logo404" />
            <br />
            <h1>Error 404!</h1>
            <Link to="/">
            <button>Back to Home</button>
            </Link>
        </div>
        
    )
}