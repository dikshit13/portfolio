# Portfolio Quick Reference Guide

## 🎯 Portfolio Overview

Your professional portfolio now includes **9 comprehensive sections** organized for maximum recruiter impact:

```
┌─────────────────────────────────────────┐
│          NAVIGATION BAR                  │
│   Logo | About | Skills | Projects |    │
│   Experience | Education | Resume       │
└─────────────────────────────────────────┘
                    ↓
         ┌─────────────────────┐
         │   HERO SECTION      │
         │  Introduction &     │
         │  Quick CTA Buttons  │
         └─────────────────────┘
                    ↓
         ┌─────────────────────┐
         │    ABOUT ME         │
         │  Background, Goals, │
         │  & Soft Skills      │
         └─────────────────────┘
                    ↓
         ┌─────────────────────┐
         │   SKILLS & TECH     │
         │  Languages, Stacks, │
         │  Tools, DSA         │
         └─────────────────────┘
                    ↓
         ┌─────────────────────┐
         │   MY PROJECTS       │
         │  ShopKart, SRM      │
         │  With Tech Stack    │
         └─────────────────────┘
                    ↓
         ┌─────────────────────┐
         │ CERTIFICATIONS      │
         │  5 Professional     │
         │  Courses            │
         └─────────────────────┘
                    ↓
         ┌─────────────────────┐
         │ EXPERIENCE/TRAINING │
         │  DSA Training       │
         │  CipherSchools      │
         └─────────────────────┘
                    ↓
         ┌─────────────────────┐
         │  ACHIEVEMENTS       │
         │  250+ DSA, 4⭐      │
         │  Hackathon Rank 5   │
         └─────────────────────┘
                    ↓
         ┌─────────────────────┐
         │   EDUCATION         │
         │  B.Tech, 12th, 10th │
         │  Timeline View      │
         └─────────────────────┘
                    ↓
         ┌─────────────────────┐
         │   CONTACT           │
         │  Email, Phone,      │
         │  Social, Resume DL  │
         └─────────────────────┘
                    ↓
         ┌─────────────────────┐
         │   FOOTER            │
         │  Links & Copyright  │
         └─────────────────────┘
```

---

## 📁 File Structure

