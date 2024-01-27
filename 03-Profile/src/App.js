
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
function App() {
  return (
    <div className="App">
      <div id={"Home"}>
        <Navbar />
      </div>
      <div id={"About"}>
        <About />
      </div>
      <div id={"Projects"}>
        <Projects />
      </div>
      <div id={"Services"}>
        <Services />
      </div>
      <div id={"Education"}>
        <Education />
      </div>
      <div id={"Skills"}>
        <Skills />
      </div>


     
      <section className="section__container contact__container" id="contact">
        <p className="section__subheader">Contact Us</p>
        <h2 className="section__header">Get In Touch</h2>
        <form action="/" className="contact__form">
          <div className="input__row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Description" />
          <button className="btn">Submit</button>
        </form>
      </section>
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <h5><Link to="#">Andarson</Link></h5>
            <p>
              I'm a dedicated web developer with a creative flair and a penchant
              for turning lines of code into captivating online experiences.
            </p>
            <div className="footer__socials">
              <Link to="#"><i className="ri-mail-fill"></i></Link>
              <Link to="#"><i className="ri-github-fill"></i></Link>
              <Link to="#"><i className="ri-linkedin-fill"></i></Link>
              <Link to="#"><i className="ri-twitter-fill"></i></Link>
              <Link to="#"><i className="ri-dribbble-line"></i></Link>
            </div>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <div className="footer__links">
              <Link to="#">Web Design</Link>
              <Link to="#">App Design</Link>
              <Link to="#">Photography</Link>
              <Link to="#">Videography</Link>
              <Link to="#">Web Development</Link>
            </div>
          </div>
          <div className="footer__col">
            <h4>Support</h4>
            <div className="footer__links">
              <Link to="#">Contact</Link>
              <Link to="#">My Blog</Link>
              <Link to="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © 2023 Web Design Mastery. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
