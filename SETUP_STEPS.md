# Setup Steps

1. Download
   ```sh
   npx degit epicweb-dev/workshop-template YOUR_REPO_NAME
   ```
2. Find/replace github repo name from "workshop-template" to "your-repo-name"
   (the org is already set to "epicweb-dev")
3. Find/replace the title of the workshop from "Workshop Title 🎃" to "Your
   Workshop Title 🦊" (emoji optional, but fun, choose something you think
   represents your topic in some clever way).
4. Find/replace the subtitle of the workshop from "Workshop subtitle" to "Your
   subtitle" (this will appear on the top of the README as well as on the
   `og:image` when shared on social media)
5. Update the workshop summary in the `README.md`
6. Update the `public/images/instructor.png` with your own image
7. Update all dependencies
   ```sh
   ./epicshop/update-deps.sh
   ```
8. Ask Kent to create a Fly app for your workshop to deploy to. Just tell him
   what it's called in the `epicshop/fly.toml`. No need to wait on Kent for this
   step, just let him know and continue to the next step, he'll get to it soon.
9. Initialize git and create a github repo on `epicweb-dev` with the name you
   chose

And as the last step, delete this file, create your initial commit, push it, and
start working on your exercises!
