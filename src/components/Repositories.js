import React, { useState, useEffect } from "react";
import axios from "axios";

const Repositories = ({ data }) => {
  const [list, setList] = useState([]);
  const [showRepositories, setShowRepositories] = useState(false);

  useEffect(() => {
    if (data && data.repos_url) {
      axios
        .get(data.repos_url)
        .then((res) => {
          setList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data]);

  const toggleRepositories = () => {
    setShowRepositories(!showRepositories);
  };

  return (
    <>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary mx-auto"
          style={{ margin: "30px" }}
          type="button"
          onClick={toggleRepositories}
        >
          {showRepositories ? "Hide Repositories" : "Show Repositories"}
        </button>
      </div>

      {showRepositories && list.length > 0 && (
        <ul className="list-group list-group-horizontal d-flex flex-wrap justify-content-center gap-1">
          {list.map((repo, index) => (
            <li className="list-group-item mt-1 border rounded" key={index}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
        
      )}
      <div style={{marginTop: "100px"}}></div>
    </>
  );
};

export default Repositories;
