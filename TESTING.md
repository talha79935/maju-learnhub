# 🧪 Testing Guide - MAJU Portal

Complete guide to test all features of the MAJU Portal LMS.

---

## 🚀 Quick Test Checklist

### ✅ Before You Start
- [ ] Supabase credentials configured
- [ ] Dev server running (`npm run dev`)
- [ ] Browser open at http://localhost:5173

---

## 🔐 Authentication Testing

### Test 1: Sign Up (Student)
1. Go to `/login`
2. Click **"Sign Up"** tab
3. Fill in:
   - Full Name: `Test Student`
   - Email: `student@test.com`
   - Password: `password123`
   - Role: **Student**
4. Click **"Sign Up"**
5. ✅ Should show success message
6. ✅ Should redirect to `/dashboard`

### Test 2: Sign Up (Faculty)
1. Logout (click logout in sidebar)
2. Go to `/login`
3. Click **"Sign Up"** tab
4. Fill in:
   - Full Name: `Test Faculty`
   - Email: `faculty@test.com`
   - Password: `password123`
   - Role: **Faculty**
5. Click **"Sign Up"**
6. ✅ Should show success message
7. ✅ Should redirect to `/faculty`

### Test 3: Login
1. Logout
2. Go to `/login`
3. Enter credentials
4. Click **"Login"**
5. ✅ Should redirect to appropriate dashboard

### Test 4: Protected Routes
1. Logout
2. Try to access `/dashboard` directly
3. ✅ Should redirect to `/login`

---

## 🎓 Student Portal Testing

### Test 5: Dashboard
1. Login as student
2. Go to `/dashboard`
3. ✅ Check stats cards display
4. ✅ Check upcoming assignments list
5. ✅ Check course progress bars
6. ✅ Check announcements feed
7. ✅ All data should be visible

### Test 6: Courses Page
1. Go to `/courses`
2. ✅ Should see 4 course cards
3. ✅ Each card should show:
   - Course name and code
   - Instructor name
   - Schedule and room
   - Progress bar
   - Student count
4. ✅ Hover effects should work
5. ✅ Responsive on mobile

### Test 7: Assignments Page
1. Go to `/assignments`
2. ✅ Should see tabbed interface
3. Test each tab:
   - **All**: Shows all assignments
   - **Pending**: Shows pending only
   - **Submitted**: Shows submitted only
   - **Graded**: Shows graded only
4. ✅ Each assignment should show:
   - Title and description
   - Course name
   - Due date
   - Status badge
   - Points/Grade
5. ✅ Tabs should filter correctly

### Test 8: Grades Page
1. Go to `/grades`
2. ✅ Check overall stats:
   - Current CGPA
   - Average grade
   - A grades count
   - Highest grade
3. ✅ For each course card:
   - Letter grade displayed
   - Percentage shown
   - Click "Grade Breakdown" tab
   - Check assignments list
   - Check midterm score
   - Check final score
   - Click "Progress" tab
   - Check progress bar
   - Check target vs current
4. ✅ All calculations should be correct

### Test 9: Attendance Page
1. Go to `/attendance`
2. ✅ Check overall stats:
   - Overall percentage
   - Present count
   - Absent count
   - Late count
3. ✅ For each course:
   - Attendance percentage
   - Status icon (✓/✗/⏰)
   - Last class date
   - Status badge
4. ✅ Colors should match status

### Test 10: Announcements Page
1. Go to `/announcements`
2. ✅ Check pinned section
3. ✅ Check regular announcements
4. ✅ Each announcement should show:
   - Title and content
   - Priority badge
   - Course badge
   - Date
   - Pin icon (if pinned)
5. ✅ Priority colors should be correct

### Test 11: Profile Page
1. Go to `/profile`
2. ✅ Check profile display:
   - Avatar
   - Name and student ID
   - Department badge
   - Bio
   - Contact info
   - Academic stats
3. Click **"Edit Profile"**
4. ✅ Form fields should be editable
5. Change some values
6. Click **"Save"**
7. ✅ Should show success message
8. ✅ Changes should persist
9. Click **"Cancel"** (after editing)
10. ✅ Should revert changes

---

## 👨‍🏫 Faculty Portal Testing

### Test 12: Faculty Dashboard
1. Login as faculty
2. Go to `/faculty`
3. ✅ Check teaching stats
4. ✅ Check course overview
5. ✅ Check recent activity
6. ✅ All cards should display

### Test 13: Course Management
1. Go to `/faculty/courses`
2. **Create Course**:
   - Click **"Create Course"**
   - Fill in all fields:
     - Name: `Test Course`
     - Code: `TEST-101`
     - Semester: `Fall 2024`
     - Schedule: `Mon, Wed 10:00 AM`
     - Room: `Room 101`
     - Description: `Test course description`
   - Click **"Create Course"**
   - ✅ Should show success message
   - ✅ Course should appear in list
3. **Edit Course**:
   - Click **"Edit"** on a course
   - Change some values
   - Click **"Save"**
   - ✅ Should show success message
   - ✅ Changes should be visible
4. **Delete Course**:
   - Click **"Delete"** (trash icon)
   - ✅ Should show confirmation
   - Confirm deletion
   - ✅ Should show success message
   - ✅ Course should be removed

### Test 14: Grading Page
1. Go to `/faculty/grading`
2. ✅ Should see assignment list
3. ✅ Should see student submissions
4. ✅ Grading interface should work

