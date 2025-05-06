import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function LivePlayer() {
  const ref = useRef<HTMLVideoElement | null>(null);  // This initializes the ref with `null`


  useEffect(() => {
    const hls = new Hls();
    if (ref.current && Hls.isSupported()) {
      hls.loadSource('https://vod.althingi.is/althingi2019/tracks-v1a1/rewind-21600.m3u8');
      hls.attachMedia(ref.current);
    }
    return () => hls.destroy();
  }, []);

  return <video ref={ref} autoPlay muted controls style={{ width: '100%', maxHeight: '360px', objectFit: 'cover' }}/>;
}
