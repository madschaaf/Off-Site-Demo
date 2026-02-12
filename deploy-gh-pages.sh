#!/bin/bash

# Deploy Step-by-Step Guide to GitHub Pages
# This script deploys the standalone guide from gh-pages/ to the gh-pages branch

set -e  # Exit on error

echo "🚀 Deploying Step-by-Step Guide to GitHub Pages..."
echo ""

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Ensure we're on main and up to date
echo "📥 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Check if gh-pages directory exists
if [ ! -d "gh-pages" ]; then
    echo "❌ Error: gh-pages directory not found!"
    exit 1
fi

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
rm -rf * 2>/dev/null || true

# Copy gh-pages content from main
echo "📋 Copying step-by-step guide..."
git checkout main -- gh-pages/

# Move contents to root
mv gh-pages/* .
rmdir gh-pages

# Commit and push
echo "💾 Committing changes..."
git add .
git commit -m "Deploy step-by-step guide to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

echo "⬆️  Pushing to GitHub..."
git push origin gh-pages

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
