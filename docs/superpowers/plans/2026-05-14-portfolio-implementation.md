# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a highly interactive, vanilla HTML/JS/CSS portfolio featuring a 3D WebGL background and unified design/engineering case studies.

**Architecture:** Vanilla HTML5, CSS Variables for theming, Three.js via CDN for the WebGL background, and native DOM APIs for interactions. No build step required; open `index.html` directly or serve locally.

**Tech Stack:** HTML5, CSS3, Vanilla JS, Three.js (CDN).

---

### Task 1: Project Skeleton & Assets

**Files:**
- Create: `index.html`
- Create: `css/style.css`
- Create: `js/main.js`

- [ ] **Step 1: Write initial index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design Engineer Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <canvas id="bg-canvas"></canvas>
    <div id="custom-cursor"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Initialize basic CSS**

```css
:root {
    --bg-color: #0a0a0a;
    --text-main: #f0f0f0;
    --accent-pink: #FF2A6D;
    --accent-cyan: #05D9E8;
    --font-heading: 'Space Grotesk', sans-serif;
    --font-mono: 'Fira Code', monospace;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    background-color: var(--bg-color);
    color: var(--text-main);
    font-family: var(--font-heading);
    overflow-x: hidden;
}
#bg-canvas {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    z-index: -1;
    pointer-events: none;
}
```

- [ ] **Step 3: Initialize basic JS**

```javascript
console.log('Portfolio initialized');
// Three.js setup will go here
```

- [ ] **Step 4: Verify**
Run: `open index.html` (or serve via local server).
Expected: Black page, no errors in console, network loads Three.js.

- [ ] **Step 5: Commit**
```bash
git add index.html css/style.css js/main.js
git commit -m "chore: setup project skeleton and styling base"
```

### Task 2: 3D WebGL Background

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Write Three.js setup for particles**

```javascript
const canvas = document.getElementById('bg-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const geometry = new THREE.BufferGeometry();
const count = 1000;
const positions = new Float32Array(count * 3);
for(let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
}
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x05D9E8,
    transparent: true,
    opacity: 0.8
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 3;

let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
});

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.001;
    particles.rotation.x += 0.0005;
    
    // Smooth camera movement based on mouse
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
```

- [ ] **Step 2: Verify**
Run: `open index.html`
Expected: Cyan particles rotating slowly, responding slightly to mouse movement.

- [ ] **Step 3: Commit**
```bash
git add js/main.js
git commit -m "feat: implement 3D particle background with Three.js"
```

### Task 3: Hero Section & Custom Cursor

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`
- Modify: `js/main.js`

- [ ] **Step 1: Write HTML**

```html
<!-- Add inside body, before script tags -->
<main class="content">
    <section class="hero">
        <h1 class="glitch-text" data-text="DESIGN ENGINEER">DESIGN ENGINEER</h1>
        <p class="subtitle">Bridging the gap between beautiful aesthetics and robust architecture.</p>
    </section>
</main>
```

- [ ] **Step 2: Add CSS for Hero & Cursor**

```css
/* Add to css/style.css */
.content {
    position: relative;
    z-index: 1;
    padding: 2rem 5%;
}
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.glitch-text {
    font-size: clamp(3rem, 8vw, 8rem);
    font-weight: 700;
    color: var(--text-main);
    text-transform: uppercase;
    position: relative;
    text-shadow: 2px 2px var(--accent-pink), -2px -2px var(--accent-cyan);
}
.subtitle {
    font-family: var(--font-mono);
    color: #aaa;
    margin-top: 1rem;
    font-size: 1.2rem;
}
/* Custom Cursor */
#custom-cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent-pink);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease-out;
    transform: translate(-50%, -50%);
}
body { cursor: none; }
```

- [ ] **Step 3: Update JS for custom cursor**

```javascript
// Add to js/main.js
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
```

- [ ] **Step 4: Verify**
Run: `open index.html`
Expected: Giant text with pink/cyan shadow, custom pink circle cursor following mouse.

- [ ] **Step 5: Commit**
```bash
git add index.html css/style.css js/main.js
git commit -m "feat: add hero section and custom cursor"
```

### Task 4: Unified Projects Grid

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Write HTML for Projects Grid**

```html
<!-- Add below hero section -->
<section class="projects">
    <h2 class="section-title">Case Studies</h2>
    <div class="projects-grid">
        <div class="project-card" onclick="openProject('project1')">
            <div class="card-inner">
                <h3>Fintech Dashboard</h3>
                <p>UI Design & WebGL Data Vis</p>
            </div>
        </div>
        <div class="project-card" onclick="openProject('project2')">
            <div class="card-inner">
                <h3>AI Content Platform</h3>
                <p>Full-Stack Next.js & Brutalist UI</p>
            </div>
        </div>
    </div>
