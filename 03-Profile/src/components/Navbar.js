import React, { useState } from 'react';
import { Link    } from "react-router-dom"
export const Navbar = () => {
    const [isOpen, setisOpen] = useState(true)
    return (
        <header className="header">
            <div className="header__socials">
                <Link to="#"><i className="ri-mail-fill"></i></Link>
                <Link to={"https://github.com/osamaSale"}><i className="ri-github-fill"></i></Link>
                <Link to="#"><i className="ri-linkedin-fill"></i></Link>
            </div>
            <nav>
                <div className="nav__bar">
                    <div className="nav__header">
                        <div className="nav__logo">
                            <Link to="#">O<span>.</span></Link>
                        </div>
                        {isOpen ? <div className="nav__menu__btn" id="menu-btn" onClick={() =>
                            setisOpen(false)}>
                            <span><i className={isOpen ? "ri-menu-3-line" : "ri-close-line"}></i></span>
                        </div> : <div className="nav__menu__btn" id="menu-btn" onClick={() =>
                            setisOpen(true)}>
                            <span><i className={isOpen ? "ri-menu-3-line" : "ri-close-line"}></i></span>
                        </div>}
                    </div>
                    <ul className={isOpen ? "nav__links" : "nav__links open"} id="nav-links">
                        <li className="link"><Link to="#home">Home</Link></li>
                        <li className="link"><Link to="#about">About</Link></li>
                        <li className="link"><Link to="#project">Projects</Link></li>
                        <li className="link"><Link to="#service">Services</Link></li>
                        <li className="link"><Link to="#client">Clients</Link></li>
                        <li className="link"><Link to="#blog">Blog</Link></li>
                        <li className="link btn"><Link to="#contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="section__container header__container" id="home">
                <div className="header__image">
                    <img src="assets/image/header.png" alt="header" 
                   
                    />
                </div>
                <div className="header__content">
                    <h4>Full-Stack Developer</h4>
                    <h1>Hi, I Am Osama Salem. <br />
                        This Is My Favotite Work!</h1>
                    <p>
                        I am a full stack developer, analytical and hardworking who enjoys  solving problems and coming up with interesting insights about what I  do. Being a fast-learner is one of my core skills that I'm proud of.
                    </p>
                    <button className="btn">Hire Me Now</button>
                </div>
            </div>
        </header>
    );
}

