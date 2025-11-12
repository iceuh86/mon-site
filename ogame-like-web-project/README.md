# OGame-Like Web Project

This project is a web-based game inspired by the classic OGame interface. It aims to replicate the core functionalities and user experience of the original game while providing a modern web application structure.

## Project Structure

```
ogame-like-web-project
├── src
│   ├── index.html          # Main HTML document
│   ├── styles              # Contains CSS files for styling
│   │   ├── main.css        # Main styles for the application
│   │   └── theme.css       # Theme-specific styles
│   ├── scripts             # JavaScript files for functionality
│   │   ├── app.js          # Main application logic
│   │   └── ui.js           # User interface interactions
│   ├── components          # Reusable HTML components
│   │   ├── navbar.html     # Navigation bar component
│   │   ├── sidebar.html    # Sidebar component
│   │   └── fleet-panel.html # Fleet panel component
│   └── data               # Mock data for development
│       └── mock-game-state.json # Mock game state representation
├── public
│   └── assets              # Static assets
│       ├── icons           # Icon files
│       └── fonts           # Font files
├── package.json            # NPM configuration file
├── .gitignore              # Files to ignore in version control
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd ogame-like-web-project
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   You can use a local server to serve the `index.html` file. For example, you can use the `live-server` package:
   ```
   npx live-server src
   ```

## Features

- User-friendly interface similar to OGame.
- Dynamic game state management.
- Responsive design for various devices.
- Modular components for easy maintenance and updates.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.