
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
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
      <Services />

      <section className="section__container client__container" id="client">
        <p className="section__subheader">Testimonials</p>
        <h2 className="section__header">What Our Clients Say About Us</h2>

        <div className="swiper">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="client__card">
                <img src="assets/image/client-1.jpg" alt="client" />
                <div>
                  <p>
                    They transformed our online presence with their SEO and
                    content marketing services. Our website now ranks higher in
                    search results, and the quality of leads has improved
                    substantially. I highly recommend their digital marketing
                    expertise.
                  </p>
                  <h4>John Miller <span>CEO, Corporation</span></h4>
                  <div className="client__ratings">
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-half-fill"></i></span>
                    <span><i className="ri-star-line"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <img src="assets/image/client-2.jpg" alt="client" />
                <div>
                  <p>
                    Working with them has been a game-changer for our business.
                    Their web development expertise helped us create a sleek and
                    responsive website that has significantly increased our online
                    sales. Their dedication and innovative solutions truly set
                    them apart.
                  </p>
                  <h4>Sarah Thompson <span>Marketing Director</span></h4>
                  <div className="client__ratings">
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-line"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <img src="./assets/image/client-3.jpg" alt="client" />
                <div>
                  <p>
                    Our digital marketing strategy needed a revamp, and they
                    delivered outstanding results. Their team's creative approach
                    to PPC campaigns and social media advertising has generated a
                    significant increase in our website traffic and conversions.
                  </p>
                  <h4>David Peterson <span>Marketing Manager</span></h4>
                  <div className="client__ratings">
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-half-fill"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <img src="assets/image/client-4.jpg" alt="client" />
                <div>
                  <p>
                    The mobile app they developed for our company exceeded our
                    expectations. Not only is it user-friendly, but it also helped
                    us connect with our customers on a whole new level. Their
                    attention to detail and commitment to delivering on time were
                    exceptional.
                  </p>
                  <h4>Harrison Rogers <span>Product Manager</span></h4>
                  <div className="client__ratings">
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      <section className="section__container blog__container" id="blog">
        <p className="section__subheader">Blog Posts</p>
        <h2 className="section__header">I Love To Write Articles</h2>
        <div className="blog__grid">
          <div className="blog__card">
            <img src="assets/image/blog-1.jpg" alt="blog" />
            <p>Case Study</p>
            <h4>Turning Clicks into Conversions with PPC</h4>
            <Link to="#">Read More</Link>
          </div>
          <div className="blog__card">
            <img src="assets/image/blog-2.jpg" alt="blog" />
            <p>Educational/How-To</p>
            <h4>The Ultimate Guide to Website Accessibility</h4>
            <Link to="#">Read More</Link>
          </div>
          <div className="blog__card">
            <img src="assets/image/blog-3.jpg" alt="blog" />
            <p>Trend Analysis</p>
            <h4>2023 Web Design Trends: What's In and What's Out</h4>
            <Link to="#">Read More</Link>
          </div>
        </div>
      </section>
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
