import React from "react";
import Particles from "./Particles";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  onCta,
}) {
  return (
    <section className="hero section">
      <Particles />

      <div className="container hero-inner">
        <span className="eyebrow">{eyebrow}</span>

        <h1 className="hero-title">
          {title}
        </h1>

        <p className="hero-subtitle">
          {subtitle}
        </p>

        <button
          className="btn btn-primary"
          onClick={onCta}
        >
          {ctaLabel}
        </button>
      </div>

      <div className="hero-glow" />
    </section>
  );
}