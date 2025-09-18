import React from 'react';

function getAvatarUrl(username) {
  const safe = encodeURIComponent(username || 'guest');
  return `https://avatars.dicebear.com/v2/avataaars/${safe}.svg?options[mood][]=happy`;
}

function UserCard({ user }) {
  const { name, username, email, phone, website, company, address } = user;
  const avatarUrl = getAvatarUrl(username);

  return (
    <div className="card h-100 shadow-sm">
      <div className="text-center pt-4">
        <img
          src={avatarUrl}
          alt={`${username} avatar`}
          width="120"
          height="120"
          className="rounded-circle"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title mb-1">{name}</h5>
        <h6 className="card-subtitle text-muted mb-3">@{username}</h6>

        <ul className="list-unstyled mb-3 small">
          <li><strong>Email:</strong> {email}</li>
          <li><strong>Phone:</strong> {phone}</li>
          <li><strong>Website:</strong> <a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a></li>
          {company?.name && <li><strong>Company:</strong> {company.name}</li>}
          {address && (
            <li>
              <strong>Address:</strong> {address.suite}, {address.street}, {address.city} {address.zipcode}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default UserCard;


