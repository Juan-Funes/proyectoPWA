import React, { useState } from "react";
import audio from "../music/OjosColorSol.mp3";
export default function Reproducir() {
  const [item] = useState({
    id: 1,
  });
  const { id } = item;
  return (
    <audio className="centro-reproductor" key={id} controls>
      <source src={audio} type="audio/mpeg" />
    </audio>
  );
}
