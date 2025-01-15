import React from "react";

function Loading({ count }) {
  return (
    <div className="skeleton">
      {Array(count)
        .fill()
        .map((_, inx) => (
          <div key={inx} className="skeleton_item">
            <div className="skeleton_image skeleton_animation"></div>
            <div className="skeleton_title skeleton_animation"></div>
            <div className="skeleton_title skeleton_animation"></div>
          </div>
        ))}
    </div>
  );
}

export default Loading;
