import React from "react";
import { Flame } from "lucide-react";

export default function FinalCta({ onCta }) {
  return (
    <section className="section final-cta">
      <div className="container center-col">
        <Flame size={28} strokeWidth={1.5} />

        <h2 className="section-title center">
          فرصت محدود است
        </h2>

        <p className="muted center">
          ۵۰۰ عدد. یک فصل. بدون تولید مجدد.
        </p>

        <button className="btn btn-primary" onClick={onCta}>
          همین حالا رزرو کنید
        </button>

        <span className="tiny muted">
          ارسال به سراسر ایران
        </span>
      </div>
    </section>
  );
}