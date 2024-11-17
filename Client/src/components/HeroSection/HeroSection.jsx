import "./HeroSection.scss";
import React from "react";

export default function HeroSection({ videoUrl, poster }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        src={videoUrl || ""}
        poster={poster || ""}
        controls
      />
    </section>
  );
}
