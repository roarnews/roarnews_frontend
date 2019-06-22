import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import logo from './static/RoarNews.png';
import './App.css';
import videoList from './video-list'

function App() {
  const _getVideoId = videoList => {
    const length = videoList.length;
    return videoList[Math.floor(Math.random() * length)]
  }
  const getVideoId = (preVideoId, videoList) => {

    let videoId = _getVideoId(videoList)
    console.log(videoId)
    while (preVideoId === videoId) {
      videoId = _getVideoId(videoList)
    }
    return videoId;
  }

  const [playEnd, setPlayEnd] = useState(false);
  const [videoId, setVideoId] = useState(_getVideoId(videoList));


  const opts = {
    height: '315',
    width: '560',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  const onEnd = () => {
    setPlayEnd(true)
    setVideoId(getVideoId(videoId, videoList)) 
  }
  const onStart = () => {
    setPlayEnd(true)
  }
  console.log(videoId)
  return (
    <div className="App">
      <img src={logo} />
      <YouTube
        videoId={videoId}
        opts={opts}
        onEnd={onEnd}
        onStart={onStart}
      />
    </div>
  );
}

export default App;
