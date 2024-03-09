import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%'
        }}>
            <ReactPlayer
                url={videoUrl}
                controls
                light={true}
                config={{ file: { forceVideo: true } }}
            />
        </div>
    );
};

export default VideoPlayer;
