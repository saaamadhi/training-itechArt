import React from 'react';
import VideoItem from './VideoItem';
import {useSelector} from 'react-redux';
import '../styles/video-list.css';

export default function VideoList() {
    const data = useSelector(state => state.rootReducer);
    return (
        <div className="video-list">
            {data.map((item) => (
                    <VideoItem
                        key={item.id.videoId} 
                        title={item.snippet.title}
                        channelTitle={item.snippet.channelTitle}
                        description={item.snippet.description}
                        preview={item.snippet.thumbnails.default}
                    />
                ))
            }
        </div>
    )
}
