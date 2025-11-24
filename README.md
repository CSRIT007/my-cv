# Personal Portfolio Website

A modern, responsive personal portfolio website built with Vue 3, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive (mobile-first approach)
- ⚡ Fast and lightweight (Vue 3 + Vite)
- 🎯 Smooth scrolling navigation
- 🌙 Dark/Light mode toggle
- 📝 Data-driven content (easy to customize)
- ✨ Subtle animations and hover effects

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Beautiful SVG icons

## Project Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
# or
pnpm install
```

2. **Run development server:**

```bash
npm run dev
# or
pnpm dev
```

3. **Build for production:**

```bash
npm run build
# or
pnpm build
```

4. **Preview production build:**

```bash
npm run preview
# or
pnpm preview
```

## Customization Guide

### Changing Personal Information

1. **Name, Role, and Tagline:**
   - Edit `src/components/HeroSection.vue` - Replace `[YOUR_NAME]`, `[YOUR_ROLE]`, and `[SHORT_TAGLINE]`
   - Edit `src/components/NavBar.vue` - Replace `[YOUR_NAME]` in the logo
   - Edit `src/components/FooterSection.vue` - Replace `[YOUR_NAME]` in copyright

2. **Contact Information:**
   - Edit `src/components/HeroSection.vue` - Replace `[EMAIL_ADDRESS]`, `[GITHUB_URL]`, `[LINKEDIN_URL]`
   - Edit `src/components/ContactSection.vue` - Replace `[EMAIL_ADDRESS]`, `[GITHUB_URL]`, `[LINKEDIN_URL]`

3. **Location:**
   - Edit `src/components/AboutSection.vue` - Replace `[LOCATION]`

### Adding/Removing Projects

Edit `src/data/projects.js`:

```javascript
export const projects = [
  {
    title: "Your Project Title",
    description: "Project description here",
    techStack: ["Vue 3", "Tailwind CSS"],
    githubUrl: "https://github.com/yourname/project",
    liveUrl: "https://project-demo.com" // Optional
  },
  // Add more projects...
]
```

### Updating Skills

Edit `src/data/skills.js`:

```javascript
export const skills = {
  frontend: ["Vue 3", "React", "..."],
  backend: ["Node.js", "..."],
  tools: ["Git", "..."]
}
```

### Modifying Experience

Edit `src/data/experience.js`:

```javascript
export const experience = [
  {
    role: "Your Role",
    company: "Company Name",
    dateRange: "2020 - Present",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
]
```

### Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    // Your accent color palette
  }
}
```

You can use [Tailwind Color Generator](https://uicolors.app/create) or any color palette tool to generate color scales.

### Changing Font

The project uses Inter font by default. To change it:

1. Update the font link in `index.html`
2. Update `fontFamily.sans` in `tailwind.config.js`

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ExperienceSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterSection.vue
│   └── data/
│       ├── projects.js
│       ├── skills.js
│       └── experience.js
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

