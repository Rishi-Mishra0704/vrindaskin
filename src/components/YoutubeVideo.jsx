"use client";
import React, { useEffect } from "react";

const YouTubeVideo = () => {
  useEffect(() => {
    // Load the YouTube IFrame Player API
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    script.onload = () => {
      // Create a YouTube player when the API is ready
      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player("youtube-player", {
          videoId: "aIGY7fsT-NY",
          events: {
            onReady: (event) => {
              // Autoplay the video once it's ready
              event.target.playVideo();
            },
            onStateChange: (event) => {
              // If the video ends, replay it
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(0); // Seek to the beginning of the video
                event.target.playVideo();
              }
            },
          },
        });
      };
    };

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="youtube-player"
      className="w-full md:w-[600px] lg:w-[700px] md:h-96 lg:h-120"
    ></div>
  );
};

export default YouTubeVideo;
