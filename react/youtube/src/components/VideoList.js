import React from 'react';
import VideoItem from './VideoItem';
import {useSelector} from 'react-redux';
import '../styles/video-list.css';

export default function VideoList() {
    let arrItems = [];
    const data = useSelector(state => state.searchResults);
    data.length === 0 ? arrItems = data : arrItems = [...data.payload.arr];
    return (
        <div className="video-list">
            {arrItems.map((item) => (
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
