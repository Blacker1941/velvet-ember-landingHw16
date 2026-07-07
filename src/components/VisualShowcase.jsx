export default function VisualShowcase() {
  return (
    <section className="section visual-section">
      <div className="container visual-grid">

        <div className="visual-image">
          <div className="bottle-glow"></div>

          <div className="perfume-card">
            <div className="perfume-circle"></div>

            <h3>VELVET EMBER</h3>

            <span>Limited Edition 2026</span>
          </div>
        </div>

        <div className="visual-content">
          <span className="eyebrow">
            نسخه محدود
          </span>

          <h2 className="section-title">
            رایحه‌ای ساخته شده برای شب
          </h2>

          <p className="muted">
            ترکیبی از عود، زعفران، چرم و پاچولی که در کنار اخگرهای سرخ،
            عطری عمیق و ماندگار خلق می‌کند.
          </p>

          <ul className="visual-list">
            <li>✔ ماندگاری بیش از ۸ ساعت</li>
            <li>✔ مناسب مهمانی‌های شبانه</li>
            <li>✔ تنها ۵۰۰ عدد تولید می‌شود</li>
            <li>✔ طراحی شیشه اختصاصی</li>
          </ul>
        </div>

      </div>
    </section>
  );
}