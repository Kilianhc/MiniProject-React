import {Link} from "react-router-dom"
import logo from "../assets/images/logo.png"

export default function NavBar() {
    return (
        <div id="navBar">
            <img id="logo" src={logo} alt="logo" />
            <h1 id="navTitle">To Travel List</h1>
        </div>


    )
}