# GitHub Pages Deployment - Step-by-Step Guide

This directory contains a standalone deployment of the step-by-step setup guide for GitHub Pages.

## Overview

The `index.html` file is a self-contained, interactive step-by-step guide that:
- Tracks user progress with localStorage
- Provides all 7 setup steps with detailed instructions
- Uses Tailwind CSS CDN for styling (no build required)
- Works entirely client-side with vanilla JavaScript

## Deployment Instructions

### Option 1: Automatic Deployment (Recommended)

1. **Create and push the gh-pages branch:**
   ```bash
   # From the main branch
   git checkout -b gh-pages
   
   # Remove all files except gh-pages directory
   git rm -rf .
   git checkout HEAD -- gh-pages/
   
   # Move gh-pages contents to root
   mv gh-pages/* .
   rmdir gh-pages
   
   # Commit and push
   git add .
   git commit -m "Deploy step-by-step guide to GitHub Pages"
   git push origin gh-pages
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select the `gh-pages` branch
   - Select `/ (root)` as the folder
   - Click Save

3. **Access your site:**
   - Your guide will be available at: `https://madschaaf.github.io/Off-Site-Demo/`
   - It may take a few minutes for the first deployment

### Option 2: Manual Deployment

If you prefer to keep the gh-pages branch separate:

1. **Create an orphan branch:**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   ```

2. **Copy only the gh-pages content:**
   ```bash
   git checkout main -- gh-pages/index.html
   mv gh-pages/index.html index.html
   ```

3. **Commit and push:**
   ```bash
   git add index.html
   git commit -m "Initial GitHub Pages deployment"
   git push origin gh-pages
   ```

## Features

### Interactive Progress Tracking
- Progress saved in browser localStorage
- Completed steps marked with checkmarks
- Visual progress bar showing completion percentage

### Mobile Responsive
- Optimized for desktop, tablet, and mobile devices
- Sticky sidebar on desktop for easy navigation

### Lightweight
- No build process required
- Uses CDN resources (Tailwind CSS)
- Pure vanilla JavaScript
- No dependencies or package.json needed

## Updating the Guide

To update the content:

1. Edit `gh-pages/index.html` on the main branch
2. Create a new commit on main branch
3. Switch to gh-pages branch and cherry-pick or merge the changes
4. Push to gh-pages branch

Or use the automated deployment script (if created).

## Troubleshooting

### Site not loading
- Ensure GitHub Pages is enabled in repository settings
- Check that the gh-pages branch exists and has content
- Verify the branch is set as the source in Pages settings
- Wait a few minutes for GitHub to build and deploy

### Progress not saving
- Check browser localStorage is enabled
- Try clearing browser cache and reloading
- Test in a different browser

### Styling issues
- Ensure Tailwind CDN is loading (check browser console)
- Verify you have an active internet connection
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)

## File Structure
```
gh-pages/
├── index.html          # Self-contained step-by-step guide
└── README.md          # This file
```

## Maintenance

The gh-pages deployment requires minimal maintenance:
- No build tools or dependencies
- No package updates needed
- CDN resources auto-update
- Simple HTML/CSS/JS structure

## Local Testing

To test locally before deploying:

```bash
# Simple HTTP server (Python 3)
python3 -m http.server 8000

# Or use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000` in your browser.
