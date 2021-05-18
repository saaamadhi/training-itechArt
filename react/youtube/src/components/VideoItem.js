import React from 'react';
import '../styles/video-item.css'

export default function VideoItem({title, channelTitle, description, preview}) {
    return (
        <div className="video-list__item">
            <img src={preview.url} alt={`${title} prewiew`} width={preview.width} height={preview.height}/>
            <p>{title}</p>
            <p>{channelTitle}</p>
            <p>{description}</p>
        </div>
    )
}
