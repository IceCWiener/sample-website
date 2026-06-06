import { Link } from 'react-router-dom'
import users from '../data/users'
import './Home.css'

const activeCount = users.filter((u) => u.status === 'Active').length
const adminCount = users.filter((u) => u.role === 'Admin').length

function Home() {
  return (
    <div id="home-page" className="home-page" data-testid="home-page">
      <section id="home-hero" className="hero" data-testid="hero-section">
        <h1 id="hero-title" className="hero-title" data-testid="hero-title">
          User Management Dashboard
        </h1>
        <p id="hero-subtitle" className="hero-subtitle" data-testid="hero-subtitle">
          A central place to view, manage, and track all users in your organization.
        </p>
        <Link
          id="hero-cta"
          to="/users"
          className="btn btn-primary"
          data-testid="hero-cta-button"
        >
          View All Users
        </Link>
      </section>

      <section id="stats-section" className="stats-section" data-testid="stats-section">
        <div id="stat-total" className="stat-card" data-testid="stat-total">
          <span className="stat-value" data-testid="stat-total-value">{users.length}</span>
          <span className="stat-label">Total Users</span>
        </div>
        <div id="stat-active" className="stat-card" data-testid="stat-active">
          <span className="stat-value" data-testid="stat-active-value">{activeCount}</span>
          <span className="stat-label">Active Users</span>
        </div>
        <div id="stat-admins" className="stat-card" data-testid="stat-admins">
          <span className="stat-value" data-testid="stat-admins-value">{adminCount}</span>
          <span className="stat-label">Admins</span>
        </div>
        <div id="stat-departments" className="stat-card" data-testid="stat-departments">
          <span className="stat-value" data-testid="stat-departments-value">
            {new Set(users.map((u) => u.department)).size}
          </span>
          <span className="stat-label">Departments</span>
        </div>
      </section>

      <section id="recent-section" className="recent-section" data-testid="recent-section">
        <h2 id="recent-title" className="section-title" data-testid="recent-title">
          Recently Added Users
        </h2>
        <ul id="recent-list" className="recent-list" data-testid="recent-list">
          {users.slice(0, 3).map((user) => (
            <li key={user.id} className="recent-item" data-testid={`recent-item-${user.id}`}>
              <div className="recent-avatar" aria-hidden="true">
                {user.name.charAt(0)}
              </div>
              <div className="recent-info">
                <span className="recent-name">{user.name}</span>
                <span className="recent-meta">
                  {user.role} · {user.department}
                </span>
              </div>
              <Link
                id={`view-user-${user.id}`}
                to={`/users/${user.id}`}
                className="btn btn-secondary btn-sm"
                data-testid={`view-user-${user.id}`}
              >
                View
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home
