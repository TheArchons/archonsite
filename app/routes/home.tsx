import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import pfp from "../static/img/pfp.webp";

import website from "../static/img/experience/website.webp";
import scandium from "../static/img/experience/scandium.webp";
import discard from "../static/img/experience/discard.webp";
import privathon from "../static/img/experience/privathon.webp";
import vex from "../static/img/experience/vex.webp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - Archons" },
    { name: "description", content: "Archons' Site!" },
  ];
}

function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={pfp} />
      <a href="/" className="header-title header-item">Archons</a>

      <a href="#about" className="header-item">About</a>
      <a href="#experience" className="header-item">Experience</a>
      <a href="https://blog.thearchons.xyz/" target="_blank" className="header-item">Blog</a>
    </div>
  );
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
        🌐 Front-end: Web Development: ReactJS + React Router, as well as HTML, CSS, and TypeScript.<br/>
        💾 Back-end: Node.js, Express.js, Django (Python), C++, SQL.<br/>
        🔒 Cybersecurity: Reverse Engineering, Steganography<br/>
        🤖 AI: LLMs (OpenAI API), Computer Vision.<br/>
        ☁️ Infrastructure: Cloudflare, Linux (Debian and RHEL), Nginx
        </p>
        <div style={{ marginTop: "1em" }}>
          <a href="/resume.pdf" target="_blank">Resume</a> | <a href="https://github.com/TheArchons" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/alexanderl01/" target="_blank">LinkedIn</a> | <a href="mailto:archons@thearchons.xyz" target="_blank">Email</a>
        </div>
      </div>
      <img className="pfp" src={pfp} />
      
    </div>
  )
}

function TimelineRow({ width, title, image, children, isLeft } : { width: number, title: string; image: string; children: React.ReactNode; isLeft?: boolean }) {
  return (
    <div className={`timeline-row timeline-row-${isLeft ? "left" : "right"}`}>
      <div className="timeline-item">
        <div className="timeline-item-panel">
          <div className="timeline-item-header">
            <h2>{title}</h2>
          </div>
          <div className="timeline-item-image">
            <img src={image} alt="Timeline Item" />
          </div>
          <div className="timeline-item-body">
            {children}
          </div>
        </div>
      </div>
      {
        width > 700 && (
          <>
            <div>
              <svg className="line" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="0" y2="100%" style={{ stroke: "white", strokeWidth: 2 }} />
              </svg>
            </div>
            <div className="timeline-item"></div>
          </>)
      }
    </div>
  )
}

