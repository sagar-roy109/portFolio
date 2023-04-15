import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { AiFillLinkedin,AiFillGithub, } from "react-icons/ai";
import { TbBrandFiverr } from "react-icons/tb";
import {Link} from "react-router-dom";

const HomeComponent = () => {
	return (
		<div className="container">
        <div className="home__wrapper">
          <div className="home__content">
            <h1>
              JOHN <span className="textColor">DEV</span>
            </h1>
            <div>
              <h3 style={{ fontSize: "2em" }}>
                <span>I'm a</span>{' '}
                <TypeAnimation className="textColor"
                  sequence={[
                    "Front-end Developer",
                    1500,
                    "Full Stack Developer",
                    1500,
                    "WordPress Developer",
                    1500,

                  ]}
                  repeat={Infinity}
                />
              </h3>
            </div>
						<p className="home__desc">
						Full Stack Web Developer and Web Application specializing in front-end and back-end development. Experienced with all stages of the development cycle for dynamic websites. Well versed in numerous programming languages JavaScript, ES6, Nodejs, Express Js, PHP, structured language HTML5 CSS3, Libraries REACT-JS With MongoDB & MySql Database.
						</p>
						<div className="home__social">
								<ul className="icons">
									<li><a title='linkedin link' href="https://linkedin.com"><AiFillLinkedin/></a></li>
									<li><a title='Github Link' href="https://linkedin.com"><AiFillGithub/></a></li>
									<li><a title='Fiverr Link' href="https://linkedin.com"><TbBrandFiverr/></a></li>
								</ul>
						</div>
						<div className="home__button">
							<Link className="button" to="about">About Me</Link>
						</div>
          </div>
        </div>
      </div>
	)
}

export default HomeComponent
