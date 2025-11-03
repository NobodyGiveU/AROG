# 🚀 Deploy to Vercel - Step by Step Guide

## ✅ Pre-Deployment Checklist

Everything is now configured! Your app is ready to deploy to Vercel.

### What's Been Set Up:

1. ✅ **vercel.json** - Configured for Expo web builds with proper routing
2. ✅ **package.json** - Added build scripts (`build:web`, `preview`)
3. ✅ **app.json** - Web configuration updated
4. ✅ **.vercelignore** - Excludes unnecessary files

---

## 📦 Option 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

From your project root directory:

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No** (for first deployment)
- Project name? (Default: `arog`)
- Directory? **./** (current directory)
- Override settings? **No**

### Step 4: Production Deploy

After the preview deployment works:

```bash
vercel --prod
```

---

## 🌐 Option 2: Deploy via GitHub (Easiest)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Arog app ready for Vercel"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/arog.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect the settings from `vercel.json`
6. Click **"Deploy"**

---

## 🧪 Test Locally Before Deploying

### Build and Preview Locally:

```bash
# Build for web
npm run build:web

# Preview the build
npm run preview
```

This will:
1. Create a `web-build` folder
2. Serve it locally so you can test

Visit `http://localhost:3000` (or the port shown) to test.

---

## 📋 What Vercel Will Do:

Based on `vercel.json`, Vercel will:

1. **Build Command**: Run `npx expo export:web`
2. **Output Directory**: Use `web-build` folder
3. **Routing**: All routes redirect to `index.html` (SPA routing)
4. **Caching**: Static assets cached for 1 year

---

## 🔧 Troubleshooting

### Issue: Build fails

**Solution:**
- Make sure all dependencies are in `package.json`
- Check Node.js version (Vercel uses Node 18+ by default)
- Review build logs in Vercel dashboard

### Issue: Routing doesn't work

**Solution:**
The `vercel.json` already has rewrite rules. If still having issues:
- Ensure `vercel.json` is in root directory
- Check that React Navigation is properly configured
- Verify `NavigationContainer` is in App.js

### Issue: Assets not loading

**Solution:**
- Assets should be in `assets/` folder
- Expo will bundle them during build
- Check `app.json` assetBundlePatterns

---

## 📱 After Deployment

### Your app will be available at:

- **Production**: `https://arog.vercel.app` (or your custom domain)
- **Preview**: `https://arog-git-branch.vercel.app` (for branches)

### Features:

- ✅ Full React Navigation routing works
- ✅ All screens accessible
- ✅ Responsive design
- ✅ Fast loading (Vercel CDN)
- ✅ HTTPS enabled
- ✅ Auto-deploy on git push (if using GitHub)

---

## 🎯 Quick Deploy Commands

```bash
# One-time setup
npm install -g vercel
vercel login

# Deploy preview
vercel

# Deploy production
vercel --prod

# View deployments
vercel ls
```

---

## ✨ Next Steps

1. **Test the deployment**: Visit your Vercel URL
2. **Custom domain** (optional): Add in Vercel dashboard
3. **Environment variables** (if needed): Add in Vercel dashboard
4. **Analytics** (optional): Enable in Vercel dashboard

---

## 📝 Notes

- **Free Tier**: Vercel has generous free tier (100GB bandwidth/month)
- **Auto-Deploy**: Pushes to main branch auto-deploy to production
- **Preview Deploys**: Every branch/PR gets preview URL
- **Build Time**: First build ~2-3 minutes, subsequent builds faster

---

**Ready to deploy? Run `vercel` and follow the prompts!** 🚀