function Technologies({ technologies } : { technologies: { name: string; link: string }[] }) {
  if (technologies.length === 0) return null;
  return (
    <div className="technologies">
      <h3>Built with</h3>
      <ul>
        {technologies.map((tech: { name: string; link: string }) => (
          <li key={tech.name}>
            <a target="_blank" href={tech.link} className="technology">{tech.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Experience() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  })

  return (
    <div className="section" id="experience">
      <div style={{ width: "100%", margin: "0 auto" }}>
        <h1>Experience</h1>
        <div className="timeline">
          { width > 700 && (
            <div className="timeline-row">
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <svg height="60" width="100" xmlns="http://www.w3.org/2000/svg">
                  <circle r="28" cx="50" cy="30" style={{ stroke: "white", strokeWidth: 4, fill: "#E63946" }} />
                </svg>
              </div>
            </div>
          )}

          <TimelineRow width={width} title="Archons Website" image={website} isLeft={false}>
            <h3>About</h3>
            <p>The website you are looking at right now!</p>

            <Technologies technologies={[
              { name: "React", link: "https://react.dev/" },
              { name: "React Router", link: "https://reactrouter.com/en/main" },
              { name: "Vite", link: "https://vitejs.dev/" },
              { name: "Nginx", link: "https://nginx.org/" },
              { name: "Cloudflare", link: "https://cloudflare.com/" }
            ]} />

            <div style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
              <a target="_blank" href="https://github.com/TheArchons/archonsite" className="btn">Github</a>
              <a target="_blank" href="https://thearchons.xyz" className="btn">View Website</a>
            </div>
          </TimelineRow>

          <TimelineRow width={width} title="Director of Technology @ XDHacks 2025" image={privathon} isLeft={true}>
            <h3>About</h3>
            <p>I am the Director of Technology for XDHacks 2025, the largest highschool hackathon in Vancouver. I am responsible for overseeing the technology team, which includes managing the website, Discord server, and other technical aspects of the hackathon. I lead the development of a new hackathon site and currently manage the hosting/deployment process.</p>

            <Technologies technologies={[
              { name: "Django", link: "https://www.djangoproject.com/" },
              { name: "Cloudflare", link: "https://cloudflare.com/" },
              { name: "Nginx", link: "https://nginx.org/" }
            ]} />

            <div style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
              <a target="_blank" href="https://privathon.xdhacks.org" className="btn">View Website</a>
            </div>
          </TimelineRow>

          <TimelineRow width={width} title="Scandium - AI code security" image={scandium} isLeft={false}>
            <h3>About</h3>
            <p>Scandium began as my hackathon project for UBC NWHacks 2025, which won the Canada Communications Security Establishment's sponsor prize. It is a Visual Studio Code extension that automatically scans for code vulnerabilities. It leverages local LLMs scan for vulnerabilities, while ensuring no secrets are exposed to the internet.</p>

            <Technologies technologies={[
              { name: "NodeJS", link: "https://nodejs.org/en" },
              { name: "Typescript", link: "https://www.typescriptlang.org/" },
              { name: "Ollama", link: "https://ollama.com/" },
              { name: "Visual Studio Code", link: "https://code.visualstudio.com/" }
            ]} />

            <div style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
              <a target="_blank" href="https://devpost.com/software/scandium" className="btn">Devpost</a>
              <a target="_blank" href="https://gitlab.waguri.software/nwhacks/scanner-ls" className="btn">Gitlab</a>
            </div>
          </TimelineRow>

          <TimelineRow width={width} title="Discard - AI-powered chat moderation bot" image={discard} isLeft={true}>
            <h3>About</h3>
            <p>Discard started as my hackathon project for XDHacks Safehacks 2024, where it took first place. It's a Discord bot that uses a custom computer vision model alongside large language models to automatically moderate chat messages.</p>
            
            <Technologies technologies={[
              { name: "Discord.js", link: "https://discord.js.org/" },
              { name: "Django", link: "https://www.djangoproject.com/" },
              { name: "NodeJS", link: "https://nodejs.org/en" },
              { name: "Groq", link: "https://groq.com/" },
              { name: "OpenAI", link: "https://openai.com/" },
              { name: "yolov8", link: "https://yolov8.com/" }
            ]} />

            <div style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
              <a target="_blank" href="https://devpost.com/software/discard-1qctd0" className="btn">Devpost</a>
              <a target="_blank" href="https://discard.thearchons.xyz" className="btn">View Project</a>
            </div>
          </TimelineRow>

          <TimelineRow width={width} title="VEX Robotics Tournament Management Software" image={vex} isLeft={false}>
            <h3>About</h3>
            <p>VEX Robotics Tournament Management Software is a web application designed to streamline the organization and management of VEX Robotics competitions. It automated leaderboards, scorekeeping, team selection. The software has been used in various competitions and with hundreds of users.</p>

            <Technologies technologies={[
              { name: "Django", link: "https://www.djangoproject.com/" },
              { name: "Cloudflare", link: "https://cloudflare.com/" },
              { name: "Nginx", link: "https://nginx.org/" }
            ]} />

            <div style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
              <a target="_blank" href="https://github.com/vex-tournament/vex_tournament" className="btn">Github</a>
            </div>
          </TimelineRow>
        </div>
      </div>
    </div>
  )
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
    <Experience />
    <Footer />
  </div>)
}
