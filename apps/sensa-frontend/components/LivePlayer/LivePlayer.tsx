import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function HlsPlayer() {
  const ref = useRef();

  useEffect(() => {
    const hls = new Hls();
    if (ref.current && Hls.isSupported()) {
      hls.loadSource('https://vod.althingi.is/althingi2019/tracks-v1a1/rewind-21600.m3u8');
      hls.attachMedia(ref.current);
    }
    return () => hls.destroy();
  }, []);

  return <video ref={ref} autoPlay muted controls style={{ width: '100%', height: '100%' }} />;
}
