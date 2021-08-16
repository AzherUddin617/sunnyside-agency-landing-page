import classes from '../styles/clients.module.scss';
import Image from 'next/image';

import p1 from '../assets/images/image-emily.jpg';
import p2 from '../assets/images/image-thomas.jpg';
import p3 from '../assets/images/image-jennie.jpg';

const tData = [
    {
        img: p1,
        text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        name: 'Emily R.',
        passion: 'Marketing Director'
    },
    {
        img: p2,
        text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
        name: 'Thomas S.',
        passion: 'Chief Operating Officer'
    },
    {
        img: p3,
        text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        name: 'Jennie F.',
        passion: 'Business Owner'
    }
];

const Testimonial = ({ img, text, name, passion })=> (
    <div className={classes.testimonial}>
        <div className={classes.image} style={{ backgroundImage: `url(${img.src})` }}>
            {/* <Image src={img} alt="DP" /> */}
        </div>
        <p className={classes.text}>{text}</p>
        <h4 className={classes.name}>{name}</h4>
        <p className={classes.passion}>{passion}</p>
    </div>
);

const Clients = () => {
    return (
        <div className={classes.clients}>
            <div className={[classes.container, 'container'].join(' ')}>

                <h3 className={classes.title}>client testimonials</h3>

                <div className={classes.testimonials}>
                    {tData.map((testi, i)=> (
                        <Testimonial 
                            key={i}
                            img={testi.img}
                            text={testi.text}
                            name={testi.name}
                            passion={testi.passion}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Clients;
