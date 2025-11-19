# 🚀 Quick Start Guide - MAJU Portal

Get your MAJU Portal up and running in 5 minutes!

## ⚡ Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add environment variables in Tempo project settings:
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key

# 3. Run the app
npm run dev
```

That's it! Open http://localhost:5173

---

## 📋 Step-by-Step Setup

### Step 1: Get Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and sign in
2. Create a new project (or use existing)
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** 
   - **anon/public key**

### Step 2: Set Up Database

1. In Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `supabase/migrations/20240101000000_create_profiles_and_courses.sql`
3. Paste and run the SQL
4. Verify tables are created in **Table Editor**

### Step 3: Configure Environment

**In Tempo Platform:**
- Click on project settings
- Add environment variables:
  - `VITE_SUPABASE_URL` = your project URL
  - `VITE_SUPABASE_ANON_KEY` = your anon key

**For Local Development:**
Create `.env` file:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 4: Run the Application

```bash
npm run dev
```

Visit: http://localhost:5173

---

## 🎯 First Time Usage

### Create Your First Account

1. Click **"Get Started"** or **"Login to Portal"**
2. Go to **"Sign Up"** tab
3. Fill in:
   - Full Name: `John Doe`
   - Email: `john@example.com`
   - Password: `password123` (min 6 characters)
   - Role: Select **Student** or **Faculty**
4. Click **"Sign Up"**
5. Check your email for verification (optional in dev mode)

### Login

1. Go to **"Login"** tab
2. Enter your email and password
3. Click **"Login"**
4. You'll be redirected to your dashboard!

---

## 🎓 Test the Features

### As a Student:

1. **Dashboard** - See your overview
2. **Courses** - View 4 sample courses
3. **Assignments** - Check pending assignments
4. **Grades** - See your grade breakdown
5. **Attendance** - Track your attendance
6. **Profile** - Edit your information

### As Faculty:

1. **Dashboard** - View teaching stats
2. **My Courses** - Click **"Create Course"**
   - Name: `Introduction to Programming`
   - Code: `CS-101`
   - Semester: `Fall 2024`
   - Schedule: `Mon, Wed 9:00 AM`
   - Room: `Room 301`
   - Description: `Learn programming basics`
3. **Students** - View enrolled students
4. **Announcements** - Create your first announcement
5. **Profile** - Update your professional info

---

## 🔧 Common Issues & Solutions

### Issue: "Cannot connect to Supabase"
**Solution**: 
- Check your environment variables are set correctly
- Verify Supabase project is active
- Check internet connection

### Issue: "Authentication failed"
**Solution**:
- Verify email/password are correct
- Check Supabase Auth is enabled
- Clear browser cache and try again

### Issue: "404 Page Not Found"
**Solution**:
- Restart the dev server
- Check the route exists in App.tsx
- Clear browser cache

### Issue: "Build fails"
**Solution**:
```bash
# Clear node modules and reinstall
rm -rf node_modules
npm install

# Clear cache
npm run build -- --force
```

---

## 📱 Testing on Mobile

1. Find your local IP address:
```bash
# On Mac/Linux
ifconfig | grep "inet "

# On Windows
ipconfig
```

2. Update vite.config.ts:
```typescript
server: {
  host: '0.0.0.0',
  port: 5173
}
```

3. Access from mobile: `http://YOUR_IP:5173`

---

## 🚀 Deploy to Production

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
# Deploy again
vercel --prod
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 📚 Learn More

- **Full Features**: See [FEATURES.md](./FEATURES.md)
- **Deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Documentation**: See [README.md](./README.md)

---

## 🎯 Next Steps

1. ✅ Set up your account
2. ✅ Explore all features
3. ✅ Customize the theme
4. ✅ Add your own data
5. ✅ Deploy to production

---

## 💡 Pro Tips

1. **Use the search**: Most pages have search functionality
2. **Check notifications**: Toast messages show success/errors
3. **Edit mode**: Toggle edit mode in profile pages
4. **Keyboard shortcuts**: Tab through forms quickly
5. **Responsive**: Test on different screen sizes

---

## 🆘 Need Help?

- Check [FEATURES.md](./FEATURES.md) for feature documentation
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Open an issue on GitHub
- Contact: support@maju.edu.pk

---

## 🎉 You're Ready!

Your MAJU Portal is now set up and ready to use. Enjoy exploring all the features!

**Happy Learning! 🎓**
