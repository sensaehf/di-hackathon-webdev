import { useRef } from 'react';

interface VideoPlayerProps {
  videoSource: string; // Path to the video file
  captionSource?: string;  // Optional, for adding captions
  audioDescriptionSource?: string;  // Optional, for adding audio description
}

export default function VideoPlayer({ videoSource, captionSource, audioDescriptionSource }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement | null>(null);

  return (
    <div>
      <video
        ref={ref}
        controls
        style={{ width: '100%', height: '100%' }}
        aria-labelledby="video-player"
        aria-describedby="video-description"
        role="video"
      >
        {/* Video source (e.g., .mp4 file) */}
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.

        {/* Load captions if provided */}
        {captionSource && (
          <track
            kind="subtitles"
            src={captionSource}
            srcLang="en"
            label="English captions"
            default
          />
        )}

        {/* Load audio description if provided */}
        {audioDescriptionSource && (
          <track
            kind="descriptions"
            src={audioDescriptionSource}
            srcLang="en"
            label="Audio Description"
          />
        )}

        <p id="video-description">
          This video includes captions and audio descriptions for accessibility.
        </p>
      </video>
    </div>
  );
}
