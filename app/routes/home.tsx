import type { Route } from "./+types/home";
import pfp from "../static/img/pfp.webp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Archonssite" },
    { name: "description", content: "Archons' Site!" },
  ];
}

function Header() {
  return <div className="header">
    <img className="header-logo" src={pfp} />
    <a href="/" className="header-title header-item">Archons</a>

    <a href="#about" className="header-item">About</a>
    <a href="#projects" className="header-item">Projects</a>
    <a href="#contact" className="header-item">Contact</a>
  </div>
}

function Hero() {
  return (
    <div className="hero section" id="about">
      <div>
        <h1>Hi! I'm <b>Alex</b></h1>
        <h2>Full Stack Developer | CS @ University of Toronto</h2>
        <p>
        Hi! I'm Alex, an incoming Computer Science National Scholar at the University of Toronto.<br/><br/>
        I am interested in a variety of subjects, but at the moment I am mainly exploring:<br/>
        🌐 Front-end: Web Development: ReactJS, as well as HTML, CSS, and JS.<br/>
        💾 Back-end: NodeJS, Django, REST APIs, SQL.<br/>
        🔒 Cybersecurity: Reverse Engineering, Steganography<br/>
        </p>
        <div style={{ marginTop: "1em" }}><a className="btn btn-large" href="/resume.pdf">Resume</a></div>
      </div>
      <img className="pfp" src={pfp} />
      
    </div>
  )
}

function Projects() {
  return <div></div>
}

function Contact() {
  return <div></div>
}

function Footer() {
  return <footer className="footer">
    <p>Made with :3 by Alex</p>
    <p>Built with <a href="https://reactjs.org/">React</a></p>
  </footer>
}

export default function Home() {
  return (<div className="flex flex-col items-center">
    <Header />
    <Hero />
    <Projects />
    <Contact />
    <Footer />
  </div>)
}
