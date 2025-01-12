#!/bin/bash

# Switch to the main branch
git checkout main

#Add and commit the changes
git add .
git commit -m "Improve performance"

# Push the main branch to the remote repository
git push origin main --force

# Switch to the gh-pages branch
git checkout gh-pages

# Create a .gitignore file and add CNAME to it
echo "CNAME" > .gitignore

# Remove all files except for the ones listed in .gitignore
git rm -rf .

# Copy the contents of the src folder from the main branch
git checkout main -- src

# Move the contents of the src folder to the root of the gh-pages branch
mv src/* .
rm -rf src

# Add and commit the changes
git add .
git commit -m "Update GitHub Pages with latest changes"

# Push the gh-pages branch to the remote repository
git push origin gh-pages --force

# Switch back to the main branch
git checkout main
