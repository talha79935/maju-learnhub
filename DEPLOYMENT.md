# Deployment Guide - MAJU Portal

## Prerequisites
- GitHub account
- Supabase project set up
- Your code pushed to GitHub

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Add Environment Variables
In Vercel dashboard, go to Settings → Environment Variables and add:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 4: Deploy
Click "Deploy" and wait for the build to complete!

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Step 3: Add Environment Variables
In Netlify dashboard, go to Site settings → Environment variables and add:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 4: Deploy
Click "Deploy site" and wait for the build!

---

## Getting Supabase Credentials

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to Settings → API
4. Copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon/public key** → `VITE_SUPABASE_ANON_KEY`

---

## Post-Deployment Setup

### Update Supabase Authentication URLs
1. Go to Supabase Dashboard → Authentication → URL Configuration
2. Add your deployment URL to:
   - **Site URL**: `https://your-app.vercel.app`
   - **Redirect URLs**: `https://your-app.vercel.app/**`

### Test Your Deployment
1. Visit your deployed URL
2. Try signing up with a new account
3. Test login/logout
4. Verify all features work

---

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node version (18 or higher)
- Check build logs for specific errors

### Authentication Not Working
- Verify environment variables are set correctly
- Check Supabase URL configuration
- Ensure redirect URLs are added in Supabase

### 404 Errors on Refresh
- Verify `vercel.json` or `netlify.toml` is present
- Check that rewrites are configured correctly

---

## Continuous Deployment

Both Vercel and Netlify automatically redeploy when you push to GitHub:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Your site will automatically rebuild and deploy!

---

## Custom Domain (Optional)

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

---

## Support

For issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Supabase: [supabase.com/docs](https://supabase.com/docs)
