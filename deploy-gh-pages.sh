#!/bin/bash

# Deploy React App with Step-by-Step Guide to GitHub Pages
# This script builds the React app and deploys it to the gh-pages branch

set -e  # Exit on error

echo "🚀 Deploying React App to GitHub Pages..."
echo ""

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Ensure we're on main and up to date
echo "📥 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the React app
echo "🔨 Building React app..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed - dist directory not found!"
    exit 1
fi

# Copy dist to a temporary location
echo "📦 Saving build artifacts..."
TMP_DIST="/tmp/gh-pages-deploy-$(date +%s)"
cp -r dist "$TMP_DIST"

# Clean up .vite directory (build artifacts)
echo "🧹 Cleaning build artifacts..."
rm -rf .vite

# Create or switch to gh-pages branch
echo "🌿 Setting up gh-pages branch..."
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "   Branch exists, switching to it..."
    git checkout gh-pages
    git pull origin gh-pages || true
else
    echo "   Creating new gh-pages branch..."
    git checkout --orphan gh-pages
fi

# Remove all files except .git
echo "🧹 Cleaning gh-pages branch..."
git rm -rf . 2>/dev/null || true
rm -rf * .vite 2>/dev/null || true

# Copy built files from temporary location
echo "📋 Copying built React app..."
cp -r "$TMP_DIST"/* .

# Clean up temp directory
rm -rf "$TMP_DIST"

# Commit and push
echo "💾 Committing changes..."
git add .
git commit -m "Deploy React app to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

echo "⬆️  Pushing to GitHub..."
git push origin gh-pages --force

# Return to original branch
echo "↩️  Returning to $CURRENT_BRANCH branch..."
git checkout "$CURRENT_BRANCH"

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Go to https://github.com/madschaaf/Off-Site-Demo/settings/pages"
echo "   2. Under 'Source', select 'gh-pages' branch"
echo "   3. Select '/ (root)' as the folder"
echo "   4. Click 'Save'"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://madschaaf.github.io/Off-Site-Demo/"
echo ""
echo "⏱️  It may take a few minutes for GitHub to build and deploy your site."
