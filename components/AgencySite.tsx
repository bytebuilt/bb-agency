'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { number: '01', name: 'FORM / FUNCTION', type: 'Digital flagship · Commerce', year: '2025', tone: 'project-lime', visual: 'form', description: 'A sharper digital home for a new generation of design objects.' },
  { number: '02', name: 'OPEN FIELD', type: 'Brand platform · Culture', year: '2025', tone: 'project-blue', visual: 'field', description: 'An identity in motion for a culture that refuses to stand still.' },
  { number: '03', name: 'NŌMA STUDIO', type: 'Website · Art direction', year: '2024', tone: 'project-orange', visual: 'noma', description: 'Quiet confidence, translated into a tactile digital experience.' },
];

const services = [
  ['01', 'Digital strategy', 'Finding the signal in the noise. Positioning, discovery, and a clear direction for what comes next.'],
  ['02', 'Brand & art direction', 'Distinctive visual systems that make your business recognisable before the logo appears.'],
  ['03', 'Web design & development', 'Fast, accessible, thoughtfully engineered websites that turn attention into action.'],
  ['04', 'Digital products', 'Useful interfaces and considered experiences built around real people and real needs.'],
];

function ProjectArtwork({ visual }: { visual: string }) {
  if (visual === 'form') return <div className="art art-form" aria-hidden="true"><div className="form-sun"/><div className="form-object form-object-a"/><div className="form-object form-object-b"/><div className="form-object form-object-c"/><span className="art-index">OBJECTS FOR LIVING / 001</span><span className="art-word">FORM<br/>FOLLOWS<br/>FEELING.</span></div>;
  if (visual === 'field') return <div className="art art-field" aria-hidden="true"><div className="field-orbit orbit-one"/><div className="field-orbit orbit-two"/><div className="field-orbit orbit-three"/><span className="field-stamp">OPEN<br/>FIELD®</span><span className="field-side">A PLATFORM FOR WHAT'S NEXT</span></div>;
  return <div className="art art-noma" aria-hidden="true"><div className="noma-arch"/><div className="noma-sphere"/><div className="noma-type">nōma<span>®</span></div><div className="noma-caption">OBJECTS WITH<br/>A POINT OF VIEW</div></div>;
}

