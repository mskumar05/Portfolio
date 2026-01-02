# Portfolio Website

A modern, responsive portfolio website built with React, featuring an AI-powered chatbot and contact form integration.

## 🚀 Features

- **AI Chatbot**: Interactive chatbot powered by Groq API using Llama 3.3 70B model
- **Contact Form**: EmailJS integration for seamless email communication
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive design
- **Projects Showcase**: Display your AI/ML projects with descriptions and links
- **Resume Integration**: Downloadable resume with detailed experience sections

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Groq API key ([Get it here](https://console.groq.com/keys))
- EmailJS account ([Sign up here](https://dashboard.emailjs.com/))

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/mskumar05/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory by copying the example:

```bash
cp .env.example .env
```

Then edit `.env` and add your actual credentials:

```env
# Groq API Configuration
REACT_APP_GROQ_API_KEY=your_actual_groq_api_key

# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important**: Never commit your `.env` file to version control!

### 4. Run the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🌐 Deployment to Netlify

This project is configured for easy deployment to Netlify:

### Quick Deploy

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Add environment variables in Netlify:
   - `REACT_APP_GROQ_API_KEY`
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
6. Deploy!

The build settings are automatically configured via `netlify.toml`.

## 📦 Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## 🔐 Security

- All API keys and secrets are stored in environment variables
- `.env` file is excluded from version control via `.gitignore`
- Use `.env.example` as a template for required environment variables
- Client-side API keys are configured to bypass Netlify's secrets scanning (see `netlify.toml`)

## 🛠️ Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
