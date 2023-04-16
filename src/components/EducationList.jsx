import React from 'react'

const EducationList = (props) => {
	return (
		<>
			<div className=" col-md-6">
				<div className="eductionList">
				<p className="year">{props.education.year} </p>
							<h3 className="Subject">{props.education.subject}</h3>
							<p className='university'> {props.education.university}</p>
				</div>

					</div>
		</>
	)
}

export default EducationList
