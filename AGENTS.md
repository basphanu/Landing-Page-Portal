# Project Guidelines & Rules (AGENTS.md)

## 1. Mobile & Safari (iOS) Performance Rules
- **Avoid Heavy Blur Filters**: Do not use large CSS backdrop/element blur classes like `blur-[140px]` or `blur-3xl` on full-viewport elements. They cause severe frame drops and slow initial rendering on WebKit / Safari mobile devices.
- **Use Radial Gradients for Ambient Glows**: Replace blurred divs with optimized CSS radial gradients (e.g., `bg-[radial-gradient(circle_at_center,rgba(240,124,83,0.12)_0%,transparent_70%)]`).
- **Font Optimization**: Load fonts with `preconnect` in `index.html` (`Prompt` and `Inter`) and include WebKit font-smoothing and GPU acceleration helpers (`gpu-accelerate` / `-webkit-transform: translateZ(0)`).

## 2. GitHub Pages Deployment (`.github/workflows/deploy.yml`)
- Use `actions/configure-pages@v5` with `enablement: true` specified to ensure GitHub Pages deployment triggers cleanly without missing permissions errors.

## 3. Core System Requirements & Navigation
- **Navigation**: System links MUST open in the same window/tab (`window.location.href`) to prevent popup blocker issues on mobile devices.
- **Support Contact**: Official IT Support Contact is `Phanumars.bas@gmail.com` and Mobile `+66-95-769-5558 (TH)`.
- **System Title**: Primary Header Title is `Branch Support Service System`.
- **UI Aesthetic**: Maintain the tactile 3D / claymorphism bento card layout with pastel/clay styling and built-in Light/Dark Mode toggle.
