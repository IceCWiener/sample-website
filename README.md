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

# Docker has specific installation instructions for each operating system.
# Please refer to the official documentation at https://docker.com/get-started/

# Pull the Node.js Docker image:
docker pull node:24-slim

# Create a Node.js container and start a Shell session:
docker run -it --rm --entrypoint sh node:24-slim

# Verify the Node.js version:
node -v # Should print "v24.16.0".

# Verify npm version:
npm -v # Should print "11.13.0".

# Build the Docker image:
docker build -t sample-website .

# Run the container (publicly accessible on http://<your-ip>:80):
docker run -it --rm -p 80:80 sample-website

# Host
hosted on https://icecwiener.github.io/sample-website/