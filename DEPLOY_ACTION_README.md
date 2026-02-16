# Static Deploy Action


This branch adds a GitHub Action to build the static site from the portfolio repo and deploy it to bpks.github.io.

- The workflow is in .github/workflows/deploy-static.yml
- It runs on push to main or static-deploy-action
- It builds the site and pushes the static output to the bpks.github.io repo
