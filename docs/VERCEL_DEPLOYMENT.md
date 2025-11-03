# Deploying Arog to Vercel

## Prerequisites
1. Node.js installed (v16 or higher)
2. Git installed
3. A GitHub account
4. A Vercel account (can sign up with GitHub)

## Pre-deployment Steps

1. **Ensure all files are committed to Git:**
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin JeevanEdit
```

2. **Verify build configuration**
- `vercel.json` is configured properly ✅
- Build scripts in `package.json` are set up ✅
- Web platform configuration in `app.config.js` is correct ✅

## Deployment Steps

1. **Install Vercel CLI (if not already installed)**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy to Vercel**

Option 1 - Using Vercel CLI:
```bash
vercel
```

Option 2 - Using Vercel Dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select "Import Git Repository"
4. Choose the AROG repository
5. Configure project settings:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Environment Variables (if needed)**
- No environment variables required for current setup

## Post-deployment

1. **Verify the deployment**
- Check build logs for any errors
- Test all routes work correctly
- Verify static assets are loading
- Test responsive design

2. **Set up custom domain (optional)**
- Go to Vercel project settings
- Click "Domains"
- Add your custom domain

## Production Optimizations

1. **Caching** (already configured in vercel.json)
- Static assets cached for 1 year
- JavaScript and CSS files cached appropriately

2. **Performance**
- All routes configured to serve index.html
- Static assets properly cached
- Client-side routing handled

## Monitoring

- Monitor build times and optimization opportunities in Vercel Analytics
- Check for any 404 errors or routing issues
- Monitor performance metrics in Vercel Dashboard

## Troubleshooting

If you encounter any issues:

1. **Build Failures**
```bash
# Clear cache and rebuild
rm -rf dist/
rm -rf node_modules/
npm install
npm run build
```

2. **Routing Issues**
- Verify vercel.json rewrites configuration
- Check if all routes are properly handled in React Navigation

3. **Asset Loading Issues**
- Verify asset paths are relative
- Check if assets are being included in the build

## Maintenance

1. **Regular Updates**
- Keep dependencies updated
- Monitor Vercel Dashboard for any issues
- Review analytics for performance optimization opportunities

2. **Rollback if needed**
- Use Vercel Dashboard to rollback to previous deployment if issues occur

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Expo Web Documentation](https://docs.expo.dev/workflow/web/)
- [React Navigation Web Setup](https://reactnavigation.org/docs/web-support/)