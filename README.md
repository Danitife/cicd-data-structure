# cicd-data-structure
Automating deploys

## Deployment Configuration

This project is configured for automatic deployment to Namecheap hosting using cPanel's Git Version Control feature.

### How It Works

The `.cpanel.yml` file contains deployment automation instructions that cPanel executes after pulling code changes:

1. **Environment Setup**: Adds Node.js 24 to the PATH
2. **Install Dependencies**: Runs `npm install` to update project dependencies
3. **Restart Application**: Restarts the Node.js application using Passenger

### Key Features

- **Portable Configuration**: Uses `$DEPLOYPATH` environment variable (provided by cPanel) instead of hardcoded paths
- **Automatic Deployment**: Deploys automatically when changes are pushed to the repository
- **Node.js 24 Support**: Configured to use cPanel's Node.js 24 runtime

### Deployment Process

1. Push changes to your repository
2. cPanel automatically pulls the changes
3. cPanel runs the tasks defined in `.cpanel.yml`
4. Application is restarted with the new code

### Requirements

- Namecheap hosting with cPanel access
- Node.js application setup in cPanel
- Git Version Control enabled in cPanel
- Repository connected to cPanel deployment