export default function AgencySite() {
  const root = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.fromTo('.hero-kicker', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: .7, delay: .1 })
        .fromTo('.hero-line-inner', { yPercent: 115, rotate: 2 }, { yPercent: 0, rotate: 0, duration: 1.05, stagger: .12 }, '-=.25')
        .fromTo('.hero-bottom', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: .8 }, '-=.35')
        .fromTo('.hero-art', { scale: .92, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, '-=.75');

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.fromTo(element, { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } });
      });
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        const art = card.querySelector('.art');
        if (art) gsap.fromTo(art, { scale: 1.08 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: .7 } });
      });
      gsap.to('.hero-orb', { rotate: 360, duration: 32, ease: 'none', repeat: -1 });
      gsap.to('.hero-orb-inner', { rotate: -360, duration: 24, ease: 'none', repeat: -1 });
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main ref={root}>
      <div className="custom-cursor" style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true"><span/></div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="ByteBuilt home">bytebuilt<span>®</span></a>
        <span className="header-note">Independent digital studio<br/>Tirana · Working everywhere</span>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>03</span></a><a href="#services" onClick={closeMenu}>What we do</a><a href="#about" onClick={closeMenu}>Studio</a><a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14}/></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-topline"><p className="hero-kicker"><span className="status-dot"/> SMALL STUDIO. BIG INTERNET ENERGY.</p><p className="hero-kicker hero-location">DESIGN × TECHNOLOGY × FEELING</p></div>
        <h1 className="hero-title" aria-label="We make digital matter."><span className="hero-line"><span className="hero-line-inner">We make</span></span><span className="hero-line hero-line-second"><span className="hero-line-inner">digital <i>matter.</i></span></span></h1>
        <div className="hero-lower">
          <div className="hero-art" aria-label="Original abstract orbital artwork"><div className="hero-orb"><div className="hero-orb-inner"><div className="orb-core"/><div className="orb-ring ring-a"/><div className="orb-ring ring-b"/><div className="orb-ring ring-c"/><span className="orb-label orb-label-one">IDEAS IN MOTION</span><span className="orb-label orb-label-two">BUILT TO FEEL DIFFERENT</span></div></div><span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span><span className="art-coordinate">41°19' N<br/>19°49' E</span></div>
          <div className="hero-description"><p>We partner with ambitious people to build brands, websites and digital experiences that move businesses forward.</p><a href="#work" className="round-link" aria-label="Explore selected work"><ArrowDownRight size={22}/></a></div>
          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/></div>
        </div>
        <div className="hero-index"><span>BB—001</span><span>INDEPENDENT BY DESIGN</span><span>© 2025—26</span></div>
      </section>

      <section className="manifesto section-pad" id="about">
        <div className="section-eyebrow" data-reveal><span>01 / THE POINT OF VIEW</span><span>NO OFF-THE-SHELF THINKING</span></div>
        <div className="manifesto-layout"><h2 data-reveal>Good digital<br/>should feel <span>inevitable.</span></h2><div className="manifesto-copy" data-reveal><p>Not louder. Not more complicated. Just more <em>you</em> — made clearer, more useful, and impossible to confuse with anything else.</p><p>ByteBuilt is an independent digital studio bringing strategy, design and technology into the same conversation. We make things with a point of view, and a reason to exist.</p><a className="text-link" href="#contact">A little about us <ArrowUpRight size={16}/></a></div></div>
        <div className="manifesto-foot"><span>CURIOUS BY NATURE</span><Asterisk size={18}/><span>PRECISE BY DESIGN</span><Asterisk size={18}/><span>BETTER BY BUILDING</span></div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-eyebrow" data-reveal><span>02 / SELECTED WORK</span><span>THOUGHTFUL WORK. REAL-WORLD IMPACT.</span></div>
        <div className="work-heading" data-reveal><h2>Proof of<br/><span>possibility.</span></h2><p>A few directions we love to explore. Each project starts with a question worth asking.</p></div>
        <div className="project-list">{projects.map((project) => <a className="project-card" href="#contact" key={project.number} aria-label={`Discuss a project like ${project.name}`}><div className={`project-visual ${project.tone}`}><ProjectArtwork visual={project.visual}/><span className="project-open"><ArrowUpRight size={22}/></span></div><div className="project-meta"><div className="project-name"><span className="project-number">{project.number}</span><h3>{project.name}</h3></div><span className="project-type">{project.type}</span><span className="project-year">{project.year}</span></div><p className="project-description">{project.description}</p></a>)}</div>
        <div className="work-end" data-reveal><span>GOOD WORK STARTS WITH A GOOD QUESTION.</span><a className="text-link" href="#contact">Have one for us? <ArrowUpRight size={16}/></a></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-eyebrow" data-reveal><span>03 / WHAT WE DO</span><span>FROM FIRST THOUGHT TO FINAL PIXEL</span></div>
        <div className="services-intro" data-reveal><h2>Made with<br/><span>intention.</span></h2><p>Clarity before code. Character before convention. Every decision should earn its place.</p></div>
        <div className="service-list">{services.map(([number, title, description]) => <article className="service-row" key={number} data-reveal><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-arrow" size={20}/></article>)}</div>
        <div className="services-note"><span>SMALL, SENIOR, COLLABORATIVE.</span><span>THE RIGHT PEOPLE FOR THE RIGHT PROBLEM.</span></div>
      </section>

      <section className="approach section-pad">
        <div className="section-eyebrow" data-reveal><span>04 / HOW WE THINK</span><span>LESS PROCESS THEATRE. MORE PROGRESS.</span></div>
        <div className="approach-grid"><h2 data-reveal>Make it<br/><span>mean something.</span></h2><div className="approach-content" data-reveal><p className="approach-lede">The best work lives where a sharp idea meets careful execution.</p><div className="approach-steps"><div><span>01</span><p><strong>Listen closely.</strong><br/>Understand the business, the people, and the thing that makes this problem different.</p></div><div><span>02</span><p><strong>Find the angle.</strong><br/>Create a clear creative direction before adding complexity or decoration.</p></div><div><span>03</span><p><strong>Build with care.</strong><br/>Make it responsive, accessible, fast, and ready to do its job in the real world.</p></div></div></div></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-eyebrow"><span>05 / YOUR MOVE</span><span>GOOD THINGS START SOMEWHERE</span></div>
        <div className="contact-main"><p className="contact-kicker"><span className="status-dot"/> GOT A GOOD ONE?</p><h2>Let's make<br/><span>it matter.</span></h2><a className="contact-cta" href="mailto:hello@bytebuilt.studio?subject=Let's%20build%20something"><span>Tell us what you're thinking</span><ArrowUpRight size={24}/></a></div>
        <div className="contact-bottom"><p>No 80-slide pitch deck. No awkward sales call.<br/>Just a good conversation about what could be.</p><div className="contact-details"><span>EMAIL</span><a href="mailto:hello@bytebuilt.studio">hello@bytebuilt.studio</a></div><div className="contact-details"><span>BASED IN</span><p>Tirana, Albania<br/>Available everywhere</p></div></div>
      </section>

      <footer className="site-footer"><a className="wordmark footer-wordmark" href="#top">bytebuilt<span>®</span></a><span>INDEPENDENT DIGITAL STUDIO</span><a href="#top" className="back-top">BACK TO TOP ↑</a><span>© BYTEBUILT 2026</span></footer>
    </main>
  );
}
