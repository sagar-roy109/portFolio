import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { AiOutlineUser, AiOutlineHome, AiOutlineFileText, AiOutlineCodepen } from "react-icons/ai";
import "../css/Header.css";

const HeaderComponent = () => {
	return (
		<>
			<nav>
				<div className="container">
					<div className="nav__wrapper">
						<div className="nav__logo">
							<Link to = '/'>WEB PRO</Link>
						</div>
						<div className="nav__menu">
							<ul>
								<li><NavLink to={'/'}><span><AiOutlineHome/></span>Home</NavLink></li>
								<li><NavLink to={'/about'}><span><AiOutlineUser/></span>About</NavLink></li>
								<li><NavLink to={'/resume'}><span><AiOutlineFileText/></span>Resume</NavLink></li>
								<li><NavLink to={'/portfolio'}><span><AiOutlineCodepen/></span>Portfolio</NavLink></li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default HeaderComponent
