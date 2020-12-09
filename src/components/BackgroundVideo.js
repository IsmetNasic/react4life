import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "/videos/video.mp4"
    return (
        <div className={classes.Container} >
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