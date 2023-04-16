import React from 'react'
import EducationList from '../components/EducationList'

const EducationComponent = () => {

	const educations =[
		{
			id:1,
			year: "2022-2023",
			university: "Conestoga College, ON, Canada",
			subject: "PGD in Web Development"
		},
		{
			id:2,
			year: "2013-2017",
			university: "Gujarat Technological University, Gujarat, India",
			subject: "BEng. Electronics & Communication Engineering"
		}
	]
	return (
		<>
			<div className="container">
			<div className="page-title">
				<h2>Edu<span className='textColor'>cation</span></h2>
			</div>
			</div>
			<div className="container">
				<div className="row">

					{
						educations.map(data =>
							<EducationList key={data.id} education = {data}/>
						)

					}



				</div>
			</div>
		</>
	)
}

export default EducationComponent
