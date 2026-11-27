"use client";

import { useState } from "react";

export default function StitchedButton() {
  const [stitched, setStitched] = useState(false);

  console.log("StitchedButton rendered:", stitched ? "Stitched" : "Not stitched");

  return (
    <div className="stitch-box">
      <div className="status-row">
        <span
          className={
            stitched ? "status-pill status-done" : "status-pill status-pending"
          }
        >
          <span className="status-dot" />
          {stitched ? "Stitched" : "Not stitched"}
        </span>
      </div>

      <button
        type="button"
        className="stitch-btn"
        onClick={() => setStitched(true)}
        disabled={stitched}
      >
        Stitched
      </button>
    </div>
  );
}
