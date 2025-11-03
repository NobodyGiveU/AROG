# Web Deployment Configuration - Arog App

## ✅ Configuration Complete

Your Expo React Native app is now configured for web deployment to Vercel.

## 📁 Files Created/Updated

### 1. **app.config.js** (Created)
- Full web support enabled with `output: "static"`
- Web title, description, and meta tags configured
- Favicon path set
- Mobile configurations preserved (iOS & Android)

### 2. **package.json** (Updated)
- ✅ `"web"`: `expo start --web` - Start web dev server
- ✅ `"build"`: `expo export --platform web` - Export for production
- ✅ `"build:web"`: `expo export --platform web` - Alias for build
- ✅ `"export:web"`: `expo export --platform web` - Export command
- ✅ `"preview"`: Export + serve locally
- ✅ `"serve:web"`: Serve dist folder locally

### 3. **vercel.json** (Updated)
- ✅ `buildCommand`: `npm run build`
- ✅ `outputDirectory`: `dist`
- ✅ `installCommand`: `npm install` (explicit)
- ✅ Rewrites configured for client-side routing
- ✅ Cache headers for static assets

### 4. **babel.config.js** (Verified)
- ✅ Configured for Expo (includes web support)

## 🚀 Testing the Export

### Step 1: Test Export Locally

```bash
# Clear any previous builds
rm -rf dist

# Run the export command
npm run build

# OR
npx expo export --platform web
```

### Step 2: Verify Output Structure

After running the export, you should see:

```
dist/
├── index.html
├── _expo/
│   └── static/
│       ├── js/
│       ├── css/
│       └── assets/
└── static/
    └── ...
```

### Step 3: Test Locally (Optional)

```bash
# Serve the dist folder locally
npm run serve:web

# OR
npx serve dist
```

Visit `http://localhost:3000` to see your app.

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Set framework to "Other"
# - Confirm build command: npm run build
# - Confirm output directory: dist
```

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel will auto-detect settings from `vercel.json`
4. Deploy!

## ✅ Verification Checklist

- [x] `app.config.js` created with web settings
- [x] `package.json` scripts updated
- [x] `vercel.json` configured for dist folder
- [x] Web dependencies installed (`react-native-web`, `react-dom`)
- [x] Mobile builds preserved (iOS & Android configs intact)
- [x] Babel config supports web
- [x] `.gitignore` excludes `dist/`

## 🔧 Key Configuration Details

### Web Export Output
- **Command**: `npx expo export --platform web`
- **Output Directory**: `dist/`
- **Format**: Static HTML/CSS/JS files

### Web Settings in app.config.js
- **Bundler**: Metro (default)
- **Output**: Static (for Vercel)
- **Title**: "Arog - Recovery and Health Management"
- **Favicon**: `./assets/images/AROG.png`
- **Meta Tags**: Viewport, theme color, PWA settings

### Vercel Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Rewrites**: All routes → `/index.html` (for client-side routing)
- **Cache Headers**: Static assets cached for 1 year

## 📱 Mobile Compatibility

✅ **Mobile builds remain intact!**

- iOS configuration: `app.config.js` → `ios`
- Android configuration: `app.config.js` → `android`
- All mobile-specific settings preserved
- No changes to mobile entry points

## 🐛 Troubleshooting

### Issue: Export fails

```bash
# Clear cache and try again
npx expo export --platform web --clear
```

### Issue: Missing dependencies

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Issue: Vercel deployment fails

1. Check `vercel.json` syntax
2. Verify `outputDirectory` is `dist`
3. Ensure `buildCommand` runs successfully locally first

### Issue: Blank page on Vercel

1. Check browser console for errors
2. Verify all static assets are loading
3. Check `vercel.json` rewrites configuration

## 📚 Additional Resources

- [Expo Web Documentation](https://docs.expo.dev/workflow/web/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Expo Static Export](https://docs.expo.dev/deploy/web/)

## ✨ Next Steps

1. **Test export locally**: Run `npm run build`
2. **Verify dist folder**: Check structure and files
3. **Deploy to Vercel**: Use CLI or dashboard
4. **Test production**: Visit your Vercel URL

Your app is now ready for web deployment! 🎉

