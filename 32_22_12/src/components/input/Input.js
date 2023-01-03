import React, { useState, useEffect } from "react";
import { ShowUserData } from "../Helper/showUserData";
import "./input.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export function Input() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState("");
  const [reposInfo, setReposInfo] = useState([]);
  const [error, setError] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError(false);
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
    setUserName("");
  };

  useEffect(() => {
    userData &&
      fetch(userData.repos_url)
        .then((response) => response.json())
        .then((data) => setReposInfo(data))
        .catch(() => {
          setError(true);
          alert("There aren't user with this name");
        });
  }, [userData]);

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter user"
            value={userName}
            onChange={onChangeHandler}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Find
          </button>
        </div>
      </form>

      {userData && !error && (
        <div className="container">
          <ShowUserData
            login={userData.login}
            id={userData.id}
            bio={userData.bio}
            img={userData.avatar_url}
            followers={userData.followers}
            following={userData.following}
            link={userData.url}
            reposName={reposInfo}
          />

          {reposInfo.length > 0
            ? reposInfo.map((repos, index) => {
                if (index > 4) return;
                return (
                  <div className="card mb-3" key={repos.name}>
                    <div>
                      <a href={repos.url}>{repos.name}</a>
                    </div>

                    <div>
                      Issues:
                      <span>{repos.open_issues}</span>
                    </div>
                    <div>
                      Forks:
                      <span>{repos.forks}</span>
                    </div>
                  </div>
                );
              })
            : "no repos"}
        </div>
      )}
    </>
  );
}
