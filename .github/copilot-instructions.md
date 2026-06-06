# Copilot Instructions

## Project Overview
React + Vite user management admin dashboard for demonstrating automated testing with Katalon.

## Tech Stack
- React 18 (Vite)
- React Router DOM for client-side routing
- Plain CSS (no UI library)

## Conventions
- Use `id` and `data-testid` attributes on all interactive elements for Katalon test targeting
- Example user data lives in `src/data/users.js`
- Pages in `src/pages/`, components in `src/components/`
- CSS files co-located with their component/page

## Pages
- `/` — Home / Landing page
- `/users` — Users data table
- `/users/:id` — User detail / profile page
