import React from 'react'
import { useQuery } from '@tanstack/react-query';

function Test() {
  const fetchUsers = async () => {
  const res = await fetch('http://localhost:8082/myapp/user/alluser');
  return res.json();
};
const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
   if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading data</h2>;


  return (
    <div>
       <h1>Users</h1>
      {data.map((user) => (
        <p key={user.uid}>{user.user_name}</p>
      ))}
      
    </div>
  )
}

export default Test
