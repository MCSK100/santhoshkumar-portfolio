# Santhosh Kumar Portfolio

A world-class cinematic portfolio website inspired by premium Japanese CG/VFX studios like SAZABI, featuring immersive WebGL experiences, smooth scroll animations, and a dark cyberpunk aesthetic.

## 🎬 Design Philosophy

- **Premium Japanese Motion Design**: Minimal UI, cinematic storytelling, no card-heavy layouts
- **Dark Cyberpunk Aesthetic**: Black (#050505) background with deep red accents (#ff1a1a)
- **60fps Animations**: GPU-accelerated with GSAP ScrollTrigger and Lenis smooth scroll
- **Immersive 3D**: Three.js particle fields, floating geometries, volumetric lighting
- **Apple-level Smoothness**: Award-winning Awwwards-style interactions

## 🚀 Tech Stack

- **React 19** + Vite + TypeScript
- **Three.js** + React Three Fiber + Drei (3D scenes)
- **GSAP** + ScrollTrigger (scroll animations)
- **Lenis** (smooth scrolling)
- **TailwindCSS** (styling)
- **Lucide React** (icons)

## 📁 Project Structure

```
src/
├── components/
│   ├── effects/          # 3D effects & visual components
│   │   ├── Scene3D.tsx   # Main 3D canvas wrapper
│   │   ├── ParticleField.tsx    # Floating particles
│   │   ├── FloatingGeometries.tsx  # Wireframe shapes
│   │   ├── VolumetricLight.tsx     # Light cones
│   │   ├── CustomCursor.tsx         # Magnetic cursor
│   │   └── GrainOverlay.tsx         # Film grain
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── Navigation.tsx
├── hooks/                # Custom React hooks
│   ├── useSmoothScroll.ts
│   ├── useMousePosition.ts
│   └── useInView.ts
├── shaders/              # GLSL shaders
│   ├── noiseFragment.glsl
│   ├── noiseVertex.glsl
│   └── displacementFragment.glsl
├── styles/
│   └── index.css         # Global styles + Tailwind
├── App.tsx               # Main app component
└── main.tsx              # Entry point
```

## 🎯 Features

### Hero Section
- Fullscreen 3D scene with floating particles
- Interactive mouse-reactive camera
- Letter-by-letter text reveal animation
- Ambient red glow and volumetric lighting
- Floating geometric wireframes

### About Section
- Scroll-driven content reveal
- Animated stat counters
- Glassmorphism cards
- Parallax depth layers

### Experience Timeline
- Scroll-controlled glowing timeline
- Alternating layout with cinematic reveals
- Animated skill tags
- Current position indicator with pulse

### Skills Section
- Animated progress bars
- Floating skill cloud
- Glassmorphism category cards
- Hover-triggered glow effects

### Projects Showcase
- Cinematic card reveals
- Hover distortion effects
- RGB accent colors per project
- GitHub integration

### Contact Section
- Interactive form with validation
- Magnetic social links
- Neon border effects
- Glassmorphism panels

### Global Effects
- Custom cursor with trail and glow
- Film grain overlay
- Smooth scroll (Lenis)
- Preloader animation
- Responsive design

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Responsive

- **Desktop**: Full WebGL experience with all effects
- **Tablet**: Reduced particles, simplified 3D
- **Mobile**: CSS animations, touch-optimized, no custom cursor

## 🎨 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| bg-primary | #050505 | Background |
| accent-red | #ff1a1a | Primary accent |
| accent-crimson | #8b0000 | Secondary accent |
| text-primary | #ffffff | Headings |
| text-secondary | #bdbdbd | Body text |
| text-muted | #666666 | Captions |

## 📄 License

© 2025 Santhosh Kumar. All rights reserved.