```
portfolio/
├── app/                      # Next.js app router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── favicon.ico
│   └── icon.png
│
├── components/
│   ├── main/                # Main UI sections
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── certifications.tsx
│   │   ├── experience.tsx
│   │   ├── achievements.tsx
│   │   ├── education.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   └── star-background.tsx
│   │
│   └── sub/                 # Smaller reusable components
│
├── constants/               # Centralized data (projects, skills, etc.)
│   └── index.ts
│
├── lib/                     # Utility & animation logic
│   ├── motion.ts
│   └── utils.ts
│
├── public/                  # Static assets
│   ├── certifications/
│   ├── profile/
│   ├── projects/
│   ├── skills/
│   ├── videos/
│   ├── hero-bg.svg
│   ├── logo.png
│   ├── lock-main.png
│   ├── lock-top.png
│   └── resume.pdf
│
├── config/
│   └── index.ts
│
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📊 Data Configuration

All portfolio data is in `constants/index.ts`:

### Skill Categories

- `SKILL_DATA` - Main languages (C++, Python, JS)
- `FRONTEND_SKILL` - HTML, CSS, React.js
- `BACKEND_SKILL` - Node.js, Express, MongoDB, MySQL, PHP
- `FULLSTACK_SKILL` - Git, GitHub, Postman, REST APIs
- `OTHER_SKILL` - DSA, LeetCode, HackerRank
- `SOFT_SKILLS` - 6 professional attributes

### Projects & Content

- `PROJECTS` - 2 detailed projects with tech stacks
- `CERTIFICATIONS` - 5 professional certifications
- `EXPERIENCE` - Training details
- `ACHIEVEMENTS` - 3 major achievements
- `EDUCATION` - B.Tech, 12th, 10th grades
- `SOCIALS` - GitHub & LinkedIn links
- `LINKS` - Email, phone, resume, source code

---

## 🚀 Running the Portfolio

### Prerequisites

- Node.js installed
- npm or yarn package manager

### Start Development Server

```bash
cd c:\Users\diksh\Downloads\space-portfolio-main\space-portfolio-main
npm run dev
```

Visit: **http://localhost:3000**

### Build for Production

```bash
npm run build
npm start
```

---

## 📄 Required Files in `/public`

These files must be created/added:

1. **resume.pdf** - Your CV
   - Used by all "Download Resume" buttons
2. **projects/shopkart.png** - Project preview image
3. **projects/srm-system.png** - Project preview image
4. **logo.png** - Your logo/avatar
   - Displayed in navbar

---

## 🎨 Styling & Customization

### Theme Colors

- **Primary:** Purple (#7042f8)
- **Secondary:** Cyan (#00D9FF)
- **Background:** Dark (#030014)

Located in: `tailwind.config.ts`

### Fonts

- Used Google Fonts via Inter font
- Can be modified in `app/layout.tsx`

### Animations

- Framer Motion animations throughout
- Configuration in `lib/motion.ts`

---

## ✏️ How to Update Content

### Add New Project

1. Edit `constants/index.ts`
2. Add to `PROJECTS` array
3. Add image to `/public/projects/`
4. Auto-updates in Projects section

### Add New Certification

1. Edit `constants/index.ts`
2. Add to `CERTIFICATIONS` array
3. Auto-updates in Certifications section

### Update Personal Information

1. Edit `constants/index.ts` - `LINKS` object
2. Update email, phone, resume, GitHub links
3. Auto-updates throughout the site

### Add New Skill

1. Edit `constants/index.ts`
2. Add to appropriate skill array (`FRONTEND_SKILL`, `BACKEND_SKILL`, etc.)
3. Add skill icon to `/public/skills/` if needed
4. Auto-updates in Skills section

---

## 🔗 Navigation Links

All sections are anchor-linked for smooth scrolling:

```
#about-me       → About section
#skills         → Skills section
#projects       → Projects section
#experience     → Experience section
#education      → Education section
#contact        → Contact section (not in nav, scroll down)
#achievements   → Achievements (not in nav, scroll down)
#certifications → Certifications (not in nav, scroll down)
```

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px (md)
- **Tablet:** 768px - 1024px (lg)
- **Desktop:** > 1024px (lg)

Navbar adapts:

- Desktop: Full horizontal menu
- Mobile: Hamburger menu

---

## 🔐 Personal Data

Configured in `constants/index.ts` `LINKS` object:

```typescript
email: "dixitkamboj7@gmail.com";
phone: "+91 9557832712";
resume: "/resume.pdf";
sourceCode: "https://github.com/dikshit13/...";
```

Update these values anytime to change across the entire site!

---

## ✅ Deployment Checklist

Before deploying:

- [ ] Add `resume.pdf` to public folder
- [ ] Add project images (`shopkart.png`, `srm-system.png`)
- [ ] Update logo.png if desired
- [ ] Test all social links
- [ ] Test resume download button
- [ ] Check mobile responsiveness
- [ ] Test all section links in navbar
- [ ] Verify all project GitHub links
- [ ] Check contact form functionality

---

## 🌐 Deploy to Vercel (Recommended)

```bash
git add .
git commit -m "Complete portfolio setup"
git push origin main

# Then push to Vercel dashboard
```

---

## 📞 Personal Information Summary

| Field      | Value                    |
| ---------- | ------------------------ |
| Name       | Dikshit Kamboj           |
| Email      | dixitkamboj7@gmail.com   |
| Phone      |                          |
| GitHub     | github.com/dikshit13     |
| LinkedIn   | linkedin.com/in/dikshit1 |
| University | LPU (2023–Present)       |
| CGPA       | 7.11                     |
| Location   | India                    |

---

## 🎓 Education Overview

- **B.Tech:** Computer Science Engineering, LPU (2023–Present) - CGPA 7.11
- **12th Grade:** 81%
- **10th Grade:** 61%

---

## 🏆 Key Achievements

- ✅ 250+ DSA problems solved
- ✅ 4⭐ HackerRank (C++ & Python)
- ✅ 5th rank in Hackaverse hackathon (20 teams)
- ✅ 5 professional certifications
- ✅ 2+ live projects

---

## 📞 Support

All code is modular and well-commented. Each component can be:

- Updated independently
- Removed if not needed
- Reordered in `page.tsx`
- Customized for your needs

**Status:** ✅ Production-Ready for Placements!
