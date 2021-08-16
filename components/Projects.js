/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import classes from '../styles/projects.module.scss';

import p1 from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import p2 from '../assets/images/desktop/image-gallery-orange.jpg';
import p3 from '../assets/images/desktop/image-gallery-cone.jpg';
import p4 from '../assets/images/desktop/image-gallery-sugarcubes.jpg';

const projects = [ p1, p2, p3, p4 ];

const Projects = () => {
    return (
        <div className={classes.projects}>
            {projects.map((img, i)=> (
                <div className={classes.project} key={i}>
                    <img className={classes.img} src={img.src} alt="P" />
                </div>
            ))}
        </div>
    )
}

export default Projects;
