import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "Hi! I’m Subham. I am a full-stack web developer passionate about building modern web applications.",
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. Portfolio Website - React + Vite
2. E-commerce Platform - MERN Stack
3. Task Management App - Next.js
4. Real-time Chat App - Socket.io
5. Data Dashboard - React + Chart.js`,
    },
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
                Backend: Node.js, Express, Python, Django
                Databases: MongoDB, PostgreSQL, MySQL
                Tools: Git, Docker, Webpack, Vite
                Cloud: AWS, Azure, Heroku`,
    },
    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Email: ankur@example.com
            Phone: +1 (555) 123-4567
            Location: San Francisco, CA`,
    },
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com", "_blank");
        return "Opening GitHub...";
      },
    },
    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => "Resume download started...",
    },
    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `Twitter: @ankurdev
LinkedIn: /in/ankurprajapati
Portfolio: ankurprajapati.dev`,
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • contact   - Get in touch

Happy exploring! 🚀
`;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"subhambhuin:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
