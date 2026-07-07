import React from "react";
import { NOTES } from "../data/landingData";

export default function FragranceNotes() {
  return (
    <section className="section notes-section">
      <div className="container">
        <span className="eyebrow center">ساختار رایحه</span>

        <h2 className="section-title center">
          هرم عطر
        </h2>

        <div className="notes">
          {NOTES.map((n, i) => (
            <div className="note-row" key={n.label}>
              <div className="note-label">
                <span className="note-name">{n.label}</span>
                <span className="note-items">{n.items}</span>
              </div>

              <div className="note-bar-track">
                <div
                  className="note-bar-fill"
                  style={{
                    width: `${n.width}%`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                />
              </div>

              <span className="note-duration">
                {n.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}