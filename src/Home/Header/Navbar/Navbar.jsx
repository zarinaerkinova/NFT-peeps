import React from "react"
import Button from "../../../components/Button/Button";
import Logo from "./logo.png";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="logo" href="/#"><img src={Logo} alt="png" /></a>
                <div className="links">
                    <ul>
                        <li><a href="/#">Collection</a></li>
                        <li><a href="/#">Content</a></li>
                        <li><a href="/#">Roadmap</a></li>
                        <li><a href="/#">Team</a></li>
                    </ul>
                    <Button text='OpenSea' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar