import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
const d = 'img/data.png';

const Menu = () =>{
    return(
        <div className="container-fluid">
                <div className="row">
                    <div className="col-12 menu">
                        <div id="n"> <img src={d} alt={d} ></img> </div>
                        <nav>
                            <ul>
                                <li><NavLink to={'/'} className={'nav'}>Home</NavLink></li>
                                <li><NavLink to={'/About'} className={'nav'}>About Us</NavLink></li>
                                <li><NavLink to={'/Study'} className={'nav'}>Study Material</NavLink></li>
                                <li><NavLink to={'/'} className={'nav'}>Online Exam</NavLink></li>
                                <li><NavLink to={'/'} className={'nav'}>Contact Us</NavLink></li>
                            </ul>
                        </nav>
                        <button id="b">Log In</button>
                        <div id="icons">
                            <FaUserTie />
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Menu