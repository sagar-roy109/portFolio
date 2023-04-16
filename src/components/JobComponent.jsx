import React from 'react';
import jobs from "../Data/workHistory.json";
import JobListComponent from './JobListComponent';

const JobComponent = () => {
	return (
		<>

			<div className="container">
			<div className="page-title">
				<h2>Work<span className='textColor'> History</span></h2>
			</div>
			</div>
			<div className="container">
				<div className="row">
					{
						jobs.map(job=><JobListComponent key={job.id} job={job}/>)
					}

				</div>
			</div>
		</>
	)
}

export default JobComponent
