# ByteBuilt® — Digital Agency Website

An editorial, responsive Next.js website concept for ByteBuilt, with an original orbital hero visual, art-directed portfolio artwork built in CSS, GSAP entrance/scroll animations, service and studio sections, and a direct email contact CTA.

## Stack
- Next.js App Router + React + TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Lucide icons

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Before launch
- Replace the sample portfolio projects and descriptions with real ByteBuilt case studies.
- Update `hello@bytebuilt.studio` if your preferred contact email differs.
- Add a real domain, analytics only if needed, and a final Open Graph image.
- The current project artwork is custom CSS illustration, not client photography or third-party brand assets.

## Notes
Animations respect `prefers-reduced-motion`, navigation is keyboard accessible, semantic sections and metadata are included, and the contact CTA opens the visitor's email client. The sample portfolio cards intentionally link to contact rather than pretending to be published case-study pages.
