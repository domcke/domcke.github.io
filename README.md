# [Domcke Lab Website](https://domcke.github.io/domcke-lab.html)

# Developer Instructions
## Setup
Create virtual environment
> python3 -m venv .venv
## Development
Activate the virtual environment
> source .venv/bin/activate

Create a branch for your work:
> git checkout -b new-branch-name

Run the development server to serve your website locally:
> python dev-server.py

Make changes to your project and test them with the local server at http://localhost:8000/domcke-lab.html.

Commit your work to your development branch as you go.

Once you have completed and tested your changes with the dev server, and committed them to your branch, make them live by merging your dev branch into main:
> git add .
> git commit -m "commit message"
> git push
> git checkout main
> git pull
> git merge new-branch-name
> git push

Now your changes made in new-branch-name have been merged into the main branch and that branch has been synchronized with github so that they exist in the publicly served website. 