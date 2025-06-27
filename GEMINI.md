# Gemini Workspace Context

## About the Project

This project is a website for "Proofbound," an AI-powered book writing service. It's built using the Quarto static site generator and features a landing page with pricing options, Stripe integration for payments, and serverless backend functions for processing.

## Technologies and Frameworks

- **Frontend**: Quarto, HTML, CSS, JavaScript
- **Backend**: Netlify Functions (Node.js)
- **Payments**: Stripe
- **AI Service**: HAL9
- **Hosting**: Netlify

## Project Structure

- `_quarto.yml`: Main configuration file for the Quarto project. It defines the project type, output directory, and website structure.
- `*.qmd`: Quarto markdown files that represent the pages of the website (e.g., `index.qmd`, `about.qmd`).
- `netlify.toml`: Configuration for Netlify, including build settings, the functions directory, and redirects.
- `netlify/functions/`: Contains the serverless Node.js functions for backend logic, such as Stripe payment verification.
- `package.json`: Defines the Node.js dependencies for the serverless functions (`stripe`, `dotenv`).
- `_resources/`: Contains static assets like CSS, JavaScript, and images.
- `docs/`: The output directory for the generated static website.

## Development and Build

- **Local Development**: To run the development server, use the command `quarto preview`. The server will run on the port specified in `_quarto.yml`.
- **Building the Site**: To generate the static site, use the command `quarto render`. The output will be placed in the `docs/` directory.
- **Tests**: There are no automated tests configured in `package.json`.

## Dependencies

The serverless functions in `netlify/functions/` have the following Node.js dependencies, as listed in `package.json`:
- `stripe`: For interacting with the Stripe API.
- `dotenv`: For managing environment variables.
