## GitHub Upload Guide for Glanzpunkt Project

This guide provides step-by-step instructions on how to upload the Glanzpunkt project to a GitHub repository.

### Prerequisites

- A GitHub account.
- Git installed on your local machine.
- The Glanzpunkt project files (website, admin panel, backend).

### Step-by-Step Instructions

1.  **Create a New GitHub Repository**
    - Go to GitHub and create a new repository. Do **NOT** initialize it with a README, .gitignore, or license.
    - Copy the repository URL (e.g., `https://github.com/your-username/your-repo-name.git`).

2.  **Navigate to the Project Directory**
    - Open your terminal or command prompt.
    - Navigate to the root directory of your Glanzpunkt project (e.g., `cd /home/ubuntu/glanzpunkt-github-project`).

3.  **Initialize Git**
    - Initialize a new Git repository in your project directory:
        ```bash
        git init
        ```

4.  **Add Remote Origin**
    - Add the GitHub repository as a remote origin:
        ```bash
        git remote add origin <YOUR_REPOSITORY_URL>
        ```
        Replace `<YOUR_REPOSITORY_URL>` with the URL you copied in Step 1.

5.  **Add Files to Staging**
    - Add all project files to the staging area:
        ```bash
        git add .
        ```

6.  **Commit Changes**
    - Commit the staged files with a descriptive message:
        ```bash
        git commit -m "Initial commit of Glanzpunkt project"
        ```

7.  **Push to GitHub**
    - Push your local commits to the GitHub repository. You might need to specify the branch (e.g., `main` or `master`):
        ```bash
        git push -u origin main
        ```
        If your default branch is `master`, use `git push -u origin master`.

### Troubleshooting

- **"fatal: remote origin already exists"**: If you see this error, it means you've already added a remote. You can remove it with `git remote rm origin` and then try adding it again.
- **Authentication Issues**: If Git asks for your username and password, use your GitHub username and a Personal Access Token (PAT) instead of your password. You can generate a PAT from your GitHub settings.
- **Large Files**: If you have very large files, consider using Git LFS (Large File Storage).

This guide should help you successfully upload the Glanzpunkt project to your GitHub repository. If you encounter any further issues, please refer to the official Git and GitHub documentation.

