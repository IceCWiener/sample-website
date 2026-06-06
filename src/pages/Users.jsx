import { useState } from 'react'
import { Link } from 'react-router-dom'
import users from '../data/users'
import './Users.css'

function Users() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [roleFilter, setRoleFilter] = useState('All')

  const filtered = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.department.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'All' || user.status === statusFilter
    const matchesRole = roleFilter === 'All' || user.role === roleFilter
    return matchesSearch && matchesStatus && matchesRole
  })

  return (
    <div id="users-page" className="users-page" data-testid="users-page">
      <h1 id="users-title" className="page-title" data-testid="users-title">
        All Users
      </h1>

      <div id="users-filters" className="filters" data-testid="users-filters">
        <input
          id="search-input"
          type="text"
          className="search-input"
          placeholder="Search by name, email or department…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          data-testid="search-input"
          aria-label="Search users"
        />

        <select
          id="status-filter"
          className="filter-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          data-testid="status-filter"
          aria-label="Filter by status"
        >
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <select
          id="role-filter"
          className="filter-select"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          data-testid="role-filter"
          aria-label="Filter by role"
        >
          <option value="All">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>

      <p id="results-count" className="results-count" data-testid="results-count">
        Showing {filtered.length} of {users.length} users
      </p>

      <div className="table-wrapper">
        <table id="users-table" className="users-table" data-testid="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="users-table-body" data-testid="users-table-body">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} id="no-results" data-testid="no-results" className="no-results">
                  No users match your filters.
                </td>
              </tr>
            ) : (
              filtered.map((user) => (
                <tr
                  key={user.id}
                  id={`user-row-${user.id}`}
                  data-testid={`user-row-${user.id}`}
                >
                  <td className="name-cell">
                    <span className="table-avatar" aria-hidden="true">
                      {user.name.charAt(0)}
                    </span>
                    {user.name}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`badge role-${user.role.toLowerCase()}`} data-testid={`role-badge-${user.id}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>{user.department}</td>
                  <td>
                    <span
                      className={`badge status-${user.status.toLowerCase()}`}
                      data-testid={`status-badge-${user.id}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joined}</td>
                  <td>
                    <Link
                      id={`view-details-${user.id}`}
                      to={`/users/${user.id}`}
                      className="btn btn-secondary btn-sm"
                      data-testid={`view-details-${user.id}`}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
