import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchPosts } from "../services/apiCallService";
import { mergeUserListWithPosts } from "../services/helperService";
import { UserNameCard } from "./UserNameCard";
import { LoaderCustom } from "./LoaderCustom";

export const Directory = () => {

  // Getting users list here
  const usersQuery = useQuery({ queryKey: ["users"], queryFn: fetchUsers });
  
  // Getting posts list here
  const postsQuery = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });


  // While getting users || posts list will show loader
  if (usersQuery.isLoading || postsQuery.isLoading) {
    return <LoaderCustom />;
  }

  // If we got any error while api call then show the error message
  if (usersQuery.error || postsQuery.error) {
    return <div>{usersQuery.error ? usersQuery.error.message : postsQuery.error.message}</div>;
  }

  // After successfully got user list will show it here
  if ((usersQuery.data && usersQuery.data.length) && (postsQuery.data && postsQuery.data.length)) {

    // Merging users list with posts for getting user wise posts
    let userInfoWithPosts = mergeUserListWithPosts(usersQuery.data, postsQuery.data);

    return <div style={{ height: "100vh" }} className="container w-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center flex-column gap-3 border border-dark p-md-5">
        <h2>Directory</h2>
        <div >
          <UserNameCard userInfoWithPosts={userInfoWithPosts} />
        </div>
      </div>
    </div>
  }
};
