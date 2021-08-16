import Image from 'next/image';
import classes from '../styles/about.module.scss';

import imgEgg from '../assets/images/desktop/image-transform.jpg';
import imgStand from '../assets/images/desktop/image-stand-out.jpg';
import imgEggM from '../assets/images/mobile/image-transform.jpg';
import imgStandM from '../assets/images/mobile/image-stand-out.jpg';

import { useMediaQuery } from 'react-responsive';

const TextContainer = ({ title, details }) => (
    <div className={[classes.container, classes.textContainer].join(' ')}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.details}>{details}</p>
        <a href="#" className={classes.link}>Learn more</a>
    </div>
);

const ImageContainer = ({ src }) => (
    <div className={[classes.container, classes.imageContainer].join(' ')}>
        <Image src={src} alt="IMG" className={classes.img} />
    </div>
);

function About() {
    const isMobile = useMediaQuery({ query: '(max-width: 865px)' });

    return (
        <div className={classes.about}>
            <div className={classes.containers}>
                <TextContainer 
                    title="Transform your brand"
                    details="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                />
                <ImageContainer src={isMobile ? imgEggM : imgEgg} />
            </div>

            <div className={[classes.containers, classes.bottom].join(' ')}>
                <ImageContainer src={isMobile ? imgStandM : imgStand} />
                <TextContainer 
                    title="Stand out to the right audience"
                    details="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
                />
            </div>
        </div>
    )
}

export default About;
