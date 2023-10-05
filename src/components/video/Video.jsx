import React, { useState } from 'react';
import '../home/Home.css';
import './video.css';

function Video() {
    // Sample video data (replace with your own data)
    const videos = [
      {
        title: 'We Built A $120,000 CARAVAN - Storm breaker.. Launch Video!!',
        description: 'Our first look at the most eco-friendly optioned caravan in the market. We offer more than just a great-looking caravan. Peak Performance and Efficiency.',
        videoId: 'a_KE1CVPT48?si=xmPrmqL9fsyB3OIr',
      },
      {
        title: 'Video 2',
        description: 'This is the description for Video 2.',
        videoId: 'VIDEO_ID_2',
      },
      {
        title: 'Video 3',
        description: 'This is the description for Video 3.',
        videoId: 'VIDEO_ID_3',
      },
      {
        title: 'Video 4',
        description: 'This is the description for Video 3.',
        videoId: 'VIDEO_ID_4',
      },
      {
        title: 'Video 5',
        description: 'This is the description for Video 3.',
        videoId: 'VIDEO_ID_5',
      },
    ];
  
    return (
      <div className="container">
        <div className="component">
          <h1>Our Videos</h1>
      <div className="video-gallery">
        <div className="video-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <iframe
                title="YouTube Video"
                width="300"
                height="169"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
    );
  };

export default Video