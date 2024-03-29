import React from 'react'

const JobListComponent = (props) => {
	const {job} = props;

	return (
		<>
		<div className="col-md-12">
							<div className="jobs">
							<div className="job-info">
								<h2>{job.job}</h2>
								<p>{job.location}</p>
								<p>{job.duration}</p>
							</div>
							<div className="job-details">
								<h2>{job.company}</h2>
								<p dangerouslySetInnerHTML={ {__html: job.desc} }/>
							</div>
							</div>
					</div>
		</>
	)
}

export default JobListComponent
