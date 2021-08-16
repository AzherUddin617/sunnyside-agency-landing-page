/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from '../styles/hero.module.scss';
import Logo from './sections/ui/Logo';
import ArrowDown from '../assets/images/icon-arrow-down.svg';
import MenuLogo from '../assets/images/icon-hamburger.svg';

const navItems = [ 'About', 'Services', 'Projects' ];

const NavItems = ()=> (
    <ul className={classes.list}>
        {navItems.map((item, i)=> (
            <li key={i} className={classes.item}>{item}</li>
        ))}
        <li className={[classes.item, classes.contact].join(' ')}>Contact</li>
    </ul>
)

const NavMenu = ({ exClasses })=> (
    <div className={[classes.navMenu, exClasses].join(' ')}>
        <NavItems />
    </div>
);

const Hero = () => {
    const [showNav, setShowNav] = useState(false);
    const [hide, setHide] = useState(true);

    useEffect(()=> {
        let timeout;
        if (!showNav) {
            timeout = setTimeout(()=> setHide(true), 400);
        }

        return ()=> clearTimeout(timeout);
    }, [showNav]);

    const showNavHandler = ()=> {
        if (!showNav) {
            setShowNav(true);
            setHide(false);
        } else {
            setShowNav(false);
        }
    }

    const exClasses = [showNav ? classes.show:'', hide ? classes.hide:''].join(' ');

    return (
        <div className={classes.hero}>
            <header className={[classes.header, 'container'].join(' ')}>
                <Logo />

                <nav className={classes.nav}>
                    <NavItems />

                    <button className={classes.menuBtn} onClick={showNavHandler}>
                        <Image src={MenuLogo} alt="=" width={20} height={20} />
                    </button>
                </nav>
            </header>

            <div className={[classes.contents, 'container'].join(' ')}>
                <h1 className={classes.title}>We are creatives</h1>
                <img src={ArrowDown.src} alt="A" className={classes.arrowDown} />

                <NavMenu exClasses={exClasses} />
            </div>

            <div className={[classes.backdrop, exClasses].join(' ')} onClick={()=> showNav ? setShowNav(false) : null}></div>

        </div>
    )
}

export default Hero;
