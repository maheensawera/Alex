# Alex Chen Portfolio

A premium, cinematic portfolio website built with Next.js, React, Tailwind CSS, Framer Motion, and GSAP. Features smooth Lenis scrolling, custom cursor, glassmorphism design, and immersive animations.

## Features

- **Custom Animated Cursor** — Smooth trailing cursor with magnetic hover effects
- **Lenis Smooth Scrolling** — Buttery smooth inertia scrolling
- **Glassmorphism Design** — Frosted glass cards with subtle borders
- **Cinematic Animations** — Scroll-triggered reveals, text stagger effects, parallax layers
- **Interactive Project Cards** — 3D tilt effect on hover with gradient glows
- **Responsive Design** — Fully responsive across all devices
- **Noise Texture Overlay** — Subtle film grain effect for premium feel
- **Magnetic Buttons** — Buttons that follow cursor on hover
- **Floating Background Elements** — Animated shapes and ambient lighting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Scrolling**: Lenis
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, noise overlay, custom properties
│   ├── layout.tsx           # Root layout with fonts and providers
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── Navbar.tsx             # Fixed navigation with scroll effects
│   ├── SmoothScrollProvider.tsx  # Lenis smooth scroll wrapper
│   ├── cursor/
│   │   └── CustomCursor.tsx   # Custom animated cursor
│   ├── hero/
│   │   └── Hero.tsx           # Hero section with floating shapes
│   ├── about/
│   │   └── About.tsx          # About section with stats and services
│   ├── projects/
│   │   └── Projects.tsx       # Project cards with 3D tilt
│   ├── skills/
│   │   └── Skills.tsx         # Skills with animated bars
│   ├── experience/
│   │   └── Experience.tsx     # Timeline experience section
│   ├── testimonials/
│   │   └── Testimonials.tsx   # Client testimonials grid
│   ├── contact/
│   │   └── Contact.tsx        # Contact form and info
│   ├── footer/
│   │   └── Footer.tsx         # Footer with links
│   └── ui/
│       ├── AnimatedText.tsx   # Text reveal animations
│       ├── MagneticButton.tsx # Magnetic hover buttons
│       ├── SectionReveal.tsx  # Scroll-triggered reveal wrapper
│       ├── ParallaxImage.tsx  # Parallax image component
│       └── GlowCard.tsx       # Glass card with mouse-following glow
├── hooks/
│   ├── useMousePosition.ts    # Mouse position tracking
│   ├── useScrollProgress.ts   # Scroll progress tracking
│   └── useInViewAnimation.ts  # In-view animation helper
├── lib/
│   └── utils.ts               # Utility functions (cn, lerp, clamp)
├── public/                     # Static assets
├── styles/                     # Additional styles
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `background`: Main background color (#050505)
- `surface`: Card surfaces
- `accent`: Primary accent colors (blue, purple, cyan)

### Fonts
Fonts are loaded from Fontshare CDN in `app/layout.tsx`:
- Satoshi (primary)
- General Sans (headings)
- Neue Montreal (alternative)

### Animations
Animation timing and easing can be adjusted in individual components. The default easing is `[0.23, 1, 0.32, 1]` for smooth, premium feel.

## Performance Notes

- Images are optimized using Next.js Image component
- Animations use `will-change` and `transform` for GPU acceleration
- Lenis smooth scroll is configured for optimal performance
- Custom cursor is disabled on touch devices

## License

MIT License - feel free to use this template for your own portfolio.

---

Built with passion by Alex Chen
