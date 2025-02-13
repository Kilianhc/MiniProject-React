import { Link } from "react-router-dom"

export default function SideBar({ setPage }) {
    return (
        <aside id="lateralMenu">
            <ul id="menuList">
                <Link to="/" >
                    <button>
                        Home</button>
                </Link>
                <Link to="/travels">
                    <button>Add/Update Travel</button>
                </Link>
                <Link to="/about">
                    <button>About</button>
                </Link>
            </ul>
        </aside>
    )
}