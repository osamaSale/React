import React from 'react';
import { Link } from "react-router-dom"
export const Projects = () => {

  return (
    <section className="section__container project__container" id="project">

      <div className="project__header">
        <h2 className="section__header">Our Projects</h2>
        <div className="project__nav">
          <button
            className="btn project__btn mixitup-control-active"
            data-filter="all"
          >
            All
          </button>
          <button className="btn project__btn" data-filter=".web">Web Apps</button>
          <button className="btn project__btn" data-filter=".game">Games</button>
          <button className="btn project__btn" data-filter=".design">
            Designs
          </button>
        </div>
      </div>

      <div className="project__grid">


        <div className="project__card mix web">
          <Link to={"https://store-mobile12.netlify.app/"}>
            <img src="assets/image/mobile.webp" alt="project" />
          </Link>
        </div>
        <div className="project__card mix web">
          <img src="assets/image/chat.png" alt="project" />
        </div>
        <div className="project__card mix game">
          <img src="assets/image/project-2.jpg" alt="project" />
        </div>
        <div className="project__card mix design">
          <img src="assets/image/project-3.jpg" alt="project" />
        </div>
        <div className="project__card mix game">
          <img src="assets/image/project-5.jpg" alt="project" />
        </div>
        <div className="project__card mix design">
          <img src="assets/image/project-6.jpg" alt="project" />
        </div>
      </div>
    </section>
  );
}

