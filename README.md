# [ServeSense Client](https://serve-sense.netlify.app/)

**ServeSense** is a Service Review Application System that allows users to browse, rate, and review services. This repository contains the client-side code, built with modern tools and libraries for an interactive and responsive user experience.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Backend Repository](#backend-repository)
- [License](#license)
- [Author](#author)

---

## Features

- **Service Browsing**: Explore a list of available services.
- **User Authentication**: Firebase-powered authentication for login and registration.
- **Ratings and Reviews**: Users can rate and review services.
- **Interactive Design**: Built with Tailwind CSS and Framer Motion for smooth animations.
- **Toast Notifications**: Real-time feedback for user actions.
- **Responsive Design**: Optimized for all screen sizes, including:
  - Desktop
  - Tablet
  - Mobile

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **Vite** (installed globally is optional but recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TahsinAlahi/server-sense-client.git
   ```

2. Navigate to the project directory:

   ```bash
   cd serve-sense-client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file:

   ```bash
   touch .env
   ```

5. Add environment variables to the `.env` file (see the [Environment Variables](#environment-variables) section).

---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_API_URL=your-api-endpoint
VITE_API_KEY=your-firebase-api-key
VITE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_PROJECT_ID=your-firebase-project-id
VITE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_APP_ID=your-firebase-app-id
```

---

## Scripts

- **Start development server**:

  ```bash
  npm run dev
  ```

  Runs the app in development mode and watches for file changes.

- **Build for production**:

  ```bash
  npm run build
  ```

  Creates an optimized production build.

- **Preview production build**:

  ```bash
  npm run preview
  ```

  Serves the production build locally for testing.

- **Lint the code**:

  ```bash
  npm run lint
  ```

  Checks the code for linting errors and enforces coding standards.

---

## Dependencies

- **[axios](https://www.npmjs.com/package/axios)**: HTTP client for API requests.
- **[firebase](https://www.npmjs.com/package/firebase)**: Authentication and database integration.
- **[framer-motion](https://www.npmjs.com/package/framer-motion)**: Animations for React.
- **[react](https://www.npmjs.com/package/react)**: JavaScript library for building user interfaces.
- **[react-hook-form](https://www.npmjs.com/package/react-hook-form)**: Forms and validation.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)**: Routing library for React.
- **[react-toastify](https://www.npmjs.com/package/react-toastify)**: Toast notifications.
- **[swiper](https://www.npmjs.com/package/swiper)**: Modern touch slider for services.

---

## Dev Dependencies

- **[@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)**: Vite plugin for React support.
- **[tailwindcss](https://www.npmjs.com/package/tailwindcss)**: Utility-first CSS framework.
- **[eslint](https://www.npmjs.com/package/eslint)**: Linting for JavaScript and React.
- **[postcss](https://www.npmjs.com/package/postcss)**: Tool for transforming CSS.
- **[vite](https://www.npmjs.com/package/vite)**: Lightning-fast development environment.

---

## Backend Repository

The backend repository for ServeSense can be found [here](https://github.com/TahsinAlahi/server-sense-server).

---

## License

This project is licensed under the ISC License.

---

## Author

- **Tahsin Alahi**
  - [GitHub](https://github.com/TahsinAlahi)
  - [LinkedIn](https://www.linkedin.com/in/tahsinalahi/)
