# Portfolio Design Specification

## Overview
A personal portfolio for a Hybrid Design Engineer. The portfolio must showcase both high-end UI design capabilities and deep technical engineering skills, proving the ability to execute across the entire stack.

## Architecture & Tech Stack
- **Core:** Vanilla HTML, CSS, and JavaScript. No heavy frameworks, ensuring ultra-fast load times and complete control over the DOM.
- **Styling:** Vanilla CSS with CSS Variables for easy theming. 
- **Animations:** Heavy use of native CSS animations, transitions, and Vanilla JS for complex interactive elements. Will use libraries like GSAP or pure JS for physics-based and scroll-triggered animations if needed, but vanilla is preferred.

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
- **"Loads and loads of crazy interactions"**:
  - Magnetic buttons that pull toward the cursor.
  - Marquee scrolling text for skills or section dividers.
  - Text scrambling/glitch effects on load or hover.
  - Smooth reveal animations as elements enter the viewport.
  - Custom cursor that changes shape or color when interacting with different elements.
