# Login Page Project

A responsive split-screen login page built with plain HTML, CSS, and JavaScript.

## Project Overview

This project includes:
- A left panel with a login form
- A right panel with a welcome message and decorative blue background pattern
- Client-side validation for email and password
- A password show/hide toggle
- A demo authentication flow with a mock database layer
- A custom logo image (`loclogo.png`)

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)

## File Structure

- `index.html`: Main page structure and content
- `styles.css`: Visual styles, layout, responsive behavior, and background pattern
- `script.js`: Form validation and interactive behavior
- `loclogo.png`: Logo used in the login panel

## How to Run

1. Open the project folder.
2. Open `index.html` in your browser.

No build tools or dependencies are required.

## Features

- Responsive two-panel layout (desktop and mobile)
- Styled form inputs with focus states
- Email format validation
- Password length validation (minimum 6 characters)
- Inline error messages
- Password visibility toggle
- Structured demo authentication flow (UI + auth layer separation)

## Customization

- Change colors in `styles.css` under `:root`
- Update logo by replacing `loclogo.png`
- Edit welcome/form text in `index.html`
- Modify validation rules in `script.js`

## Authentication Flow (Current Demo)

`index.html` uses `novalidate`, so all validation/messages come from `script.js`.

Current login flow in `script.js`:
1. Validate email/password format on submit.
2. Call `authenticateUsingDatabase(email, password)`.
3. `authenticateUsingDatabase` uses `demoDatabase` methods:
   - `connect()`
   - `findUserByEmail(email)`
   - `verifyPassword(user, inputPassword)`
4. Show result:
   - `not_found` -> "User does not exist."
   - `wrong_password` -> "Incorrect password."
   - `success` -> "Login successful (demo only)."

Important: `findUserByEmail` currently checks an empty `usersTable` array on purpose, so no real users exist yet.

## Backend Integration Notes

When real backend/data is ready, keep the UI code and replace only auth/data access:

1. Replace `demoDatabase.connect()` with your real connection or remove it if your API handles connection server-side.
2. Replace `findUserByEmail` and `verifyPassword` with API calls (recommended) or backend service calls.
3. Keep password verification on the server with hashed passwords (do not verify plaintext on the client).
4. Update success handling to store auth state (token/cookie/session) and redirect as needed.
5. Keep the `reason` mapping (`not_found`, `wrong_password`) or map backend error codes to these UI messages.

## Notes

- This project is front-end only right now.
- Demo auth logic exists to make backend integration easier later without rewriting form UI behavior.
