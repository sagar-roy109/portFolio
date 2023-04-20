import React from 'react'

const PortfolioList = (props) => {

	const {image, name, category, tech, id} = props.data;

	return (
		<>
			<div className="list-item col-md-6">
				<div className="list-wrapper">
				<div className="image">
					<img className='img-fluid' src={image} alt={name} />
				</div>
				<div className="details">
					<p className="name"> {name}</p>
					<p className="category">{category}</p>
					<p className="technology">{tech}</p>
				</div>
				</div>

				</div>
		</>
	)
}

export default PortfolioList