### Test 15: Students Page
1. Go to `/faculty/students`
2. ✅ Check student statistics
3. **Search**:
   - Type in search box
   - ✅ Should filter students
4. ✅ Each student card should show:
   - Avatar
   - Name and student ID
   - Email and phone
   - CGPA
   - Semester badge
   - Enrolled courses
5. ✅ Responsive layout

### Test 16: Faculty Attendance
1. Go to `/faculty/attendance`
2. **Select Course**:
   - Choose from dropdown
   - ✅ Should update list
3. **Select Date**:
   - Pick a date
   - ✅ Should update records
4. ✅ Check statistics:
   - Total students
   - Present %
   - Absent %
   - Late %
5. ✅ Student list should show:
   - Name and ID
   - Status icon
   - Status badge

### Test 17: Faculty Announcements
1. Go to `/faculty/announcements`
2. **Create Announcement**:
   - Click **"Create Announcement"**
   - Fill in:
     - Title: `Test Announcement`
     - Content: `This is a test`
     - Course: Select one
     - Priority: Select one
   - Click **"Create Announcement"**
   - ✅ Should show success message
   - ✅ Should appear in list
3. **Delete Announcement**:
   - Click delete (trash icon)
   - ✅ Should show confirmation
   - Confirm
   - ✅ Should be removed

### Test 18: Faculty Profile
1. Go to `/faculty/profile`
2. ✅ Check profile display:
   - Avatar
   - Name and faculty ID
   - Designation badges
   - Bio
   - Contact info
   - Achievements
   - Teaching courses
3. Click **"Edit Profile"**
4. ✅ All fields should be editable
5. Make changes
6. Click **"Save"**
7. ✅ Should show success message
8. ✅ Changes should persist

---

## 📱 Responsive Testing

### Test 19: Mobile View
1. Open DevTools (F12)
2. Toggle device toolbar
3. Select iPhone/Android
4. Test each page:
   - ✅ Sidebar should be hidden/collapsible
   - ✅ Cards should stack vertically
   - ✅ Text should be readable
   - ✅ Buttons should be tappable
   - ✅ Forms should work
   - ✅ No horizontal scroll

### Test 20: Tablet View
1. Select iPad/Tablet
2. Test each page:
   - ✅ Layout should adapt
   - ✅ 2-column grids should work
   - ✅ Navigation should be accessible
   - ✅ All features should work

---

## 🎨 UI/UX Testing

### Test 21: Animations
1. Navigate between pages
2. ✅ Smooth transitions
3. Hover over cards
4. ✅ Hover effects work
5. Click buttons
6. ✅ Click feedback visible

### Test 22: Loading States
1. Slow down network (DevTools)
2. Navigate to pages
3. ✅ Loading indicators should show
4. ✅ Skeleton screens (if any)

### Test 23: Empty States
1. Create new faculty account
2. Go to `/faculty/courses`
3. ✅ Should show empty state
4. ✅ "Create Course" button visible
5. ✅ Helpful message displayed

### Test 24: Error Handling
1. Try invalid login
2. ✅ Error message should show
3. Try creating course without required fields
4. ✅ Validation should work
5. ✅ Error messages should be clear

---

## 🔐 Security Testing

### Test 25: Route Protection
1. Logout
2. Try accessing:
   - `/dashboard`
   - `/courses`
   - `/faculty`
   - `/faculty/courses`
3. ✅ All should redirect to `/login`

### Test 26: Role-Based Access
1. Login as student
2. Try accessing `/faculty`
3. ✅ Should be restricted or redirect

---

## 🚀 Performance Testing

### Test 27: Page Load Speed
1. Open DevTools → Network
2. Navigate to each page
3. ✅ Pages should load < 2s
4. ✅ No unnecessary requests

### Test 28: Build Test
1. Run `npm run build`
2. ✅ Should build successfully
3. ✅ No errors in console
4. Run `npm run preview`
5. ✅ Production build should work

---

## 📊 Test Results Template

```
Date: ___________
Tester: ___________

Authentication: ✅ / ❌
Student Portal: ✅ / ❌
Faculty Portal: ✅ / ❌
Responsive: ✅ / ❌
UI/UX: ✅ / ❌
Security: ✅ / ❌
Performance: ✅ / ❌

Issues Found:
1. ___________
2. ___________
3. ___________

Notes:
___________
```

---

## 🐛 Common Issues & Solutions

### Issue: "Cannot connect to Supabase"
**Solution**: Check environment variables

### Issue: "404 on page refresh"
**Solution**: Deployment config issue, check vercel.json

### Issue: "Slow loading"
**Solution**: Check network tab, optimize images

### Issue: "Form not submitting"
**Solution**: Check validation, check console errors

---

## ✅ Final Checklist

Before deployment, ensure:
- [ ] All 28 tests pass
- [ ] No console errors
- [ ] Responsive on all devices
- [ ] All features work
- [ ] Database connected
- [ ] Environment variables set
- [ ] Build succeeds
- [ ] Preview works

---

## 🎯 Test Coverage

- **Pages**: 14/14 (100%)
- **Features**: 50+/50+ (100%)
- **Responsive**: 3/3 breakpoints (100%)
- **Security**: All routes protected (100%)

---

**Happy Testing! 🧪**
