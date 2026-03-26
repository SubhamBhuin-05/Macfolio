import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
    about: {
      description: "Learn about me",
      usage: "about",
      fn: () =>
        "Hi! I’m Subham Bhuin, a full-stack developer with a strong focus on frontend development. I build interactive and modern web applications with clean UI, smooth user experiences, and scalable logic. I’m continuously expanding my backend skills to become a well-rounded developer.",
    },

    projects: {
      description: "Check out my works",
      usage: "projects",
      fn: () => `1. Macfolio - Interactive Portfolio (React, Vite)
        2. Productivity Dashboard - JS + LocalStorage + APIs
        3. Spotify UI Clone - HTML, CSS (Responsive Design)`,
    },

    skills: {
      description: "Show technical skillset",
      usage: "skills",
      fn: () => `Frontend: React, JavaScript (ES6+), HTML5, CSS3, SCSS, Tailwind
      Backend: Node.js, Express.js
      Database: MongoDB
      Tools: Git, GitHub, Vite, VS Code`,
    },

    contact: {
      description: "Get in touch",
      usage: "contact",
      fn: () => `Email: dev.subhambhuin@gmail.com
      Location: India
      LinkedIn: linkedin.com/in/subham-bhuin`,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/SubhamBhuin-05", "_blank");
        return "Opening GitHub...";
      },
    },

    resume: {
      description: "Check out my resume",
      usage: "resume",
      fn: () => {
        window.open("/resume.pdf", "_blank"); // update path if needed
        return "Opening resume...";
      },
    },

    social: {
      description: "List social media links",
      usage: "social",
      fn: () => `GitHub: github.com/SubhamBhuin-05
      LinkedIn: linkedin.com/in/subham-bhuin`,
    },

    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const commandList = Object.entries(commands)
    .map(([name, cmd]) => `  • ${name.padEnd(10)} - ${cmd.description}`)
    .join("\n");

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  ${commandList}
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
