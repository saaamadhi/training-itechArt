import React from 'react';
import '../styles/video-item.css';

export default function VideoItem({title, channelTitle, description, preview}) {
    return (
        <div className="video-list__item">
            <div className="item__container">
                <img src={preview.url} alt={`${title} prewiew`} width={preview.width} height={preview.height}/>
                <div className="container__titles">
                    <p className="video-title">{title}</p>
                    <p className="channel-title">{channelTitle}</p>
                </div>
            </div>
            <p className="item__desc-title">Description:</p>
            <p className="item__desc">{description}</p>
        </div>
    )
}
