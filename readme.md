# CodeReviewerAI

A full-stack AI-powered code review application using React (frontend) and Node.js/Express (backend) with Google Gemini AI for intelligent code analysis and feedback.

## Features

- Paste or write code in the editor and get instant AI-powered code reviews.
- Reviews focus on code quality, best practices, performance, security, scalability, and maintainability.
- Modern React frontend with syntax highlighting and markdown rendering.
- Backend integrates with Google Gemini AI for advanced code analysis.

## Project Structure

```
backend/
  .env
  package.json
  server.js
  src/
    app.js
    controllers/
      ai.controller.js
    routes/
      ai.routes.js
    services/
      ai.servics.js
frontend/
  .gitignore
  eslint.config.js
  index.html
  package.json
  README.md
  vite.config.js
  public/
    vite.svg
  src/
    App.css
    App.jsx
    index.css
    main.jsx
    assets/
      react.svg
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

#### 1. Clone the repository

```sh
git clone <your-repo-url>
cd codeReviewerAI
```

#### 2. Backend Setup

```sh
cd backend
npm install
```

- Create a `.env` file in the `backend` folder with your Google Gemini API key:
  ```
  GOOGLE_GEMINI_KEY=your_google_gemini_api_key
  ```

- Start the backend server:
  ```sh
  node server.js
  ```
  The backend runs on `http://localhost:3000`.

#### 3. Frontend Setup

```sh
cd ../frontend
npm install
npm run dev
```

- The frontend runs on `http://localhost:5173` by default.

## Usage

1. Open the frontend in your browser.
2. Enter or paste your code in the editor.
3. Click the **Review** button.
4. View the AI-generated review and suggestions on the right panel.

## Technologies Used

- **Frontend:** React, Vite, PrismJS, react-markdown, rehype-highlight, react-simple-code-editor, Axios
- **Backend:** Node.js, Express, @google/generative-ai, dotenv, cors

## License

This project is licensed under the ISC License.

---

**Note:** This project uses the Google Gemini API for code review. Ensure you have a valid API key and comply with Google's terms of service.