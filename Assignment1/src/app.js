import React, { useEffect, useState } from 'react';
import './App.css';
import UserCard from './UserCard';

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const response = await fetch(USERS_API);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || 'Failed to load users');
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">User Profiles</h1>

      {isLoading && (
        <div className="d-flex justify-content-center my-5">
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </div>
      )}

      {!!error && !isLoading && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-4 mb-4">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;


