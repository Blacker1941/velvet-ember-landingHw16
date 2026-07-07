import React, { useMemo } from "react";

export default function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 6,
        size: 3 + Math.random() * 4,
      })),
    []
  );

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="ember-particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}