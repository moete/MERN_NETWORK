import React from "react";
import { Button, notification } from "antd";
import { Link } from "react-router-dom";


function CardsListItem(props, { styleName }) {
  console.log(props.job)
  const { menu, jobs } = props;

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Job added',
      description:
        'Job succesufly added.',
    });
  };
  if (jobs.length > 0) {
    return (
      jobs.map((job, index) => {
    console.log(job.company_id)
        return (
          <div className={`gx-user-list ${styleName}`} key={job._id} >
            <div className="gx-description">
              <div className="gx-flex-row">
                <h4>{job.title}</h4>
                <span className="gx-d-inline-block gx-toolbar-separator">&nbsp;</span>
                <span>{job.company_id.company_name}</span>

              
              </div>
              <p className="gx-text-grey gx-mb-2">{job.description}</p>
              <p>
                <span className="gx-mr-3">{job.posted_date}<span className="gx-text-grey">Posted Date</span></span>
                <span className="gx-mr-3">{job.employees_needed}  <span className="gx-text-grey">Employess needed</span></span>
              </p>

            </div>
            <div className="gx-card-list-footer">
              <Link  to="job-details/JobDetail" >
                <Button type="primary">More Info
          </Button>
              </Link>


              <Button onClick={() => openNotificationWithIcon('success')}  >Save</Button>
            </div>
          </div>
        )
      })
    )
  } else {
    return (<h3>No jobs yet</h3>)
  }


}

export default CardsListItem;
