/*

    Method Name - fetchUsers
    Desc - For getting users list
    params - {} 

*/

export const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = response.json();
  return data;
};

/*

    Method Name - fetchPosts
    Desc - For getting posts list
    params - {} 

*/

export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = response.json();
  return data;
};

