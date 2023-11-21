import React from "react";
import { useParams } from "react-router-dom";

export const UserProfile = () => {
  // Created a instance for reading dynamic routing params
  const params = useParams();

  // Reading user_id from URL
  const { user_id } = params;
  console.log(user_id)

  return <div>UserProfile</div>;
};
