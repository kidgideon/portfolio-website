import { useEffect, useState } from "react";
import boy from "../images/body.png";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="interface">
      <div className="navbar">
        <div className="section-one">
          <lord-icon
            src="https://cdn.lordicon.com/srupsmbe.json"
            trigger="loop"
            delay="2000"
            colors="primary:#62addc,secondary:#62addc"
            style={{ width: "40px", height: "40px" }}>
          </lord-icon>
          <span>Gideon</span><span style={{ color: "#62addc" }}>.Dev</span>
        </div>

        <div className="section-two">
          <div  onClick={toggleTheme} className="theme-toggle">
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.5"
                className="icon fade">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="1.5"
                className="icon fade">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </div>

          <a href="mailto:kofigideon065@gmail.com">
            <button>Contact</button>
          </a>
        </div>
      </div>

      <lord-icon className="prop1" src="https://cdn.lordicon.com/rpviwvwn.json"
        trigger="loop" delay="2000" stroke="light"
        state="hover-rotate-up-to-down"
        colors="primary:#62addc,secondary:#62addc">
      </lord-icon>

      <lord-icon className="prop2" src="https://cdn.lordicon.com/nfuackpv.json"
        trigger="loop" stroke="light" state="loop-spin"
        colors="primary:#62addc,secondary:#62addc">
      </lord-icon>

      <div className="intro-layout fade-in-up">
        <div className="into-img">
          <img src={boy} alt="me" />
          <div className="socials">
            <a href="https://github.com/kidgideon" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://linkedin.com/in/gideon-kofi-08158b2a9" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://wa.me/07046578294" target="_blank"><i className="fa-brands fa-square-whatsapp"></i></a>
            <a href="https://web.facebook.com/ebedaowei.gideon.kofi" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="./images/resume.pdf" download><i className="fa-solid fa-download"></i></a>
          </div>
        </div>

        <div className="intro fade-in-up">
          <h1>Kofi <span style={{ color: "#62addc" }}>Gideon</span></h1>
          <div className="intro-panel">
            <h3>
            I’m Gideon, a full-stack web developer focused on building fast, clean, and user-friendly web apps. I work with tools like React and Node.js to turn ideas into working products. Always learning, always building. Let’s create something awesome.
            </h3>
          </div>
        </div>
      </div>

      <div className="ski">
        <h2>skills</h2>
      </div>

      <div className="skills reveal">
        <div className="skill"><div className="icon"><i className="fa-brands fa-js"></i></div><p>javascript</p></div>
        <div className="skill"><div className="icon"><i className="fa-solid fa-fire"></i></div><p>firebase</p></div>
        <div className="skill"><div className="icon"><i className="fa-solid fa-database"></i></div><p>Mongo db</p></div>
        <div className="skill"><div className="icon"><i className="fa-brands fa-react"></i></div><p>React js</p></div>
      </div>

      <footer>
        &copy; 2025 Gideon.codes. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;