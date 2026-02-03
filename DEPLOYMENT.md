# Deployment Guide - Portfolio Project

## Prerequisites
1. GitHub account
2. Vercel account (sign up at vercel.com)
3. MongoDB Atlas account (for production database)

## Step 1: Deploy Backend to Vercel

### 1.1 Push Backend to GitHub
```bash
cd backend
git init
git add .
git commit -m "Initial backend commit"
# Create a new repo on GitHub named "portfolio-backend"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-backend.git
git push -u origin main
```

### 1.2 Deploy on Vercel
1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import your `portfolio-backend` repository
4. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)

### 1.3 Add Environment Variables
In Vercel dashboard → Settings → Environment Variables, add:
```
MONGODB_URI=your_mongodb_atlas_connection_string
```

### 1.4 Deploy
- Click "Deploy"
- After deployment, copy your backend URL (e.g., `https://portfolio-backend-xyz.vercel.app`)

## Step 2: Deploy Frontend to Vercel

### 2.1 Update Frontend Environment Variable
1. Open `frontend/.env.production`
2. Replace the URL with your backend URL:
```
VITE_API_URL=https://portfolio-backend-xyz.vercel.app
```

### 2.2 Push Frontend to GitHub
```bash
cd ../frontend
git init
git add .
git commit -m "Initial frontend commit"
# Create a new repo on GitHub named "portfolio-frontend"
git remote add origin https://github.com/YOUR_USERNAME/portfolio-frontend.git
git push -u origin main
```

### 2.3 Deploy on Vercel
1. Go to Vercel dashboard
2. Click "Add New" → "Project"
3. Import your `portfolio-frontend` repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: dist

### 2.4 Add Environment Variables (Optional - already in .env.production)
In Vercel dashboard → Settings → Environment Variables:
```
VITE_API_URL=https://portfolio-backend-xyz.vercel.app
```

### 2.5 Deploy
- Click "Deploy"
- Your frontend will be live at `https://your-portfolio-xyz.vercel.app`

## Step 3: Update Backend CORS (Important!)

After frontend deployment, update your backend's CORS settings:

1. In Vercel dashboard → Backend Project → Settings → Environment Variables
2. Add:
```
FRONTEND_URL=https://your-portfolio-xyz.vercel.app
```

3. Update `backend/src/index.js` to use this:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));
```

4. Commit and push to redeploy backend

## Testing
1. Visit your frontend URL
2. The visitor counter should work
3. Check browser console for any errors

## Troubleshooting

### Backend not starting
- Check Vercel logs in dashboard
- Verify MongoDB connection string
- Ensure all environment variables are set

### CORS errors
- Update backend CORS to allow frontend domain
- Check that API_URL in frontend is correct

### Environment variables not working
- Redeploy after adding environment variables
- For frontend, must start with `VITE_`
- Check `.env.production` is committed to repo

## Local Development
- Backend: `npm run dev` (uses localhost:3000)
- Frontend: `npm run dev` (uses .env.local with localhost:3000)

The environment variables automatically switch between local and production!
