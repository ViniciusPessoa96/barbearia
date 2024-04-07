import React from 'react';
import '../../bootstrap/css/bootstrap.min.css';
import './body.css'
import Contentbox from './contentbox/contentbox';
import video from "../../imgs/4178111-hd_1920_1080_30fps.mp4";

function Body() {
    return (
        <main class='mainContent video-container'>
            <video id="video-bg" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <Contentbox></Contentbox>
        </main>
    );
}

export default Body;