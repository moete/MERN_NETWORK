import React, { useEffect } from "react";
import Widget from "components/Widget/index";
import { connect } from "react-redux";
import { getGithubRepos } from "../../../appRedux/actions/profile";
const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  console.log(username);
  useEffect(() => {
    getGithubRepos(username);
  }, []);
  return (
    <Widget title="Github Repos" styleName="gx-card-profile-sm">
      <div className="gx-pt-2">
        <div className="gx-gallery-list">
          {repos === null
            ? null
            : repos.map(repo => (
                <div key={repo._id}>
                  <div>
                    <h4>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.name}
                      </a>
                    </h4>
                    <p>{repo.description}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </Widget>
  );
};
const mapStateToProps = state => ({
  repos: state.profile.repos
});
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
