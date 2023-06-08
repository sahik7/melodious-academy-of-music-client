import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {
    const query = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users");
        return res.json();
      });
      
      const { data: users = [], refetch } = query;
    return (
        <div className="border border-red-500">
            {users.length}
        </div>
    );
};

export default ManageUsers;