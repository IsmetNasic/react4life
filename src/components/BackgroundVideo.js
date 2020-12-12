import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './BackgroundVideo.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BackgroundVideo = () => {
    const videoSource = "/videos/video.mp4"

    useEffect(() =>{
        Aos.init({ duration: 50});
      }, []);
    return (
        <div data-aos='zoom-out-up' className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <img src="/images/fit4life.png" alt="logo" />
                    <h1>BUILD YOUR BODY</h1>
                    <p>Take care of your body. It's the only place you have to live.</p>
                    <Link to='/services'>
                    <button type="button">START NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo