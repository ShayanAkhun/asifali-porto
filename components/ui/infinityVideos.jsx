"use client";

import React from "react";
import { InfiniteMovingVideo } from "./infinityvideo";
export function InfiniteMovingVideos() {
  return (
      <InfiniteMovingVideo
        items={VideoLinks}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
  );
}

const VideoLinks = [
  {
    url:
      "https://www.youtube.com/embed/7izs5orYtXo",
    },
  {
    url:
      "https://www.youtube.com/embed/Svh4nKmNSj0",
    
  },
  {
    url:
      "https://www.youtube.com/embed/CfN8nGhtOxM",
    },
  {
    url:
      "https://www.youtube.com/embed/hdBI2gvVxzM",
    },
  {
    url : 'https://www.youtube.com/embed/PMQwJqHSKqw'
  },
  {
    url : 'https://www.youtube.com/embed/-uaVPnZNYPM'
  }
];
