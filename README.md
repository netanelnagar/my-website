# My Portfolio Website

This is my personal portfolio website, showcasing my skills and projects.

## Projects

This section describes the projects featured on the website.

### My Website

*   **Technologies:** React.js (TS), Tailwind CSS, Design Patterns, TanStack (react-query), Routing, Code Splitting, Lazy Loading, CI/CD (GitHub Action), Firebase
*   **Description:** React + TypeScript frontend designed with Tailwind CSS. Includes routing, performance optimization using React Suspense, code splitting, and lazy loading. Additionally, it follows design patterns and communicates with Firebase for data handling via TanStack (React Query). The project also includes CI/CD and is automatically deployed to GitHub Pages.


## Features

*   **Responsive Design:** The website is designed to be responsive and work well on different devices.
*   **Performance Optimization:** The website uses React Suspense, code splitting, and lazy loading to improve performance.
*   **Data Handling:** The website uses TanStack Query (React Query) to efficiently fetch and manage data from Firebase.
*   **Automated Deployment:** The website is automatically deployed to GitHub Pages using CI/CD (GitHub Actions).

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/netanelnagar/my-website
    ```

2.  **Install dependencies:**

    ```bash
    cd my-portfolio-website
    npm install
    ```

3.  **Configure environment variables:**

    *   Create a `.env` file in the root directory.
    *   Add your Firebase API keys and other sensitive information to the `.env` file:

        ```
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
        # ... other Firebase config
        ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The website will be available at `http://localhost:8080`.

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. To deploy your own version:

1.  **Create a GitHub repository:** Create a new GitHub repository for your project.
2.  **Enable GitHub Pages:** In your repository action, click on Publish Node.js Package to GitHub Packages.
3.  **Configure GitHub Actions:** The `deploy.yml` file in the `.github/workflows` directory contains the configuration for the GitHub Actions workflow. You may need to adjust this file to match your specific needs.

## Contact

*   Email: netanelnagar1234@gmail.com
*   LinkedIn: [[My LinkedIn]](https://www.linkedin.com/in/netanel-n)

© 2025 Developed by Netanel Nagar

