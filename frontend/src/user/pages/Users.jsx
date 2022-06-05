import React from 'react'
import UsersList from '../components/UsersList';
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "sid",
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      places: 5,
    },
  ];
  return (
     <UsersList items={USERS}/>
  );
}

export default Users