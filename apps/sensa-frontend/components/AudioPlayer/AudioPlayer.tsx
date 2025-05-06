import { useRef } from 'react';

interface AudioPlayerProps {
  src: string;          // Path to the audio file
  title?: string;       // Optional title or label for accessibility
}

export default function AudioPlayer({ src, title = 'Audio Player' }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <p>{title}</p>
      <audio
        ref={audioRef}
        controls
        style={{ width: '100%' }}
        aria-label={title}
      >
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
