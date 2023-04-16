import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { BsCode, BsWordpress } from "react-icons/bs";
import { FaPhp } from "react-icons/fa";
import WorkComponent from './WorkComponent';

function WhatIdoComponent() {


const website = ()=>{
	return <CgWebsite/>
}
const code = ()=>{
	return <BsCode/>
}
const php = ()=>{
	return <FaPhp/>
}
const wordpress = ()=>{
	return <BsWordpress/>
}

	const works = [
		{
			id: 1,
			title : "Front-End Development",
			description: "I do front end development using HTML, CSS3, ES6, Jquery, React js, Bootstrap, Tailwind Css. I do responsive pixel perfect conversion from XD, Figma, or PSD Files",
			icon: website
		},
		{
			id: 2,
			title : "Back-End Development",
			description: "I use mordern technologies like Node Js, Express Js, MongoDB, PHP, MySQl for backend development",
			icon: code
		},
		{
			id: 3,
			title : "WordPress Customization",
			description: "I do WordPress customization using Elementor & other WordPress Page Builder. I have also expereinece in WooCommerce Customization ",
			icon: wordpress
		},
		{
			id: 4,
			title : "WordPress Development",
			description: "I do WordPress theme development from HTML or any JPG or Scratch files. I use custom codes for ACF, Custom Post Type. I also create Elementor Addons for WordPress development",
			icon:  php
		},

	]

	return (
		<>
			<div className="container">
				<div className="page-title work-title">
					<h2>What I <span className='textColor'>do ?</span></h2>
				</div>
				<div className="row">
					{
						works.map(work => (
							<WorkComponent key={work.id} test={work} data-test-item={true.toString()} />
						))
					}


				</div>
			</div>
		</>
	)
}

export default WhatIdoComponent
