import React from "react";

export default function PressLogos({ logos }) {
  return (
    <section className="section press-section">
      <div className="container">
        <span className="eyebrow center">
          در نگاه رسانه‌ها
        </span>

        <div className="press-row">
          {logos.map((logo) => (
            <span className="press-logo" key={logo}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}