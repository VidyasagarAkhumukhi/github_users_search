# GitHub User Finder

GitHub User Finder, A modern and responsive web application built with React and TypeScript that allows you to search for GitHub users and view their profile details, repository statistics, and language usage through the GitHub GraphQL API.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)]([https://your-live-demo-link.com](https://github-users-search-seven.vercel.app/)) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## ✨ Features

-   **User Search:** Find any GitHub user by their username.
-   **Detailed Profile:** View user information including avatar, name, bio, and a link to their GitHub profile.
-   **Comprehensive Stats:** See key metrics like total repositories, followers, following count, and public gists.
-   **Data Visualization:** Interactive charts displaying:
    -   Top 5 most used programming languages.
    -   Top 5 most popular (starred) repositories.
    -   Top 5 most forked repositories.
-   **Responsive Design:** A clean, mobile-first interface built with Tailwind CSS and Shadcn/UI.
-   **Loading & Error States:** Smooth user experience with skeleton loaders and informative error messages.

---

## 🛠️ Technologies Used

This project is built with a modern tech stack:

-   **Frontend:** [React](https://reactjs.org/), [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/)
-   **API Communication:** [Apollo Client](https://www.apollographql.com/docs/react/) for [GitHub GraphQL API](https://docs.github.com/en/graphql)
-   **Charts:** [Recharts](https://recharts.org/)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or higher)
-   [npm](https://www.npmjs.com/) or any other package manager (yarn, pnpm)
-   A GitHub account

### Installation & Setup

1.  **Generate a GitHub Personal Access Token**

    This project requires a GitHub Personal Access Token to query the GraphQL API.

    -   Go to [GitHub Settings](https://github.com/settings/profile) > **Developer settings** > **Personal access tokens** > **Tokens (classic)**.
    -   Click **Generate new token** and select **Generate new token (classic)**.
    -   Give your token a name (e.g., "GitHub User Finder Dev").
    -   Set an expiration date.
    -   Under **Select scopes**, check the `public_repo` scope.
    -   Click **Generate token** and copy the token. You won't be able to see it again.

2.  **Clone the Repository**

    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

3.  **Install Dependencies**

    ```bash
    npm install
    ```

4.  **Set Up Environment Variables**

    Create a `.env.local` file in the root of the project by copying the example file:

    ```bash
    cp .env.example .env.local
    ```

    Open the `.env.local` file and add your GitHub Personal Access Token:

    ```env
    VITE_GITHUB_TOKEN=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
    ```

5.  **Run the Development Server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view the application in your browser.

---

## 📂 Project Structure

The project follows a component-based architecture to keep the code organized and maintainable.
