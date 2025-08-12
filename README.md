# About My Portfolio

Welcome to my portfolio repository! This project showcases my skills, projects, and experiences as a Full Stack Software Developer.

## Features
- **Projects**: A collection of my work, **including React webapps, demos of API integrations like Google and Calendly for Axiom Workspace, a CRM startup**, and other personal projects to come!
- **Technologies**: Highlights of tools I use: React, Javascript, HTML, CSS, and Node.js 
- **Contact**: Please reach out for collaborations or feedback @malik.code@outlook.com

## Getting Started
Explore my projects by navigating through the folders or checking the live demos in the README files. Feel free to reach out with any questions or feedback!

# What I learned when Deploying a React Project to GitHub Pages using Node.js

## Prerequisites
- Node.js installed on your system
- React project created with Vite
- GitHub repository set up

## Step 1: Install GitHub Pages Package
```bash
npm install --save-dev gh-pages
```

## Step 2: Configure package.json
Add the following configurations to your `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/your-repo-name/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Important**: Replace `yourusername` with your GitHub username and `your-repo-name` with your actual repository name.

## Step 3: Configure Vite (vite.config.js)
Set up your Vite configuration to match your repository name:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Force all assets to be emitted as files (not inlined)
    assetsInlineLimit: 0,
  },
})
```

## Step 4: Handle Assets Properly
Import all assets in your React components so they maintain references after building:

```javascript
// Example: src/assets/projects.js
import blossomTogetherImg from './project-images/blossom-together.png';
import samosaMultiplierImg from './project-images/samosa-multiplier.png';
// ... other imports

const projects = [
    {
        "title": "Project Name",
        "image": blossomTogetherImg, // Use imported reference
        // ... other properties
    }
];
```

## Step 5: Create GitHub Repository Branch
Create a dedicated branch for GitHub Pages (optional but recommended):
- Create a new branch called `gh-pages` in your repository
- This keeps your deployment separate from your main development branches

## Step 6: Build and Deploy Commands
Execute these commands in order:

### Clear cache and reinstall dependencies:
```bash
rm -rf dist node_modules/.vite
npm install
```

### Build the project:
```bash
npm run build
```

### Test locally before deploying:
```bash
npm run preview
```

### Deploy to GitHub Pages:
```bash
npm run deploy
```

## Step 7: Configure GitHub Repository Settings
1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select the `gh-pages` branch as your source
5. Set folder to "/ (root)"

## Important Notes

- **Repository Structure**: GitHub Pages requires an `index.html` file in the root folder of your deployment branch
- **Base Path**: Ensure your `vite.config.js` base path matches your repository name exactly
- **Asset References**: Always import assets in React rather than using relative paths to ensure they work after building
- **Branch Strategy**: Using a dedicated `gh-pages` branch keeps your deployment separate from development code
- **Cache Clearing**: Clear Vite cache (`node_modules/.vite`) when encountering build issues

## Troubleshooting
- If assets aren't loading, verify all images and files are properly imported
- Ensure your `base` configuration in `vite.config.js` matches your repository name
- Check that your GitHub Pages source is set to the correct branch
- Run `npm run preview` to test the built version locally before deploying