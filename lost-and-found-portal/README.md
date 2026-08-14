# Lost & Found Portal - Frontend

This repository contains the frontend code for the Lost & Found Portal, a modern SaaS-style application designed to help users report and recover lost items.

## Project Structure

The frontend is built using React, Vite, and Tailwind CSS. Below is a brief overview of the key files and their purposes:

- **index.html**: The main HTML template for the React application. It includes the root div where the React app will be mounted.
- **package.json**: Contains metadata for the project, including dependencies, scripts, and configuration for npm.
- **vite.config.js**: Configuration for Vite, specifying the development server and build process.
- **postcss.config.js**: Configures PostCSS for processing CSS with plugins.
- **tailwind.config.js**: Configures Tailwind CSS, allowing customization of the default theme and enabling features like JIT mode.
- **src/App.jsx**: The main application component that sets up routing and renders the appropriate components based on the current route.
- **src/main.jsx**: The entry point of the React application, rendering the `App` component inside a `StrictMode` wrapper.
- **src/index.css**: Contains global styles for the application, including Tailwind CSS imports and additional custom styles.
- **src/components**: Contains reusable components such as Navbar, Hero, Features, CTA, and Footer.
- **src/pages/HomePage.jsx**: The new homepage component that implements the dark, modern SaaS-style landing page.

## Getting Started

To get started with the frontend, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/suchak00/lost-and-found-portal.git
   ```

2. Navigate to the frontend directory:
   ```
   cd lost-and-found-portal/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- **Dark Mode**: The application supports a dark theme for a modern look and feel.
- **Responsive Design**: The layout is designed to be responsive and user-friendly across devices.
- **Easy Navigation**: The Navbar provides easy access to different sections of the application.
- **Call to Action**: Prominent buttons encourage users to report lost items or browse found items.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.