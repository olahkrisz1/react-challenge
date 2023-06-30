import React, { useState } from "react";
import axios from "axios";

const SearchUser = ({ onSubmit }) => {
  const [user, setUser] = useState("");
  const [list, setList] = useState({});
  const [showUserData, setShowUserData] = useState(false);

  const fetchDefaultUser = () => {
    axios
      .get(
        `https://api.github.com/users/olahkrisz1?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&sort=created`
      )
      .then((res) => {
        setList(res.data);
        setShowUserData(true);
        onSubmit(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = (event) => {
    setUser(event.target.value);
  };

  const onClick = () => {
    setShowUserData(true);
    axios
      .get(
        `https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&sort=created`
      )
      .then((res) => {
        setList(res.data);
        onSubmit(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useState(() => {
    fetchDefaultUser();
  }, []);

  return (
    <div
      className="card mb-3 mx-auto"
      style={{ maxWidth: "900px", margin: "50px" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          {showUserData && list.avatar_url && (
            <img
              src={list.avatar_url}
              alt="avatar"
              style={{ width: "300px" }}
            />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="input-group mb-3">
              <input
                type="text"
                name="user"
                onChange={onChange}
                value={user}
                className="form-control"
                placeholder="Enter a github username"
                required
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={onClick}
              >
                Search
              </button>
            </div>
            <br />
            {showUserData && list.login && (
              <ul className="list-group">
                <li className="list-group-item">Name: {list.name}</li>
                <li className="list-group-item">UserName: {list.login}</li>
                <li className="list-group-item">Location: {list.location}</li>
                <li className="list-group-item">Email Address: {list.email}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
