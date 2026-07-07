import React from "react";

export default function Benefits({ items }) {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow center">پیشنهاد ویژه</span>
        <h2 className="section-title center">
          با ثبت‌نام چه دریافت می‌کنید
        </h2>

        <div className="benefits-grid">
          {items.map(({ Icon, title, desc }) => (
            <div className="benefit-card" key={title}>
              <div className="benefit-icon">
                <Icon size={22} strokeWidth={1.75} />
              </div>

              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}