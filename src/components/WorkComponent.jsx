import React from 'react';

function WorkComponent(props) {
  return (
    <div className="col-md-6 work" work-item="true">
      <div className="work-icon">{props.test.icon()}</div>
      <div className="work-content">
        <h6>{props.test.title}</h6>
        <p>{props.test.description}</p>
      </div>
    </div>
  );
}

export default WorkComponent;
