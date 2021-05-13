import React from 'react';
import "./progressbar.css";

export default function ProgressBar({value}) {
    if(value === '') value ='0';
    const size = 120;
    const strokeWidth = 4;
    const radius = size / 2 - strokeWidth * 2;
    const lenOfCircle = 2 * Math.PI * radius;
    const offset = lenOfCircle - value / 100 * lenOfCircle;
    
    return (
        <>
            <svg className="circle-container" style={{width: `${size}px`, height: `${size}px`}}>
                <circle className="circleBack"  
                    strokeWidth={strokeWidth}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    />
                <circle className="circleFront"  
                    strokeWidth={strokeWidth}
                    strokeDashoffset={offset}
                    strokeDasharray={`${lenOfCircle} ${lenOfCircle}`}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    />
                    <text 
                    x="40%"
                    y="55%"
                    >{value}%</text>
            </svg>
        </>
    )
}
