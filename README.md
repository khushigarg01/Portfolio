# Portfolio ✨

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)]()
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FF4949)]()

A personal portfolio website built with React, Node.js, and CSS, showcasing my projects, skills, and experience.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Important Links](#important-links)
- [Footer](#footer)

## Description 📝

This portfolio project is a web application designed to showcase my skills, projects, and experience as a Full-Stack Developer. It is built using React for the frontend, Node.js for potential backend functionalities (although the current code focuses on the frontend), and CSS (with Tailwind CSS) for styling. The application uses modern web development practices and includes features such as a theme toggle using Redux, animated content, and a contact form.

## Features ✨

- **Theme Toggle:** Uses Redux to manage and toggle between light and dark themes. 💡
- **React Components:** Modular design using React components for different sections of the portfolio (Home, About, Services, Projects, Contact, Footer). 📦
- **React Scroll:** Smooth scrolling navigation between different sections of the page. ⬆️
- **React Typed:** Dynamic typing effect on the homepage to display the developer's roles. ✍️
- **React Hook Form:** Simplifies form handling and validation in the contact section. ✅
- **React Hot Toast:** Displays user-friendly notifications for form submissions. 🍞
- **AOS (Animate on Scroll):** Adds animations to elements as they appear on the screen. 🚀
- **Responsive Design:** Layout adapts to different screen sizes for optimal viewing on various devices. 📱💻
- **Tech Stack Display:** Showcases the developer's tech stack using React Icons. 💻

## Tech Stack 💻

- **Frontend:**
  - React: JavaScript library for building user interfaces. ⚛️
  - JavaScript: Programming language for creating interactive web elements. 📜
  - CSS: Styling and layout of the web application. 🎨
  - Tailwind CSS: Utility-first CSS framework for rapid UI development. 💨
  - Redux Toolkit: For state management. 🧰
  - Axios: For making HTTP requests (e.g., form submissions). 🌐
- **Backend (Potential):**
  - Node.js: JavaScript runtime environment for server-side development. 🚀
  - Express: Web application framework for Node.js. 🚄
- **Other:**
  - Vite: Build tool for faster development experience. ⚡

## Installation 🛠️

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khushigarg01/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser and navigate to** `http://localhost:5173` (or the port Vite provides). 🌐

## Usage 🚀

1.  **Real-world Use Case:** This project can be used to create a professional online presence, helping you showcase your skills and projects to potential employers or clients. The portfolio's design and functionality allow you to present your work engagingly and effectively.

2.  **How to Use:**
    -  **Running the Application:** After installation, the command `npm run dev` starts the development server. This lets you view the portfolio in your web browser and see changes as you develop.
    -  **Customizing Content:** To customize the portfolio, edit the content within the `src/components` directory. Each component corresponds to a section of the portfolio (e.g., `Aboutpage.jsx`, `ProjectsPage.jsx`).
    -  **Adding Projects:** To add or modify projects, edit the `ProjectsPage.jsx` component. You can include project images, descriptions, and links to live demos or repositories.
    -  **Modifying Tech Stack:** The `Aboutpage.jsx` component includes a list of technologies. Update the `tools` array in this file to reflect your skills.
    -  **Updating Contact Information:** The `ContactPage.jsx` component contains a form that sends messages via `getform.io`. You can also add direct contact links in this component.
    -  **Switching Themes:** The theme can be toggled using the button in the header, which dispatches actions to the Redux store to update the color mode across the application.




## Project Structure 📂

```
Portfolio/
├── .eslint.config.js           # ESLint configuration file
├── index.html                  # Main HTML file
├── package.json                # Project dependencies and scripts
├── README.md                   # Project documentation
├── src/
│   ├── App.css                 # Global styles
│   ├── App.jsx                 # Main application component
│   ├── assets/                # Static assets (images, fonts, etc.)
│   ├── components/            # React components
│   │   ├── Aboutpage.jsx       # About section
│   │   ├── ContactPage.jsx     # Contact section
│   │   ├── FooterPage.jsx      # Footer section
│   │   ├── Header.jsx          # Header section
│   │   ├── Homepage.jsx        # Homepage section
│   │   ├── ProjectsPage.jsx    # Projects section
│   │   ├── ServicesPage.jsx    # Services section
│   │   └── ToolCard.jsx        # Reusable tool card component
│   ├── GlobalStore/             # Redux store configuration
│   │   ├── Store.jsx           # Redux store
│   │   └── ThemeSlicer.jsx     # Redux theme slice
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point for React application
├── vite.config.js              # Vite configuration file
└── ...
```

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Commit your changes with descriptive commit messages.
5. Push your branch to GitHub.
6. Create a pull request.

## License 📝

This project has no specified license. All rights are reserved unless otherwise specified.

## Important Links 🔗

- **Repository:** [https://github.com/khushigarg01/Portfolio](https://github.com/khushigarg01/Portfolio)
- **LinkedIn Profile:** [https://linkedin.com/in/khushigarg01](https://linkedin.com/in/khushigarg01)
- **Instagram Profile:** [https://www.instagram.com/_khushiigarg_](https://www.instagram.com/_khushiigarg_)
- **Twitter Profile:** [https://twitter.com/khushigarg01](https://twitter.com/khushigarg01)
- **Facebook Profile:** [https://www.facebook.com/profile.php?id=100077673866292](https://www.facebook.com/profile.php?id=100077673866292)

## Footer 🚀

Made with ❤️ by [Khushi Garg](https://github.com/khushigarg01) | [Portfolio](https://github.com/khushigarg01/Portfolio)

⭐️ Like the project? Give it a star!

🍴 Fork the repository to contribute.

🐛 Found a bug? Report it in the issues.
