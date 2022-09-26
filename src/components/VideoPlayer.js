import React from 'react'
import Plyr from "plyr-react";

export default function VideoPlayer({ videoSrc,videoOptions }) {
    return (
        <>
            <Plyr source={videoSrc} options={videoOptions}/>
        </>
    );
};
