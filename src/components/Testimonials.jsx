import React from "react";
import { Star } from "lucide-react";

export default function Testimonials({ items }) {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow center">صدای مشتریان</span>

        <h2 className="section-title center">
          در تاریکی، رایحه‌شان را یافتند
        </h2>

        <div className="testimonial-grid">
          {items.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p>«{t.text}»</p>

              <span className="t-name">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}