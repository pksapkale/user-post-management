/*

    Method Name - mergeUserListWithPosts
    Desc - For merging posts with respected user
    params - {} 

*/

export const mergeUserListWithPosts = (userList, postsList) => {
  let mergedArray = userList.map((user) => {
    user["posts"] = postsList.filter((post) => post.userId === user.id);
    return user;
  });
  return mergedArray;
};
