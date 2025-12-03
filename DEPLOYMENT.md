# Deployment Guide for Namecheap Hosting

## Overview

This project uses cPanel's Git Version Control feature for automated deployments to Namecheap hosting. The deployment configuration is defined in `.cpanel.yml`.

## Prerequisites

1. **Namecheap Hosting Account** with cPanel access
2. **Node.js Application** set up in cPanel
3. **Git Version Control** enabled in cPanel
4. **SSH Access** (optional, for troubleshooting)

## Initial Setup

### 1. Set Up Node.js Application in cPanel

1. Log in to your Namecheap cPanel
2. Navigate to **Setup Node.js App**
3. Create a new application:
   - **Node.js version**: 24.x or higher
   - **Application mode**: Production
   - **Application root**: Your deployment directory (e.g., `server2`)
   - **Application URL**: Your domain or subdomain
   - **Application startup file**: `index.js`

### 2. Configure Git Version Control

1. In cPanel, navigate to **Git™ Version Control**
2. Click **Create** to add a new repository
3. Enter your repository details:
   - **Repository URL**: Your GitHub repository URL
   - **Repository Path**: The path where code will be deployed
   - **Repository Name**: A friendly name for your repo
4. Click **Create**

### 3. Connect Repository to Deployment

1. After creating the repository in cPanel, note the deployment path
2. The `.cpanel.yml` file in your repository automatically uses the `$DEPLOYPATH` variable
3. This makes the configuration portable across different environments

## Deployment Configuration

### .cpanel.yml Explained

```yaml
deployment:
 tasks:
   # 1. Set up Node.js 24 environment
   - export PATH=/opt/cpanel/ea-nodejs24/bin:$PATH
   
   # 2. Install/update npm dependencies
   - /usr/bin/npm install --prefix $DEPLOYPATH
   
   # 3. Restart the application with new code
   - /usr/bin/passenger-config restart-app --ignore-app-not-running $DEPLOYPATH
```

### Key Points

- **$DEPLOYPATH**: Automatically provided by cPanel, points to your deployment directory
- **Portable**: Works across different cPanel accounts without modification
- **Automatic**: Runs automatically when changes are pushed to the repository

## Deployment Process

### Automatic Deployment

1. Make changes to your code locally
2. Commit changes: `git commit -m "Your message"`
3. Push to your repository: `git push origin main`
4. cPanel automatically:
   - Pulls the latest changes
   - Runs tasks defined in `.cpanel.yml`
   - Restarts your application

### Manual Deployment (via cPanel)

1. Log in to cPanel
2. Navigate to **Git™ Version Control**
3. Find your repository
4. Click **Manage**
5. Click **Pull or Deploy** tab
6. Click **Update from Remote** to pull latest changes
7. Click **Deploy HEAD Commit** to run deployment tasks

## Troubleshooting

### Deployment Fails

1. **Check Node.js version**: Ensure Node.js 24 is available on your hosting
2. **Verify paths**: Make sure the application root matches your deployment path
3. **Check logs**: View deployment logs in cPanel Git Version Control interface
4. **Dependencies**: Ensure all dependencies in `package.json` are compatible with the hosting environment

### Application Won't Start

1. **Check startup file**: Verify `index.js` is the correct entry point
2. **Port configuration**: Ensure your app uses the PORT environment variable
3. **Dependencies**: Run `npm install` manually via SSH if needed
4. **Restart manually**: Use cPanel's Node.js App interface to restart

### Environment Variables

If your application requires environment variables (like those in `.env` file):

1. In cPanel, navigate to **Setup Node.js App**
2. Click **Edit** on your application
3. Add environment variables in the provided fields
4. Restart the application

## Best Practices

1. **Test Locally**: Always test changes locally before pushing
2. **Use Environment Variables**: Store sensitive data in environment variables, not in code
3. **Version Control**: Commit `.cpanel.yml` to version control
4. **Backup**: Keep backups of your database and important files
5. **Monitor**: Check application logs regularly for errors

## Additional Resources

- [cPanel Git Version Control Documentation](https://docs.cpanel.net/cpanel/files/git-version-control/)
- [cPanel Node.js Selector Documentation](https://docs.cpanel.net/cpanel/software/nodejs-selector/)
- [Namecheap cPanel Hosting Guide](https://www.namecheap.com/support/knowledgebase/subcategory/9/cpanel-shared-hosting/)

## Support

For hosting-specific issues, contact Namecheap support:
- Live Chat: Available 24/7
- Knowledge Base: https://www.namecheap.com/support/knowledgebase/
