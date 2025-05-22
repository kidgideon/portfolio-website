import { useEffect } from "react";
import boy from "../images/body.png"

const Home = () => {
    useEffect(() => {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);


     return(
     <div className="interface">
    <div className="navbar">
        <div className="section-one">
            <lord-icon
    src="https://cdn.lordicon.com/srupsmbe.json"
    trigger="loop"
    delay="2000"
    colors="primary:#62addc,secondary:#62addc"
    style={{width:"40px", height:"40px"}}>
</lord-icon>
            <span>Gideon</span><span style={{color:"#62addc"}}>.Dev</span>
        </div>

        <div className="section-two">
            <button>about</button>
            <button>skils</button>
            <button>hire me</button>
        </div>
    </div>

<lord-icon
  className="prop1"
  src="https://cdn.lordicon.com/rpviwvwn.json"
  trigger="loop"
  delay="2000"
  stroke="light"
  state="hover-rotate-up-to-down"
  colors="primary:#62addc,secondary:#62addc">
</lord-icon>

<lord-icon
  className="prop2"
  src="https://cdn.lordicon.com/nfuackpv.json"
  trigger="loop"
  delay="2000"
  stroke="light"
  colors="primary:#62addc,secondary:#62addc">
</lord-icon>


     <div className="intro-layout fade-in-up">
          <div className="into-img">
 <img src={boy} alt="" />
   <div className="socials">
<i class="fa-brands fa-github"></i>
<i class="fa-brands fa-linkedin"></i>
<i class="fa-brands fa-square-whatsapp"></i>
<i class="fa-brands fa-facebook"></i>
<i class="fa-solid fa-download"></i>
   </div>
          </div>
        <div className="intro fade-in-up">
            <h1>Kofi <span style={{color: "#62addc"}}>Gideon</span></h1>

            <div className="intro-panel">
  <lord-icon
    className="abs"
    src="https://cdn.lordicon.com/ailnzwyn.json"
    trigger="loop"
    stroke="light"
    delay="2000"
    state="morph-code"
    colors="primary:#62addc,secondary:#62addc">
    
</lord-icon>
                <p>
                    full-stack web developer who builds fast, scalable, and user-focused digital experiences. I combine clean code with strategic thinking to craft websites and web apps that not only look great but drive real results. From backend logic to frontend finesse, I deliver full-package solutions that scale with your goals.
                </p>
            </div>
        </div>
     </div>

      <div className="ski">
<h2 >skills</h2>
      </div>
 
      <div className="skills reveal">
         
        <div className="skill">
             <div className="icon">
<i class="fa-brands fa-js"></i>
             </div>
<p>javascript</p>
        </div>

        <div  className="skill">

            <div className="icon">
    <i class="fa-solid fa-fire"></i>
            </div>
            <p>firebase</p>
        </div>

        <div  className="skill">
             <div className="icon">
  <i class="fa-solid fa-database"></i>
             </div>
            <p>Mongo db</p>
        </div>

        <div  className="skill">
            <div className="icon">
     <i class="fa-brands fa-react"></i>
            </div>
            <p>React js</p>
        </div>
      </div>

      <footer >
  &copy; 2025 Gideon.codes. All rights reserved.
</footer>
     </div>)
}

export default Home