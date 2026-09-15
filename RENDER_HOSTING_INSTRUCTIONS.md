# Hosting the Robotics Club Website on Render

Follow these steps to host your Vite React application for free on Render.

## Step 1: Push your code to GitHub
Before hosting, ensure all your website code is pushed to a GitHub repository.
1. Initialize a git repository if you haven't already (`git init`).
2. Commit your code (`git add .` then `git commit -m "Initial commit"`).
3. Create a new repository on [GitHub](https://github.com/) and push your code to it.

## Step 2: Create a Render Account
1. Go to [Render.com](https://render.com/).
2. Sign up or log in using your GitHub account.

## Step 3: Create a New Static Site
1. In the Render Dashboard, click the **New +** button in the top right.
2. Select **Static Site** from the dropdown menu.
3. Connect your GitHub account and select the repository containing your robotics website.

## Step 4: Configure Build Settings
Fill in the deployment settings as follows:

- **Name:** Choose a name for your site (e.g., `griet-robotics-club`)
- **Branch:** `main` (or whichever branch you push to)
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

Click the **Create Static Site** button at the bottom. Render will now pull your code, install dependencies, build the Vite app, and publish the `dist` folder.

## Step 5: Configure Routing (Crucial for React Router)
Because this is a Single Page Application (SPA) using React Router, you need to tell Render to redirect all traffic to `index.html` so your routes (like `/events` and `/team`) work properly when refreshed.

1. Once your site is created, go to the **Redirects/Rewrites** tab in your Render dashboard for this site.
2. Click **Add Rule** and enter the following:
   - **Source:** `/*`
   - **Destination:** `/index.html`
   - **Action:** `Rewrite`
3. Click **Save Changes**.

## Step 6: Visit Your Site
Your site will be live at `https://your-site-name.onrender.com`. Whenever you push new changes to your GitHub repository, Render will automatically detect them and trigger a new build to update your live website!
