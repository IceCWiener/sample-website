import { useParams, Link } from 'react-router-dom'
import users from '../data/users'
import './UserDetail.css'

function UserDetail() {
  const { id } = useParams()
  const user = users.find((u) => u.id === Number(id))

  if (!user) {
    return (
      <div id="user-not-found" className="not-found" data-testid="user-not-found">
        <h2>User not found</h2>
        <p>No user exists with ID <strong>{id}</strong>.</p>
        <Link id="back-to-users-404" to="/users" className="btn btn-primary" data-testid="back-to-users-404">
          Back to Users
        </Link>
      </div>
    )
  }

  return (
    <div id="user-detail-page" className="user-detail-page" data-testid="user-detail-page">
      <Link
        id="back-to-users"
        to="/users"
        className="back-link"
        data-testid="back-to-users"
      >
        ← Back to Users
      </Link>

      <div id="user-profile-card" className="profile-card" data-testid="user-profile-card">
        <div className="profile-header">
          <div
            id={`profile-avatar-${user.id}`}
            className="profile-avatar"
            data-testid="profile-avatar"
            aria-hidden="true"
          >
            {user.name.charAt(0)}
          </div>
          <div className="profile-header-info">
            <h1 id="profile-name" className="profile-name" data-testid="profile-name">
              {user.name}
            </h1>
            <p id="profile-role" className="profile-role" data-testid="profile-role">
              {user.role} · {user.department}
            </p>
            <span
              id="profile-status"
              className={`badge status-${user.status.toLowerCase()}`}
              data-testid="profile-status"
            >
              {user.status}
            </span>
          </div>
        </div>

        <div id="profile-details" className="profile-details" data-testid="profile-details">
          <div className="detail-group">
            <h2 className="detail-group-title">Contact Information</h2>
            <dl className="detail-list">
              <div className="detail-row">
                <dt>Email</dt>
                <dd id="profile-email" data-testid="profile-email">{user.email}</dd>
              </div>
              <div className="detail-row">
                <dt>Phone</dt>
                <dd id="profile-phone" data-testid="profile-phone">{user.phone}</dd>
              </div>
              <div className="detail-row">
                <dt>Location</dt>
                <dd id="profile-location" data-testid="profile-location">{user.location}</dd>
              </div>
            </dl>
          </div>

          <div className="detail-group">
            <h2 className="detail-group-title">Account Details</h2>
            <dl className="detail-list">
              <div className="detail-row">
                <dt>User ID</dt>
                <dd id="profile-id" data-testid="profile-id">#{user.id}</dd>
              </div>
              <div className="detail-row">
                <dt>Department</dt>
                <dd id="profile-department" data-testid="profile-department">{user.department}</dd>
              </div>
              <div className="detail-row">
                <dt>Joined</dt>
                <dd id="profile-joined" data-testid="profile-joined">{user.joined}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div id="profile-bio-section" className="bio-section" data-testid="profile-bio-section">
          <h2 className="detail-group-title">About</h2>
          <p id="profile-bio" data-testid="profile-bio">{user.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
