import Image from 'next/image';
import classes from '../styles/services.module.scss';

import imgCherry from '../assets/images/desktop/image-graphic-design.jpg';
import imgOrng from '../assets/images/desktop/image-photography.jpg';
import imgCherryM from '../assets/images/mobile/image-graphic-design.jpg';
import imgOrngM from '../assets/images/mobile/image-photography.jpg';

import { useMediaQuery } from 'react-responsive';

const Container = ({ img, title, details, left }) => (
    <div className={classes.container}>
        <div className={classes.imageContainer}>
            <Image className={classes.image} src={img} alt="IMG" />
        </div>

        <div className={[classes.textContents, left ? classes.left : classes.right].join(' ')}>
            <h2 className={classes.title}>{title}</h2>

            <p className={classes.details}>{details}</p>
        </div>
    </div>
);

const Services = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 920px)' });

    return (
        <div className={classes.services}>
            <div className={classes.containers}>
                <Container img={isMobile ? imgCherryM : imgCherry} left
                    title="Graphic design"
                    details="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
                />

                <Container img={isMobile ? imgOrngM : imgOrng}
                    title="Photography"
                    details="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                />
            </div>
            
        </div>
    )
}

export default Services
