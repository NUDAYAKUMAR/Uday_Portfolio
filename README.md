<<<<<<< HEAD
# N Udayakumar - Full Stack Developer Portfolio

A modern, fully responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion animations.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Extract the zip file** and navigate to the project directory:
```bash
cd portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

4. **Open your browser** and visit:
```
http://localhost:5173
```

## 🎨 Customization

### Edit Your Portfolio Content
All portfolio content is stored in a single data file for easy editing.

**File:** `src/data/portfolioData.js`

#### Personal Information
```javascript
export const personalData = {
  name: "N Udayakumar",
  email: "your-email@example.com",  // ← Update
  phone: "+91 XXXXX XXXXX",          // ← Update
  github: "https://github.com/your-username", // ← Update
  linkedin: "https://linkedin.com/in/your-profile", // ← Update
  resumeUrl: "/resume.pdf",          // Place your resume in /public folder
};
```

#### Skills
Update the `skillsData` array to add/modify your skills:
```javascript
export const skillsData = [
  { name: "Java", icon: "☕", level: 88, color: "#f89820" },
  // Add more skills...
];
```

#### Projects
Edit the `projectsData` array to showcase your projects:
```javascript
export const projectsData = [
  {
    id: 1,
    title: "Your Project Title",
    desc: "Project description...",
    tech: ["React.js", "Node.js"],
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    icon: "🚀",
    demo: "https://live-link.com",    // ← Update with live URL
    github: "https://github.com/link", // ← Update with GitHub link
    image: null,                       // Optional: add project image path
  },
];
```

#### Experience, Education, Achievements
Similarly update:
- `experienceData` - Your work experience
- `educationData` - Your education background
- `achievementsData` - Your awards and achievements

### Add Profile Photo
1. Add your profile photo to `/public` folder (e.g., `profile.jpg`)
2. Update the About section to reference your image
3. Edit `src/components/About.jsx` - replace the avatar placeholder with:
```jsx
<img src="/profile.jpg" alt="Profile" style={{width:'100%', borderRadius:'20px'}} />
```

### Add Project Images
1. Add project images to `/public` folder
2. Update `projectsData` in `src/data/portfolioData.js`:
```javascript
image: "/project1.png", // Instead of null
```

### Resume Download
1. Add your resume PDF to the `/public` folder (rename to `resume.pdf`)
2. Update `resumeUrl` in `personalData`:
```javascript
resumeUrl: "/resume.pdf",
```

## 🏗️ Project Structure

```
portfolio/
├── public/                 # Static files (resume, images, etc.)
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── FadeIn.jsx      # Scroll animation utility
│   ├── data/
│   │   └── portfolioData.js # All portfolio content
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎯 Key Features

- ✅ **Fully Responsive** - Mobile-first design that works on all devices
- ✅ **Dark Theme** - Modern dark UI with glassmorphism effects
- ✅ **Smooth Animations** - Scroll-triggered fade-in animations
- ✅ **Skill Progress Bars** - Animated progress visualization
- ✅ **Contact Form** - Functional contact form with success message
- ✅ **SEO Optimized** - Semantic HTML, meta tags, and structured data
- ✅ **Fast Performance** - Built with Vite for ultra-fast builds
- ✅ **Easy Customization** - All content in a single data file

## 📦 Build for Production

Generate an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready to deploy.

### Preview Production Build
```bash
npm run preview
```

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js`:
```javascript
export default {
  base: '/portfolio/',
  // ... rest of config
}
```

2. Build and deploy:
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 🎨 Customizing Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #050b14;
  --accent-blue: #3b82f6;
  --accent-cyan: #06b6d4;
  /* ... update other colors */
}
```

## 🔧 Technologies Used

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📝 Content Sections

1. **Hero** - Name, title, CTA buttons, social links
2. **About** - Bio, stats, skills highlights
3. **Skills** - Tech stack with progress bars
4. **Projects** - Featured project cards with links
5. **Experience** - Work history timeline
6. **Education** - Academic background
7. **Achievements** - Awards and accomplishments
8. **Contact** - Contact form and info
9. **Footer** - Quick links and social links

## 🎯 Performance Tips

- Optimize images before adding to `/public`
- Use WebP format for better compression
- Lazy load project images
- Consider adding service worker for offline support

## 📱 Mobile Optimization

The portfolio is fully mobile-responsive:
- Hamburger menu for navigation
- Touch-friendly buttons
- Optimized spacing and font sizes
- Fluid typography with `clamp()`

## 🐛 Troubleshooting

**Port 5173 already in use:**
```bash
npm run dev -- --port 3000
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
npm run build -- --debug
```

## 💡 Next Steps

1. Update all content in `src/data/portfolioData.js`
2. Add your profile photo to `/public`
3. Add project images to `/public`
4. Place your resume.pdf in `/public`
5. Update social media links
6. Test all links and contact form
7. Deploy to your hosting platform

## 📄 License

This portfolio template is free to use and modify for personal projects.

## 🤝 Support

For issues or questions, refer to:
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite: https://vitejs.dev

---

**Happy Building! 🚀**

*Made with ❤️ for developers like you.*
=======
# Uday_Portfolio
>>>>>>> dfe3fc0458cbf52f6cdacde372eb4cd2bd09a37c
