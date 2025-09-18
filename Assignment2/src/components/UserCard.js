import React from 'react';
import { Card, Avatar, Button, Space, Typography } from 'antd';
import { 
  EditOutlined, 
  DeleteOutlined, 
  HeartOutlined, 
  HeartFilled,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  BankOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

function getAvatarUrl(username) {
  const safe = encodeURIComponent(username || 'guest');
  return `https://avatars.dicebear.com/v2/avataaars/${safe}.svg?options[mood][]=happy`;
}

function UserCard({ user, onEdit, onDelete, onToggleLike }) {
  const { name, username, email, phone, website, company, address, liked } = user;
  const avatarUrl = getAvatarUrl(username);

  const handleEdit = () => {
    onEdit(user);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  const handleToggleLike = () => {
    onToggleLike(user.id);
  };

  return (
    <Card
      className="user-card"
      hoverable
      cover={
        <div className="card-cover">
          <Avatar
            size={120}
            src={avatarUrl}
            icon={<UserOutlined />}
            className="user-avatar"
          />
          <div className="user-info">
            <Title level={4} className="user-name">{name}</Title>
            <Text type="secondary" className="username">@{username}</Text>
          </div>
        </div>
      }
      actions={[
        <Button
          key="like"
          type={liked ? "primary" : "default"}
          icon={liked ? <HeartFilled /> : <HeartOutlined />}
          onClick={handleToggleLike}
          className={liked ? "liked-button" : ""}
        >
          {liked ? 'Liked' : 'Like'}
        </Button>,
        <Button
          key="edit"
          type="default"
          icon={<EditOutlined />}
          onClick={handleEdit}
        >
          Edit
        </Button>,
        <Button
          key="delete"
          type="default"
          danger
          icon={<DeleteOutlined />}
          onClick={handleDelete}
        >
          Delete
        </Button>
      ]}
    >
      <div className="user-details">
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <div className="detail-item">
            <MailOutlined className="detail-icon" />
            <Text copyable>{email}</Text>
          </div>
          
          <div className="detail-item">
            <PhoneOutlined className="detail-icon" />
            <Text>{phone}</Text>
          </div>
          
          <div className="detail-item">
            <GlobalOutlined className="detail-icon" />
            <Text>
              <a href={`https://${website}`} target="_blank" rel="noreferrer">
                {website}
              </a>
            </Text>
          </div>
          
          {company?.name && (
            <div className="detail-item">
              <BankOutlined className="detail-icon" />
              <Text>{company.name}</Text>
            </div>
          )}
          
          {address && (
            <div className="detail-item">
              <EnvironmentOutlined className="detail-icon" />
              <Text>
                {address.suite}, {address.street}<br />
                {address.city} {address.zipcode}
              </Text>
            </div>
          )}
        </Space>
      </div>
    </Card>
  );
}

export default UserCard;