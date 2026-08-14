# Lost & Found Portal - Frontend

This repository contains the frontend code for the Lost & Found Portal, a modern SaaS-style application built with React, Vite, and Tailwind CSS. The application allows users to report lost items and find lost belongings in a user-friendly interface.

## Project Structure

The frontend project is structured as follows:

```
frontend
├── index.html          # Main HTML template for the React application
├── package.json        # Project metadata and dependencies
├── vite.config.js      # Vite configuration for development and build
├── postcss.config.js   # PostCSS configuration for CSS processing
├── tailwind.config.js   # Tailwind CSS configuration for styling
├── src
│   ├── App.jsx         # Main application component with routing
│   ├── main.jsx        # Entry point of the React application
│   ├── index.css       # Global styles and Tailwind CSS imports
│   ├── components
│   │   ├── Navbar.jsx  # Navigation component
│   │   ├── Hero.jsx    # Hero section component
│   │   ├── Features.jsx # "How It Works" section component
│   │   ├── CTA.jsx     # Call-to-action buttons component
│   │   └── Footer.jsx   # Footer component
│   └── pages
│       └── HomePage.jsx # Homepage component with layout and design
└── README.md           # Documentation for the frontend project
```

## Getting Started

To get started with the Lost & Found Portal frontend, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/suchak00/lost-and-found-portal.git
   cd lost-and-found-portal/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Features

- **Dark Mode**: The application supports a dark theme for a modern look and feel.
- **Responsive Design**: The layout is designed to be responsive and user-friendly on all devices.
- **Easy Navigation**: The navbar provides easy access to different sections of the application.
- **Call-to-Action**: Prominent buttons encourage users to report lost items or find their belongings.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.