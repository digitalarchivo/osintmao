# OSINTMAO

A sleek, minimalist black website inspired by MSCHF's design aesthetic.

## GitHub Pages Deployment Instructions

Follow these steps to deploy this project to GitHub Pages:

1. **Create a GitHub repository**:
   - Create a new GitHub repository named `osintmao`
   - Make sure the repository is public

2. **Push this code to your repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/osintmao.git
   git push -u origin main
   ```

3. **Set up GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - In the "Source" section, select "GitHub Actions" as the deployment method
   - GitHub will automatically detect the workflow file and start the deployment process

4. **Wait for the deployment**:
   - GitHub Actions will build and deploy your site
   - Once complete, you'll see a message indicating your site is published
   - Your site will be available at `https://digitalarchivo.github.io/osintmao/`

## Local Development

To run this project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To build the project for production:

```bash
npm run build
```

This will create a static export in the `out` directory, which can be deployed to any static hosting service.

## Project Structure

- `/src/app` - Main application pages
- `/src/components` - Reusable UI components
- `/public` - Static assets like fonts and images
