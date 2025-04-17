# Frontend Project

A React-based frontend application built with Vite, featuring user authentication and modern web development practices.

## Tech Stack

- React 19
- React Router 7
- Vite 6.2.0
- ESLint for code quality

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Singup.jsx  # User signup component
│   │   └── ...
│   ├── service/        # API client and service layer
│   │   └── apiClient.js
│   └── ...
├── public/            # Static assets
├── package.json       # Project dependencies and scripts
└── vite.config.js     # Vite configuration
```

## Features

- User Authentication
  - Signup functionality
  - Form validation
  - Error handling
  - Loading states

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development

The project uses modern React features and follows best practices:
- Functional components with hooks
- Form handling with controlled components
- API integration through a dedicated service layer
- Error handling and loading states
- Responsive design

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run linting: `npm run lint`
4. Submit a pull request

## License

[Add your license information here]
