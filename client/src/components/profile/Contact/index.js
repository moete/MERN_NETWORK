import React from "react";
import Widget from "components/Widget";
import { contactList } from "../../../routes/socialApps/Profile/data";

const Contact = socials => {
  console.log(socials);
  return (
    <Widget title="Socials" styleName="gx-card-profile-sm">
      <div className="gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list">
        <div className="gx-mr-3">
          <i className={`icon gx-fs-xxl gx-text-grey`} />
        </div>
        <div className="gx-media-body">
          <span className="gx-mb-0 gx-text-grey gx-fs-sm"></span>
          <p className="gx-mb-0">{socials.facebook}</p>
        </div>
      </div>
    </Widget>
  );
};

export default Contact;
