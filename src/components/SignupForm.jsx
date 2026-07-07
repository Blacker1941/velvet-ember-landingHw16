import React, { useState } from "react";
import { Send, Check } from "lucide-react";

export default function SignupForm({ id }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const remaining = 214;
  const total = 500;

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email) return;

    setSubmitted(true);
  }

  return (
    <section className="section form-section" id={id}>
      <div className="container form-inner">
        <div className="form-copy">
          <span className="eyebrow">لیست انتظار</span>

          <h2 className="section-title">
            پیش از همه بو بکشید
          </h2>

          <p className="muted">
            جای خود را در کالکشن محدود ولوت امبر رزرو کنید. تنها {total} عدد
            تولید می‌شود.
          </p>

          <div className="scarcity">
            <div className="scarcity-track">
              <div
                className="scarcity-fill"
                style={{
                  width: `${(remaining / total) * 100}%`,
                }}
              />
            </div>

            <span>
              {remaining} از {total} جایگاه باقی مانده
            </span>
          </div>
        </div>

        <div className="form-card">
          {submitted ? (
            <div className="success-msg">
              <Check size={28} strokeWidth={2} />

              <h3>ثبت شد!</h3>

              <p>
                ایمیل تاییدیه برای {form.email} ارسال شد. کد تخفیف در راه است.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                نام

                <input
                  type="text"
                  placeholder="نام شما"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                ایمیل

                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />
              </label>

              <button type="submit" className="btn btn-primary full">
                <Send size={16} strokeWidth={2} />
                رزرو جایگاه من
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}