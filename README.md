# User Management Dashboard

A React + Vite admin dashboard built with example data, designed for demonstrating automated testing with **Katalon Studio**.

## Tech Stack

- React 18
- Vite
- React Router DOM v6
- Plain CSS (no UI libraries)

## Pages

| Route | Description |
|---|---|
| `/` | Home — stats overview and recently added users |
| `/users` | Users — searchable/filterable data table |
| `/users/:id` | Profile — full user detail page |

## Example Data

Eight example users are defined in `src/data/users.js`. Each user has:
- `id`, `name`, `email`, `role`, `department`, `status`, `joined`, `phone`, `location`, `bio`

## Running Locally

> **Node.js 18+** is required.

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Test Attributes

All interactive and key display elements have both `id` and `data-testid` attributes, making them easy to target in Katalon:

| Element | `id` / `data-testid` |
|---|---|
| Navigation bar | `navbar` |
| Home CTA button | `hero-cta-button` |
| Users table | `users-table` |
| Search input | `search-input` |
| Status filter | `status-filter` |
| Role filter | `role-filter` |
| Results count | `results-count` |
| Per-row view button | `view-details-{id}` |
| Profile name | `profile-name` |
| Profile status badge | `profile-status` |
| Back to users link | `back-to-users` |

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Navbar.css
├── data/
│   └── users.js
├── pages/
│   ├── Home.jsx / Home.css
│   ├── Users.jsx / Users.css
│   └── UserDetail.jsx / UserDetail.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```
