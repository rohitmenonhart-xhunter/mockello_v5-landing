# MOCKELLO - Vercel Deployment Guide

Complete guide to deploy the MOCKELLO landing page to Vercel with optimal performance and SEO.

## 🚀 Quick Deployment

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project root**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

## ⚙️ Deployment Configuration

### Build Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables (Optional)
```env
VITE_APP_NAME=MOCKELLO
VITE_API_URL=https://api.mockello.com
VITE_PHONE_PRIMARY=+917550000805
VITE_PHONE_SECONDARY=+919789026235
```

## 📁 Project Structure
```
mockello-landing/
├── public/
│   ├── favicons/           # Complete favicon set
│   ├── assets/            # Images and media
│   └── index.html         # HTML template with SEO
├── src/
│   ├── components/        # React components
│   ├── pages/            # Page components
│   └── lib/              # Utilities
├── vercel.json           # Vercel configuration
├── .vercelignore         # Deployment exclusions
└── package.json          # Dependencies
```

## 🔧 Vercel Configuration Features

### 1. SPA Routing
- All routes redirect to `index.html`
- Proper handling of React Router

### 2. Asset Optimization
- Static assets cached for 1 year
- Gzip compression enabled
- Image optimization

### 3. Security Headers
- XSS Protection
- Content Type Protection
- Frame Options
- Referrer Policy

### 4. Performance
- Edge caching
- Global CDN
- Automatic HTTPS

## 📊 Performance Optimizations

### Implemented Features
- ✅ **Code Splitting** - Lazy loading components
- ✅ **Image Optimization** - WebP format support
- ✅ **Font Preloading** - Faster typography loading
- ✅ **CSS Purging** - Unused styles removed
- ✅ **Bundle Analysis** - Optimized bundle size
- ✅ **PWA Ready** - Service worker support

### Expected Metrics
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Domain Configuration

### Custom Domain Setup
1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" > "Domains"
4. Add your custom domain
5. Configure DNS records:
   ```
   Type: CNAME
   Name: www
   Value: mockello.vercel.app
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### SSL Certificate
- Automatic HTTPS enabled
- SSL certificate auto-renewal
- HTTP to HTTPS redirect

## 📱 Mobile Optimization

### Implemented Features
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Touch Optimization** - 44px minimum touch targets
- ✅ **Performance** - Optimized for 3G networks
- ✅ **PWA Support** - Installable as app
- ✅ **Viewport Meta** - Proper mobile scaling

### Testing
```bash
# Test mobile performance
npm run build
npm run preview
# Test on device at: http://[your-ip]:4173
```

## 🔍 SEO Configuration

### Meta Tags Included
- **Title**: Optimized for search engines
- **Description**: Comprehensive business description
- **Keywords**: Relevant industry terms
- **Open Graph**: Social media previews
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: Schema.org markup

### Sitemap Generation
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mockello.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mockello.com/products</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mockello.com/services</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mockello.com/capabilities</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 🛠 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Routing Issues**
   - Ensure `vercel.json` has SPA routing configuration
   - Check that all routes redirect to `/index.html`

3. **Asset Loading Issues**
   - Verify public folder structure
   - Check asset paths in components
   - Ensure favicon paths are correct

4. **Performance Issues**
   - Run `npm run build` and check bundle size
   - Use Vercel Analytics for monitoring
   - Optimize images with WebP format

## 📈 Monitoring & Analytics

### Vercel Analytics
- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Geographic performance data
- Error tracking

### Google Analytics
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Deployment Workflow

### Development to Production
1. **Development**
   ```bash
   npm run dev
   # Test at http://localhost:8081
   ```

2. **Preview Deployment**
   ```bash
   vercel
   # Creates preview URL for testing
   ```

3. **Production Deployment**
   ```bash
   vercel --prod
   # Deploys to production domain
   ```

### Automatic Deployments
- **Main Branch**: Auto-deploys to production
- **Feature Branches**: Auto-creates preview deployments
- **Pull Requests**: Preview deployments for review

## 📞 Contact Integration

### Phone Call Integration
- Primary: +91 7550000805 (Rohit)
- Secondary: +91 9789026235 (Prem)
- All contact buttons functional across devices

### Testing Contact Features
```javascript
// Test phone integration
window.open('tel:+917550000805', '_self');
```

---

## 🎯 Post-Deployment Checklist

- [ ] Website loads correctly on mobile and desktop
- [ ] All contact buttons work (phone calls)
- [ ] Navigation between pages functions properly
- [ ] SEO meta tags are present
- [ ] Favicons display correctly
- [ ] Performance score > 90 on Lighthouse
- [ ] Social media sharing works
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics tracking implemented

## 🚀 Production URL
Once deployed, your site will be available at:
- **Vercel URL**: `https://mockello-landing.vercel.app`
- **Custom Domain**: `https://mockello.com` (when configured)

**Built with ❤️ by the MOCKELLO Team** 