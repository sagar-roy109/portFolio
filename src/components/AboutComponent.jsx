import React from "react";
import portfolioImage from "../images/about.webp";
import "../css/Work.css";
import "../css/About.css";
import { FaLocationArrow } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

function AboutComponent() {
  return (
    <>

      <div className="container">

			<div className="page-title">
				<h2>About <span className='textColor'>me</span></h2>
			</div>

        <div className="row">
          <div className="col-md-4">
            <img src={portfolioImage} alt="image" className="img-fluid" />
          </div>
          <div className="col-md-8 portfolio-details">
            <h2>
              I'm <span className="textColor">John Dev</span>, Full Stack Web
              Developer !
            </h2>
						<p className="about-descriptiopn">
            I am an ambitious, resourceful, and results-driven professional with a
            Postgraduate Diploma in Web Development from Conestoga College,
            Ontario, Canada. <br/> I have a prolific career designing and developing websites
            from concept to rollout, with a detailed understanding of various
            programming languages. With expertise in languages such as HTML,CSS3, Bootstrap ES6, Jquery
            PHP, MySql,MongoDb, React Js, Node JS, and Express Js,PostMan, Webpack, Firebase,  Tailwind CSS, Figma, XD, PhotoShop, Illustrator, Linux OS.
						<br/>
						I enjoy every step of the development process, from designing to deployment.
          </p>
					<ul className="about-location">
						<li><span><FaLocationArrow/></span>  Kitchener, ON, Canada</li>
						<li><span><AiTwotoneMail/></span>  <a href="mailto:sroy.dev109@gmail.com">sroy.dev109@gmail.com</a></li>
					</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComponent;
