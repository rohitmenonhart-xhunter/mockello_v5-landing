# MOCKELLO Landing Page - Deployment Guide

## 🚀 Vercel Deployment

### Prerequisites
- GitHub account
- Vercel account (free)
- Git repository with your code

### Quick Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository

3. **Configure Build Settings**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live! 🎉

### Configuration Files

The following files are included for optimal Vercel deployment:

#### `vercel.json`
- Configures build settings
- Sets up proper routing for SPA
- Optimizes caching for static assets
- Adds security headers

#### `.vercelignore`
- Excludes unnecessary files from deployment
- Reduces bundle size
- Improves build performance

### Environment Variables

If you need to add environment variables:

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables:
   ```
   VITE_API_URL=your-api-url
   VITE_ANALYTICS_ID=your-analytics-id
   ```

### Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to project settings
   - Click "Domains"
   - Add your custom domain

2. **Configure DNS**
   - Add CNAME record: `www` → `your-project.vercel.app`
   - Add A record: `@` → `76.76.19.61`

### Performance Optimizations

The deployment includes:

- ✅ **Static Asset Caching** - 1 year cache for images, fonts, etc.
- ✅ **Gzip Compression** - Automatic compression
- ✅ **CDN Distribution** - Global edge network
- ✅ **Security Headers** - XSS protection, content sniffing prevention
- ✅ **SPA Routing** - Proper handling of client-side routes

### Build Optimization

For optimal performance:

```bash
# Production build
npm run build

# Preview build locally
npm run preview

# Development with HMR
npm run dev
```

### Troubleshooting

#### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Routing Issues
- Ensure `vercel.json` includes SPA routing configuration
- Check that all routes redirect to `index.html`

#### Performance Issues
- Optimize images (use WebP format)
- Enable code splitting
- Remove unused dependencies

### Monitoring

After deployment, monitor:
- **Build times** - Should be under 2 minutes
- **Bundle size** - Keep under 2MB
- **Core Web Vitals** - Monitor in Vercel Analytics
- **Error rates** - Check Vercel Functions logs

### Continuous Deployment

Every push to main branch will:
1. Trigger automatic build
2. Run tests (if configured)
3. Deploy to production
4. Invalidate CDN cache
5. Send deployment notifications

### Branch Previews

For feature branches:
1. Push branch to GitHub
2. Vercel automatically creates preview deployment
3. Share preview URL for testing
4. Merge to main when ready

---

## 🔧 Alternative Deployment Options

### Netlify
```bash
# Build command
npm run build

# Publish directory
dist

# Redirects file
echo "/*    /index.html   200" > dist/_redirects
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Deploy
npm run build
npm run deploy
```

### AWS S3 + CloudFront
```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

## 📊 Performance Metrics

Target metrics for production:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s
- **Bundle Size**: < 2MB

---

## 🔒 Security

Included security measures:
- CSP headers for XSS prevention
- X-Frame-Options for clickjacking protection
- HSTS for HTTPS enforcement
- Referrer policy configuration
- Permission policy restrictions

---

**Deployment Status**: ✅ Ready for Production

For support, contact: [Your Email] 