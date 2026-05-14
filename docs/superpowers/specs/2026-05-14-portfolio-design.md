# Portfolio Design Specification

## Overview
A personal portfolio for a Hybrid Design Engineer. The portfolio must showcase both high-end UI design capabilities and deep technical engineering skills, proving the ability to execute across the entire stack.

## Architecture & Tech Stack
- **Core:** Vanilla HTML, CSS, and JavaScript. No heavy frameworks, ensuring ultra-fast load times and complete control over the DOM.
- **Styling:** Vanilla CSS with CSS Variables for easy theming. 
- **Animations & 3D:** Heavy use of native CSS animations, transitions, and Vanilla JS. Will integrate WebGL/Three.js (or a lightweight alternative like OGL) for optimized, high-performance 3D background animations and interactive 3D elements.

## Layout & Structure
1. **Hero Section:**
   - Big, bold typography introducing the role ("Design Engineer").
   - Highly interactive background or cursor effects (e.g., text-reveal on hover, dynamic magnetic elements).
2. **Projects Grid (Unified Case Studies):**
   - An offset grid displaying high-quality UI mockups.
   - Initial state contains 2-3 realistic placeholder projects.
   - **Interaction:** Hovering over a project card triggers aggressive, playful animations (e.g., brutalist hard shadows expanding, card tilting, or glitch effects).
3. **Deep Dive Project View:**
   - Clicking a project expands it to show the full story.
   - **Top:** Beautiful, polished UI presentation.
   - **Bottom:** Scrolls down to reveal the "engine" — code snippets (in a syntax-highlighted dark theme block), system architecture details, and technical challenges.
4. **Terminal Contact Footer:**
   - A CLI-inspired contact section where the user can "type" to send an email or copy contact info, reinforcing the technical vibe.

## Aesthetic (Playful + Technical)
- **Base Theme:** Dark & Technical. Deep charcoal/black background (`#0a0a0a`).
- **Accents:** Bright, unapologetic colors (neon pink `#FF2A6D`, electric cyan `#05D9E8`, vibrant yellow `#FFFA00`).
- **Typography:**
  - Headings: Geometric sans-serif (e.g., Space Grotesk).
  - Data/Tech Text: Clean monospace (e.g., JetBrains Mono, Fira Code).
- **Vibe:** "Creative Hacker". It feels premium and technical but doesn't take itself too seriously. It uses brutalist borders and extreme micro-interactions.

## Animation Strategy
- **"Loads and loads of crazy interactions" (Highly Optimized)**:
  - **3D Vibe & WebGL:** An interactive 3D background (e.g., a subtle particle system, a wireframe terrain, or floating geometric primitives) that reacts to scroll and cursor movement, optimized to run at a buttery 60fps without draining laptop batteries.
  - **Card Tilts:** 3D hover effects on project cards using CSS `transform: perspective() rotateX() rotateY()` or actual WebGL planes.
  - **Magnetic Buttons:** Elements that pull toward the cursor with physics-based spring animations.
  - **Glitch & Scramble:** Text scrambling/glitch effects on load or hover.
  - **Custom Cursor:** A WebGL-driven or CSS-driven custom cursor that interacts with the 3D environment and DOM elements.
