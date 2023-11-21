import React from "react";
import { useNavigate } from "react-router-dom";

export const UserNameCard = (props) => {

  // Created an instance for using navigation
  const navigate = useNavigate();

  // Jumping to profile page
  const jumpToPage = (route) => {
    navigate(`${route}`);
  }

  return (
    <ol className="list-group list-group-numbered">
      {props.userInfoWithPosts.map((user) => {
        return (
          <li onClick={() => jumpToPage(user.id)} key={user.id} className="cursor-pointer shadow shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-start mb-2">
            <div className="ms-2 me-auto d-flex">
              <div>Name: </div>
              <div className="ms-2 ">{user.name}</div>
            </div>
            <span className="ms-2">Post: </span>
            <span className="badge bg-secondary rounded-pill ms-2">
              {user.posts.length}
            </span>
          </li>
        );
      })}
    </ol>
  );
};
