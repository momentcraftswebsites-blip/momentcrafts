# MomentCrafts

Premium, modern, responsive website platform built with React + TypeScript + Vite + Tailwind CSS.

## Tech Stack

- React 18 + TypeScript + Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Firebase Authentication (Google sign-in)
- Firebase Firestore
- Context API for auth/session state

## Features

- Premium pastel gradient UI with glassmorphism cards
- Mobile-first responsive design
- Dynamic content rendering from centralized constants
- Public pages: Home, Services, Work, Pricing, About, Blog, Contact, Template Details
- Google login with persisted session
- Protected admin route and dashboard
- Firestore-powered contact form submissions
- Admin management for portfolio/blog/pricing entries
- Lazy loaded routes and code splitting
- Firebase Hosting ready setup

## Project Structure

src/

- components/
- pages/
- layouts/
- routes/
- constants/
- assets/
- hooks/
- context/
- services/
- firebase/
- types/
- utils/

## Environment Setup

1. Copy `.env.example` to `.env`.
2. Fill Firebase values.
3. Add admin email(s) in `src/constants/siteConfig.ts`.

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Firebase Hosting

1. Install Firebase CLI.
2. Update `.firebaserc` with your project id.
3. Deploy:

```bash
npm run build
firebase deploy
```

## Notes

- Contact form writes to Firestore collection `contactSubmissions`.
- Admin dashboard reads/writes:
  - `contactSubmissions`
  - `portfolioItems`
  - `blogs`
  - `pricingPlans`
