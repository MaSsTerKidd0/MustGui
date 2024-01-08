import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const AudioVisualizer = ({ url, wavesurferRef }) => {
  const waveformRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "violet",
      progressColor: "purple",
      cursorColor: "navy",
      height: 50,
      barWidth: 3,
      width: 100,
      responsive: true,
    });

    wavesurferRef.current.load(url);
    wavesurferRef.current.on("ready", () => {});

    return () => wavesurferRef.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    wavesurferRef.current.playPause();
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <div
        id="waveform"
        ref={waveformRef}
        style={{ width: "100%", height: "50px" }}
      />
    </div>
  );
};

export default AudioVisualizer;
