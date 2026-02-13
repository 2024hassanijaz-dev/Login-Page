# Login Page Project

A responsive split-screen login page built with plain HTML, CSS, and JavaScript.

## Project Overview

This project includes:
- A left panel with a login form
- A right panel with a welcome message and decorative blue background pattern
- Client-side validation for email and password
- A password show/hide toggle
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
- Demo success message on valid submit

## Customization

- Change colors in `styles.css` under `:root`
- Update logo by replacing `loclogo.png`
- Edit welcome/form text in `index.html`
- Modify validation rules in `script.js`

## Notes

- Current login action is demo-only and does not connect to a backend.
- To use real authentication, replace the submit handler logic in `script.js` with an API request.
