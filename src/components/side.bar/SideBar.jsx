import { NavLink } from "react-router-dom"
import Logo from "../logo/Logo"
import { BsListTask } from "react-icons/bs";
import { GrTask } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { MdOutlineSummarize } from "react-icons/md";

import "./SideBar.css"

const SideBar = () => {
    return (
        <div className="side-bar">
            <Logo />
            <nav>
                <ul className="side-links">
                    <li>
                        
                        <NavLink to={"/"} end><BsListTask /> <p>tasks</p></NavLink>
                    </li>
                    <li>
                       
                        <NavLink to={"/completed"}><GrTask /> <p>completed</p></NavLink>
                    </li>
                    <li>
                        
                        <NavLink to={"/about"}><MdOutlineSummarize /><p>about</p></NavLink>
                    </li>
                    <li>
                        
                        <NavLink to={"/contact-us"}><GrContact /><p>contact us</p></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar