# Short Course on AI & Society

A modern web application for the "Short Course on AI & Society", built with [Next.js](https://nextjs.org), [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com), and [TypeScript](https://www.typescriptlang.org/).

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 📦 Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

## 🛠️ Getting Started

### 1. Setup Environment

To initialize the project, copy the necessary assets, and install dependencies, run the provided setup script:

**On Windows:**
Double-click `setup.bat` or run it from the command line:
```cmd
setup.bat
```

Alternatively, you can manually install dependencies:
```bash
npm install
```
*(Make sure to manually copy the assets to the `public` directory if you bypass the `setup.bat` script).*

### 2. Start the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/`: Next.js App Router pages and layouts
- `src/components/`: Reusable React UI components
- `src/hooks/`: Custom React hooks
- `src/lib/`: Utility functions and library configurations
- `public/`: Static assets (images, videos, etc.)
- `.github/workflows/`: CI/CD configuration (e.g., automated deployments)

## 📜 Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code issues.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. The project also includes a GitHub Actions workflow in `.github/workflows/deploy.yml` for custom automated deployments.
