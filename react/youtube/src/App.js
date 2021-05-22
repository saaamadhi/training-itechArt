import React from 'react';
import Search from './components/Search';
import VideoList from './components/VideoList';
import './styles/app.css';
import youtubeIcon from './img/youtube-icon.png';

export default function App() {
    return (
        <div className="app">
            <div className="logo">
                <img className="logo__icon" src={youtubeIcon} alt="Youtube icon"></img>
                <h2 className="logo__title">Youtube video search</h2>
            </div>
            <Search />
            <VideoList />
        </div>
    )
}
