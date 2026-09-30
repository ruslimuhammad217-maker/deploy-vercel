# ARYA PRATAMA — Graphic Designer Portfolio

A premium editorial-style portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🎨 Design Identity
- **Typography:** Clash Display (display) + Inter (body)
- **Color System:** Off-white `#F5F0EB` background · Charcoal `#1A1A1A` foreground · Orange `#FF4D00` accent
- **Aesthetic:** Editorial magazine × Digital art studio × Minimalist brutalism

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portofolio/
├── app/
│   ├── globals.css           # Complete design system
│   ├── layout.tsx            # Root layout + SEO metadata
│   ├── page.tsx              # Main page (all sections)
│   ├── not-found.tsx         # Custom 404 page
│   └── portfolio/
│       └── [slug]/
│           └── page.tsx      # Dynamic project detail page
│
├── components/
│   ├── CustomCursor.tsx      # Smooth custom cursor with hover states
│   ├── Navbar.tsx            # Sticky nav with mobile fullscreen menu
│   ├── Hero.tsx              # Landing section with editorial layout
│   ├── Marquee.tsx           # Scrolling text separator
│   ├── About.tsx             # Skills & Education section
│   ├── SkillGrid.tsx         # Interactive skill grid with SVG icons
│   ├── Experience.tsx        # Accordion experience timeline
│   ├── Portfolio.tsx         # Filterable asymmetric gallery
│   ├── ProjectDetail.tsx     # Case study detail page
│   ├── Contact.tsx           # Contact section with links
│   └── Footer.tsx            # Footer with oversized typography
│
├── data/
│   ├── projects.ts           # Portfolio projects data
│   ├── experience.ts         # Work experience data
│   ├── skills.ts             # Design tools/skills data
│   └── education.ts          # Education history data
│
└── public/
    └── resume/               # Place your resume PDF here
```

---

## ✏️ Customizing Content

### Change Accent Color
In `app/globals.css`, find and update:
```css
:root {
  --accent: #FF4D00;  /* Change this to any color */
}
```

### Update Personal Information
1. **Name/info**: Edit `components/Hero.tsx`, `components/Navbar.tsx`, `components/Footer.tsx`
2. **Portfolio projects**: Edit `data/projects.ts`
3. **Work experience**: Edit `data/experience.ts`
4. **Skills**: Edit `data/skills.ts`
5. **Education**: Edit `data/education.ts`
6. **Contact links**: Edit `components/Contact.tsx` and `components/Footer.tsx`

### Add Your Resume
Place your resume PDF in:
```
public/resume/arya-pratama-resume.pdf
```

### Add Your Profile Photo
Replace the Unsplash URL in `components/Hero.tsx`:
```tsx
src="https://images.unsplash.com/..."
// Replace with:
src="/images/profile.jpg"
```
Then place your image in `public/images/profile.jpg`.

### Add Real Portfolio Images
In `data/projects.ts`, update the `coverImage` and `images` fields with your actual project images.

---

## 🎯 Features
- ✅ Responsive (Desktop / Tablet / Mobile)
- ✅ Custom smooth cursor with hover effects
- ✅ Scroll-triggered animations (Framer Motion)
- ✅ Mobile hamburger menu with fullscreen overlay
- ✅ Portfolio category filtering
- ✅ Dynamic portfolio detail pages (`/portfolio/[slug]`)
- ✅ Marquee scrolling text separator
- ✅ Interactive skill grid (no progress bars)
- ✅ Accordion experience timeline
- ✅ Grain texture overlay
- ✅ Oversized editorial typography
- ✅ Asymmetric grid layouts
- ✅ SEO optimized (meta, OG, title)
- ✅ Accessible (ARIA labels, keyboard nav, focus states)
- ✅ prefers-reduced-motion support
- ✅ Next.js Image optimization
- ✅ TypeScript throughout

---

## 🛠️ Tech Stack
- **Next.js** 15 (App Router)
- **TypeScript** 5
- **Tailwind CSS** 3
- **Framer Motion** 11
- **Lucide React**
- **Clash Display** + **Inter** fonts

---

## 📦 Deploy to Vercel
```bash
npx vercel
```
Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.
