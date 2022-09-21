import React from 'react'
import Plyr from "plyr-react";
// import "plyr-react/plyr.css"

const videoSrc = {
    type: "video",
    sources: [
        {
            src: '/assets/media/video.mp4',
            type: 'video/mp4',
            size: 1080,
        }
    ],
    poster: '/assets/media/poster.jpeg',
};

const videoOptions = {
    autoplay: true,
}

export default function VideoPlayer() {
    return (
        <>
            <Plyr source={videoSrc} options={videoOptions}/>
        </>
    );
};
