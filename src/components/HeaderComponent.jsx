import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { AiOutlineUser, AiOutlineHome, AiOutlineFileText, AiOutlineCodepen, AiOutlineClose } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { useRef, useState } from 'react';

import "../css/Header.css";

const HeaderComponent = () => {
	const navMenuRef = useRef();
	const mobileMenuShow = useState(false);
	const handleMobileMenu = ()=>{
		navMenuRef.current.classList.toggle('mobile_menu');

	}


	return (
		<>
			<nav>
				<div className="container">
					<div className="nav__wrapper">
						<div className="nav__logo">
							<Link to = '/'>WEB PRO</Link>
						</div>
						<div className="nav__menu" ref={navMenuRef}>
							<div className="mobile_menu_close_icon">
								<AiOutlineClose onClick={handleMobileMenu} />
							</div>
							<ul>
								<li><NavLink to={'/'}><span><AiOutlineHome/></span>Home</NavLink></li>
								<li><NavLink to={'/about'}><span><AiOutlineUser/></span>About</NavLink></li>
								<li><NavLink to={'/resume'}><span><AiOutlineFileText/></span>Resume</NavLink></li>
								<li><NavLink to={'/portfolio'}><span><AiOutlineCodepen/></span>Portfolio</NavLink></li>
							</ul>
						</div>
						<div className="mobile__menu_icon">
							<FiBarChart2 onClick={handleMobileMenu}/>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default HeaderComponent
