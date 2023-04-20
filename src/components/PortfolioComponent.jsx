import React from 'react'
import image from '../images/portfolio.png'
import PortfolioList from './PortfolioList'


const portfolios = [
	{
	 'id': 1,
	 'image': image,
	 'name': 'Daraz Online',
	 'category': 'Ecommerce',
	 'tech': 'NodeJs, ReactJs, MongoDB, Express'
	},
	{
		'id': 2,
		'image': image,
		'name': 'Daraz Online',
		'category': 'Ecommerce',
		'tech': 'NodeJs, ReactJs, MongoDB, Express'
	 },
	 {
		'id': 3,
		'image': image,
		'name': 'Daraz Online',
		'category': 'Ecommerce',
		'tech': 'NodeJs, ReactJs, MongoDB, Express'
	 },
	 {
		'id': 4,
		'image': image,
		'name': 'Daraz Online',
		'category': 'Ecommerce',
		'tech': 'NodeJs, ReactJs, MongoDB, Express'
	 }
]


const PortfolioComponent = () => {
	return (
		<>
			<div className="portfolio_wrapper container">
			<div className="page-title">
				<h2>My <span className='textColor'>Works</span></h2>
			</div>
			</div>
			<div className="portfolio-list container">
				<div className="row">

					{
					portfolios.map(portfolio=> 	<PortfolioList data ={portfolio} key={portfolio.id} />)
				}


				</div>
			</div>
		</>
	)
}

export default PortfolioComponent
