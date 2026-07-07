export default function VelvetEmberLanding() {
  function scrollToForm() {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="ve-root" dir="rtl" lang="fa">

      <Hero
        eyebrow="کالکشن شبانه ۲۰۲۶"
        title="عطری که در تاریکی نفس می‌کشد"
        subtitle="VELVET EMBER، رایحه‌ای برای شب‌هایی که به روشنایی نیازی ندارند؛ ترکیبی از بنفش مخمل و اخگرهای سرخ."
        ctaLabel="مشاهده‌ی کالکشن"
        onCta={scrollToForm}
      />
      <FragranceNotes />
      <Benefits items={BENEFITS} />
      <SignupForm id="signup" />
      <PressLogos logos={PRESS} />
      <Testimonials items={TESTIMONIALS} />
      <FinalCta onCta={scrollToForm} />

      <footer className="ve-footer">
        <div>VELVET EMBER — ساخته‌شده برای تمرین لندینگ‌پیج با React</div>
      </footer>
    </div>
  );
}