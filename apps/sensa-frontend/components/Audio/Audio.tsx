import React from 'react'

interface AudioPlayerProps {
  src?: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  return (
    <audio controls>
      <source src={src ?? 'https://butar.althingi.is/raedur/raddsynishorn/128/13185810.mp3'} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}

export default AudioPlayer
