import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

export default class NavBar extends React.Component{
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li>
                        <NavLink to = "/women"
                            className="nav-link"
                        >
                            Women
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to = "/men"
                            className="nav-link"
                        >
                            Men
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/kids"
                            className="nav-link"
                        >
                            Kids
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}