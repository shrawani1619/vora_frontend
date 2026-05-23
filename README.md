# Vora Realtors — Luxury Real Estate Landing Page

A premium single-page luxury real estate website for **Vora Realtors**, built with React, Tailwind CSS, and Framer Motion.

## Features

- Cinematic fullscreen hero with parallax scrolling
- Sticky transparent navbar with scroll state
- 11 fully designed sections (Hero, About, Highlights, Overview, Amenities, Gallery, Floor Plans, Location, Testimonials, Enquiry, Footer)
- Glassmorphism cards with gold (#C8A96B) accents
- Animated counters, scroll reveals, and auto-sliding testimonial carousel
- Floating WhatsApp & Call buttons
- Lazy-loaded images for performance
- Fully responsive (mobile, tablet, desktop)

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # Section components + UI primitives
├── data/content.js   # All site content & configuration
├── hooks/            # Scroll reveal & animated counter hooks
├── App.jsx           # Main page layout
└── index.css         # Tailwind + luxury design tokens
```

## Customization

- Update contact details, stats, and copy in `src/data/content.js`
- Replace Unsplash image URLs with your project photography
- Update the Google Maps embed in the Location section
