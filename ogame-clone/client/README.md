# OGame Clone Client

This is the client-side application for the OGame clone built using React. The application allows users to log in, manage their game, and interact with various game features.

## Project Structure

- **src/**: Contains the source code for the application.
  - **components/**: Reusable components for the application.
    - **Header.jsx**: Renders the header section.
    - **Navigation.jsx**: Provides navigation links.
    - **GameBoard.jsx**: Displays the main game interface.
  - **pages/**: Contains the main pages of the application.
    - **Login.jsx**: Handles user login functionality.
    - **Dashboard.jsx**: Displays user-specific information and game status.
    - **Game.jsx**: Manages the game state and interactions.
  - **services/**: Contains API service functions for server communication.
    - **api.js**: Handles API calls for authentication and game data retrieval.
  - **App.jsx**: Main application component that sets up routing.
  - **index.js**: Entry point of the React application.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ogame-clone.git
   ```
2. Navigate to the client directory:
   ```
   cd ogame-clone/client
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server, run:
```
npm start
```
This will launch the application in your default web browser.

## Features

- User authentication (login)
- Game management interface
- Dynamic game state updates

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes. 

## License

This project is licensed under the MIT License.