import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Spin, Alert, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './App.css';
import UserCard from './components/UserCard';
import EditUserModal from './components/EditUserModal';

const { Title } = Typography;
const USERS_API = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const response = await fetch(USERS_API);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        // Add liked state to each user
        const usersWithLikes = data.map(user => ({ ...user, liked: false }));
        setUsers(usersWithLikes);
      } catch (err) {
        setError(err.message || 'Failed to load users');
        message.error('Failed to load users');
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsModalVisible(true);
  };

  const handleSaveUser = (updatedUser) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setIsModalVisible(false);
    setEditingUser(null);
    message.success('User updated successfully!');
  };

  const handleDeleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    message.success('User deleted successfully!');
  };

  const handleToggleLike = (userId) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, liked: !user.liked } : user
      )
    );
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setEditingUser(null);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spin 
          indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} 
          size="large" 
        />
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="header">
        <Title level={1} className="title">
          User Profiles
        </Title>
      </div>

      <Row gutter={[16, 16]} className="users-grid">
        {users.map((user) => (
          <Col 
            key={user.id}
            xs={24}    // Mobile: 1 column
            sm={12}    // Tablet: 2 columns
            md={8}     // Desktop: 3 columns
            lg={8}     // Large screens: 3 columns
            xl={8}     // Extra large: 3 columns
          >
            <UserCard
              user={user}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
              onToggleLike={handleToggleLike}
            />
          </Col>
        ))}
      </Row>

      <EditUserModal
        user={editingUser}
        visible={isModalVisible}
        onSave={handleSaveUser}
        onCancel={handleCloseModal}
      />
    </div>
  );
}

export default App;
