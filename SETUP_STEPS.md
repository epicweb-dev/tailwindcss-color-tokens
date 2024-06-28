# Setup Steps

1. Download
   ```sh
   npx degit epicweb-dev/workshop-template
   ```
2. Find/replace github repo name from "workshop-template" to "your-repo-name"
   (the org is already set to "epicweb-dev")
3. Find/replace the title of the workshop from "Workshop Title" to "Your
   Workshop Title"
4. Find/replace the subtitle of the workshop from "Workshop subtitle" to "Your
   subtitle" (this will appear on the top of the README as well as on the
   `og:image` when shared on social media)
5. Update the workshop summary in the `README.md`
6. Update the `public/images/instructor.png` with your own image
7. Update all dependencies
   ```sh
   ./epicshop/update-deps.sh
   ```

And as the last step, delete this file!
