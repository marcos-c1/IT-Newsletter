import './Navbar.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const Navbar = () => {

    const [dateNow] = useState(new Date());

    const switchMode = () => {
        const body = document.querySelector("body");
        const moon = document.querySelector("#moon");
        const sun = document.querySelector("#sun");
        const bottomLine = document.querySelector(".bottomLine");
        const menu = document.querySelector(".menu");
        const title = document.querySelector(".menu__ul__page-title")
        const lastNews = document.querySelector(".homescreen__title");
        const news = document.querySelector(".news");
        
        if (body.style.background === "var(--offwhite)") {
            moon.style.display = "none";
            sun.style.display = "block";
            body.style.background = "var(--black)";
            body.style.color = "var(--offwhite)";
            title.style.color = "var(--offwhite)";
            lastNews.style.color = "var(--offwhite)";
            bottomLine.style.borderBottom = "1px solid var(--offwhite)";
            menu.style.borderBottom = "1px solid var(--offwhite)";
        } else {    
            body.style.background = "var(--offwhite)";
            title.style.color = "var(--black)";
            lastNews.style.color = "var(--black)";
            body.style.color = "var(--black)";
            bottomLine.style.borderBottom = "1px solid var(--black)";
            menu.style.borderBottom = "1px solid var(--black)";
            sun.style.display = "none";
            moon.style.display = "block";
        };
    }

    const githubRedirect = () => {
        window.location.href = "https://github.com/marcos-c1";
    }
   
    return (
        <div className="bottomLine">
            <div className="menu">
                <ul className="menu__ul__social-media">
                    <li><i className="fab fa-github" onClick={githubRedirect}></i></li>
                    <li><i className="fas fa-envelope"></i></li>
                    <li><i className="fab fa-linkedin"></i></li>
                </ul>
                <ul className="menu__ul">
                    <li><Link to='/'><h1 className="menu__ul__page-title">Newsletter</h1></Link></li>
                    <li className="dateHour" style={{paddingLeft: "15px"}}>{dateNow.toDateString()}</li>
                </ul>
                
                <ul className="menu__ul__mode">
                    <li><i className="far fa-sun" id="sun" onClick={switchMode}></i></li>
                    <li><i className="fas fa-moon" id="moon" onClick={switchMode}></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
