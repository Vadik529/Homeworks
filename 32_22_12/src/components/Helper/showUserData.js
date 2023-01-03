import React from "react";
import "./showUserData.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const ShowUserData = (props) => {
  return (
    <div>
      <div className="userWrapper container">
        <div className="userInfo">
          <div className="card text-center mb-3">
            <img className="card-img-left" src={props.img} alt="user's avatar" />
            <div>
            <p>
              Login: <a href={props.link}>{props.login}</a>
            </p>
            <p>
              Id: <b>{props.id}</b>
            </p>
            <p>
              Bio: <b>{props.bio || "not specified"}</b>
            </p>
            </div>
          </div>
          <div className="userFollowers card mb-3">
            <h3>Community:</h3>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
