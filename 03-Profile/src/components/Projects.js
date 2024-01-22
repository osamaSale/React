import React, { useEffect } from 'react';

export const Projects = () => {
    useEffect(() => {
        const script = document.createElement("script")
        script.innerHTML = `
        var swiper = new Swiper(".blog-slider", {
          spaceBetween: 30,
          effect: "fade",
          loop: true,
          mousewheel: {
            invert: false,
          },
          // autoHeight: true,
          pagination: {
            el: ".blog-slider__pagination",
            clickable: true,
          },
        })`
        document.body.appendChild(script)
      }, [])
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
            <img src="assets/project-1.jpg" alt="project" />
          </div>
          <div className="project__card mix game">
            <img src="assets/project-2.jpg" alt="project" />
          </div>
          <div className="project__card mix design">
            <img src="assets/project-3.jpg" alt="project" />
          </div>
          <div className="project__card mix web">
            <img src="assets/project-4.jpg" alt="project" />
          </div>
          <div className="project__card mix game">
            <img src="assets/project-5.jpg" alt="project" />
          </div>
          <div className="project__card mix design">
            <img src="assets/project-6.jpg" alt="project" />
          </div>
        </div>
      </section>
    );
}

