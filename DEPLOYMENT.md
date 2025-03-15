# OSINTMAO GitHub Pages Deployment Guide

This guide will walk you through the process of deploying your OSINTMAO project to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. The OSINTMAO project files

## Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" button in the top right corner and select "New repository"
3. Name your repository `osintmao`
4. Set it to "Public"
5. Click "Create repository"

### 2. Push Your Code to GitHub

Run these commands in your terminal, replacing `YOUR_USERNAME` with your GitHub username:

```bash
# Navigate to your project directory
cd osintmao

# Initialize Git repository (if not already done)
git init

# Add all files to the repository
git add .

# Commit the files
git commit -m "Initial commit"

# Set the branch to main
git branch -M main

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/osintmao.git

# Push the code to GitHub
git push -u origin main
```

### 3. Set Up GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "GitHub Actions"
5. GitHub will automatically detect the workflow file and use it for deployment

### 4. Wait for Deployment

GitHub Actions will automatically build and deploy your site. You can check the progress by clicking on the "Actions" tab in your repository.

Once the deployment is complete, your site will be available at:
```
https://YOUR_USERNAME.github.io/osintmao/
```

## Making Updates

When you want to update your site:

1. Make your changes locally
2. Commit and push to GitHub
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push
   ```
3. GitHub Actions will automatically rebuild and redeploy your site

## Troubleshooting

If your site doesn't appear:

1. Check if the GitHub Actions workflow completed successfully
2. Make sure your repository is public
3. Verify the build output in the "Actions" tab
4. Wait a few minutes - sometimes GitHub Pages takes time to update

## Local Development

To work on your site locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Your site will be available at `http://localhost:3000`.

To build for production locally:

```bash
npm run build
```

This creates a static export in the `build` directory.