</section>
```

- [ ] **Step 2: Add CSS for Grid & Brutalist interactions**

```css
/* Add to css/style.css */
.section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--accent-cyan);
    border-bottom: 2px solid #333;
    padding-bottom: 0.5rem;
}
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    padding-bottom: 5rem;
}
.project-card {
    background: #111;
    border: 2px solid #333;
    height: 300px;
    cursor: none;
    position: relative;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform-style: preserve-3d;
}
.project-card:hover {
    border-color: var(--accent-pink);
    box-shadow: 10px 10px 0 var(--accent-pink);
    transform: translateY(-5px) scale(1.02);
}
.card-inner {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
}
.card-inner h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
.card-inner p { font-family: var(--font-mono); color: #888; font-size: 0.9rem; }
```

- [ ] **Step 3: Verify**
Run: `open index.html` and scroll down.
Expected: Two cards that lift up and gain a hard pink drop shadow on hover.

- [ ] **Step 4: Commit**
```bash
git add index.html css/style.css
git commit -m "feat: implement brutalist unified projects grid"
```

### Task 5: Deep Dive Modal (The "Engine")

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`
- Modify: `js/main.js`

- [ ] **Step 1: Write HTML for Modal**

```html
<!-- Add at the bottom of body, just above scripts -->
<div id="project-modal" class="modal hidden">
    <div class="modal-content">
        <button class="close-btn" onclick="closeProject()">[X] CLOSE</button>
        <div class="modal-body">
            <h2 id="modal-title">Project Title</h2>
            <div class="ui-mockup-placeholder">UI Mockup Showcase</div>
            <div class="tech-deep-dive">
                <h3>Under the Hood</h3>
                <pre><code id="modal-code">const engine = new Engine();
engine.ignite();</code></pre>
            </div>
        </div>
    </div>
</div>
```

- [ ] **Step 2: Add CSS for Modal**

```css
/* Add to css/style.css */
.modal {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    overflow-y: auto;
    opacity: 1;
    transition: opacity 0.3s ease;
}
.modal.hidden {
    opacity: 0;
    pointer-events: none;
}
.modal-content {
    background: #111;
    max-width: 800px;
    margin: 5% auto;
    border: 2px solid var(--accent-cyan);
    box-shadow: 15px 15px 0 rgba(5, 217, 232, 0.2);
    position: relative;
}
.close-btn {
    position: absolute;
    top: 1rem; right: 1rem;
    background: none; border: none;
    color: var(--accent-pink);
    font-family: var(--font-mono);
    font-size: 1.2rem;
    cursor: none;
}
.modal-body { padding: 3rem 2rem; }
.ui-mockup-placeholder {
    height: 300px; background: #222;
    display: flex; align-items: center; justify-content: center;
    margin: 2rem 0; border: 1px dashed #444;
}
.tech-deep-dive { margin-top: 3rem; }
.tech-deep-dive pre {
    background: #000; padding: 1.5rem;
    border-left: 3px solid var(--accent-pink);
    font-family: var(--font-mono); color: #0f0;
    overflow-x: auto;
}
```

- [ ] **Step 3: Add JS logic**

```javascript
// Add to js/main.js
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');

function openProject(id) {
    if(id === 'project1') modalTitle.innerText = "Fintech Dashboard";
    if(id === 'project2') modalTitle.innerText = "AI Content Platform";
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}
```

- [ ] **Step 4: Verify**
Run: `open index.html`. Click a project card.
Expected: Modal opens with tech deep dive and UI mockup area. Clicking [X] closes it.

- [ ] **Step 5: Commit**
```bash
git add index.html css/style.css js/main.js
git commit -m "feat: add deep dive modal for projects"
```

### Task 6: Terminal Contact Footer

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Write HTML**

```html
<!-- Add below projects section -->
<footer class="terminal-footer">
    <div class="terminal-header">guest@portfolio: ~</div>
    <div class="terminal-body">
        <p><span class="prompt">$</span> ./contact.sh</p>
        <p class="output">Email: hello@designengineer.com</p>
        <p class="output">GitHub: github.com/designengineer</p>
        <p><span class="prompt">$</span> <span class="typing-cursor">_</span></p>
    </div>
</footer>
```

- [ ] **Step 2: Add CSS**

```css
/* Add to css/style.css */
.terminal-footer {
    max-width: 600px;
    margin: 4rem auto;
    border: 1px solid #333;
    border-radius: 5px;
    overflow: hidden;
    font-family: var(--font-mono);
    background: #0a0a0a;
}
.terminal-header {
    background: #222;
    padding: 0.5rem 1rem;
    color: #888;
    font-size: 0.9rem;
    border-bottom: 1px solid #333;
}
.terminal-body {
    padding: 1.5rem;
    color: #ccc;
    line-height: 1.6;
}
.prompt { color: var(--accent-pink); margin-right: 0.5rem; }
.output { color: var(--accent-cyan); margin-left: 1rem; }
.typing-cursor {
    display: inline-block;
    width: 10px;
    animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }
```

- [ ] **Step 3: Verify**
Run: `open index.html`, scroll to bottom.
Expected: A clean, CLI-inspired contact box with a blinking cursor.

- [ ] **Step 4: Commit**
```bash
git add index.html css/style.css
git commit -m "feat: add CLI-inspired contact footer"
```
