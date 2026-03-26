# 🍎 Macfolio
### A macOS-inspired interactive portfolio experience

A modern, interactive portfolio website built as a web-based macOS desktop simulation. This project showcases my skills, projects, and experience through an intuitive desktop interface with resizable windows, a functional dock, and various applications.

## 🚀 Features

### Desktop Interface
- **macOS-inspired Design**: Clean, minimalist interface mimicking macOS desktop environment
- **Responsive Layout**: Adapts to different screen sizes while maintaining the desktop aesthetic
- **Smooth Animations**: CSS transitions and animations for window interactions

### Navigation & Dock
- **Top Navigation Bar**: Displays current date and time with a clean, macOS-style menu bar
- **Interactive Dock**: Bottom dock with app icons that bounce on hover and launch applications
- **Window Management**: Click dock icons to open/close corresponding windows

### Application Windows
All windows are resizable, draggable, and can be minimized/maximized using the window controls.

#### 🖥️ CLI Terminal
- **Interactive Terminal**: Built with `react-console-emulator`
- **Custom Commands**:
  - `about`: Display personal information
  - `projects`: List featured projects
  - `skills`: Show technical skills
  - `help`: Display available commands
- **Realistic Terminal Experience**: Typing animation and command history

#### 📂 GitHub Portfolio
- **Project Showcase**: Displays featured projects with images, descriptions, and tech stacks
- **Interactive Cards**: Hover effects and links to repositories and live demos
- **Dynamic Data**: Projects loaded from JSON data for easy updates

#### 📝 Note App
- **Simple Notepad**: Basic text editor for quick notes
- **Persistent Storage**: Notes saved in local storage (future enhancement)
- **Clean Interface**: Minimalist design for distraction-free writing

#### 📄 Resume Viewer
- **Professional Resume Display**: Clean layout showcasing experience, education, and skills
- **Printable Format**: Optimized for printing and PDF export
- **Responsive Design**: Adapts to different window sizes

#### 🎵 Spotify Player
- **Music Player Interface**: Simulated Spotify player with album art and controls
- **Play/Pause Controls**: Interactive playback buttons
- **Track Information**: Display current song, artist, and album details

### Technical Features
- **Window System**: Resizable and draggable windows using `react-rnd`
- **State Management**: React hooks for managing window states and interactions
- **Performance Optimized**: Lazy loading and efficient rendering
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Technologies Used

### Frontend Framework
- **React 19**: Latest React with modern hooks and concurrent features
- **Vite**: Fast build tool and development server

### UI & Styling
- **Sass/SCSS**: Advanced CSS preprocessing for maintainable styles
- **CSS Modules**: Scoped styling for component isolation

### Libraries & Components
- **react-rnd**: Resizable and draggable components for windows
- **react-console-emulator**: Terminal emulator for CLI functionality
- **react-markdown**: Markdown rendering (used in various components)
- **react-syntax-highlighter**: Code syntax highlighting

### Development Tools
- **ESLint**: Code linting and formatting
- **Vite Plugins**: React plugin for optimized builds

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🚀 Usage

### Running the Application
- Use `npm run dev` for development with hot reload
- Use `npm run build` to create a production build
- Use `npm run preview` to preview the production build locally

### Interacting with the Portfolio
1. **Open Applications**: Click icons in the dock to launch windows
2. **Move Windows**: Drag window title bars to reposition
3. **Resize Windows**: Drag window edges/corners to resize
4. **Close Windows**: Click the '×' button or use dock icons
5. **Use CLI**: Type commands like `about`, `projects`, `skills` in the terminal window

### Customization
- **Update Projects**: Edit `src/assets/github.json` to add/remove projects
- **Modify CLI Commands**: Update commands in `src/components/Windows/Cli.jsx`
- **Change Styling**: Modify SCSS files in component directories
- **Add New Apps**: Create new components in `src/components/Windows/` and integrate into App.jsx

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── doc-icons/          # Document icons
│   ├── navbar-icons/       # Navigation bar icons
│   └── note.txt           # Sample note content
├── src/
│   ├── assets/
│   │   └── github.json    # Projects data
│   ├── components/
│   │   ├── DateTime.jsx   # Date/time display
│   │   ├── Dock.jsx       # Bottom application dock
│   │   ├── Nav.jsx        # Top navigation bar
│   │   └── Windows/       # Application windows
│   │       ├── Cli.jsx    # Terminal emulator
│   │       ├── Github.jsx # Projects showcase
│   │       ├── MacWindow.jsx # Base window component
│   │       ├── Note.jsx   # Notepad application
│   │       ├── Resume.jsx # Resume viewer
│   │       └── Spotify.jsx # Music player
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── app.scss           # Global styles
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎯 Key Components

### App.jsx
Main component managing window states and rendering the desktop interface.

### MacWindow.jsx
Base window component providing drag, resize, and close functionality.

### Dock.jsx
Interactive dock component handling app launches and window state management.

### Individual App Components
Each application (CLI, GitHub, etc.) extends MacWindow with specific functionality.

## 🔧 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint for code quality
- `npm run preview`: Preview production build

### Code Quality
- ESLint configuration ensures consistent code style
- Prettier formatting for readable code
- TypeScript types for better development experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by macOS desktop interface
- Built with modern React and Vite
- Icons and assets from various free sources
- Special thanks to the open-source community

## 📞 Contact

Feel free to reach out for collaborations or questions!

- **Email**: dev.subhambhuin@gmail.com
- **LinkedIn**: [Your LinkedIn](https://www.linkedin.com/in/subham-bhuin/)
- **GitHub**: [Your GitHub](https://github.com/SubhamBhuin-05)

---

*Built with ❤️ using React and Vite*