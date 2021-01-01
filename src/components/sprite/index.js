import React from "react";

function Sprite({ image, data }) {
  const { h, w, y, x } = data;

  return (
    <div
      style={{
        display: "inline-block",
        height: `${h}px`,
        width: `${w}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`,
      }}
    />
  );
}

export default Sprite;
