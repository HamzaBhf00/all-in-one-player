import React, { useState } from 'react';
import VideoForm from './components/videoForm';
import VideoPlayer from './components/videoPlayer';
import './App.css';

function App() {
    const [videoUrl, setVideoUrl,] = useState('');

    const handleFormSubmit = (url) => {
        setVideoUrl(url);
    };

    return (
        <div>
            <h1>All In One Player</h1>
            <p>Test your MP4, Youtube, SoundCloud, Facebook, Vimeo, Mux, Twitch,
                Streamable, Wistia, DailyMotion, <br></br> Mixcloud, Vidyard,
                Kaltura, M3U8 & MPD urls with our faster player ⚡</p>
            <VideoForm onFormSubmit={handleFormSubmit} />
            {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
        </div>
    );
}

export default App;
