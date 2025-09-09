import React, { useRef, useEffect,useState } from "react";

const AudioPage = () => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1; // Set volume to 30%
    }
    console.log('audio')
  }, []);

  const musicPlay=()=>{
    if(!play){
    audioRef.current?.play()
    setPlay(true)
    }else{
      audioRef.current?.pause()
    setPlay(false)
    }
  }
  return (
   <>
   <audio ref={audioRef} loop >
      <source src="/sound/game-theme.mp3" type="audio/mpeg" />
    </audio>
    <button onClick={musicPlay} className="play-btn">{play?"🔇":"♫"
      }</button>

   </> 
  );
};
export default AudioPage