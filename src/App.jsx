import Hero from "./components/Hero";
import FragranceNotes from "./components/FragranceNotes";
import Benefits from "./components/Benefits";
import SignupForm from "./components/SignupForm";
import PressLogos from "./components/PressLogos";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";
import VisualShowcase from "./components/VisualShowcase";

import {
  BENEFITS,
  PRESS,
  TESTIMONIALS,
} from "./data/landingData";

import "./styles/velvet.css";

export default function App() {
  function scrollToForm() {
    document
      .getElementById("signup")
      ?.scrollIntoView({ behavior: "smooth" });
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

      <VisualShowcase />

      <FragranceNotes />

      <Benefits items={BENEFITS} />

      <SignupForm id="signup" />

      <PressLogos logos={PRESS} />

      <Testimonials items={TESTIMONIALS} />

      <FinalCta onCta={scrollToForm} />

    </div>
  );
}