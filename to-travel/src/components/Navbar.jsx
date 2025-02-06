import {Link} from "react-router-dom"
import logo from "../assets/images/logo.png"

export default function NavBar() {
    return (
        <div id="navBar">
            <h1>To Travel List</h1>
            <img id="logo" src={logo} alt="logo" />
        </div>


    )
}