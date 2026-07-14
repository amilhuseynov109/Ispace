import { useState } from "react";
import { stores } from "../data/stores";

const EMPTY = { name: "", phone: "", email: "", comment: "", agree: false };

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    if (!form.email.trim()) {
      next.email = "Please enter your e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid e-mail.";
    }
    if (!form.agree) next.agree = "Please accept the terms to continue.";
    return next;
  }

  function onSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setForm(EMPTY);
    }
  }

  return (
    <div className="mx-auto max-w-page px-5 py-10">
      {/* Contacts */}
      <h1 className="mb-8 text-3xl font-semibold text-ink">Contacts</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stores.map((store) => (
          <div key={store.name}>
            <h2 className="text-xl font-semibold text-ink">{store.name}</h2>
            <p className="mt-2 text-sm text-subtle">{store.address}</p>
            <div className="mt-1 text-sm text-subtle">
              {store.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Feedback form */}
      <div className="mx-auto mt-16 max-w-xl">
        <h2 className="mb-8 text-center text-2xl font-semibold text-ink">
          Feedback Form
        </h2>

        {submitted ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <p className="text-4xl">✅</p>
            <h3 className="mt-3 text-xl font-semibold text-ink">
              Your request has been received!
            </h3>
            <p className="mt-2 text-subtle">
              Thank you for contacting us. Our team will get back to you as soon
              as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-600"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => update("name", v)}
              error={errors.name}
              required
            />
            <Field
              label="Phone number"
              value={form.phone}
              onChange={(v) => update("phone", v)}
              error={errors.phone}
              required
            />
            <Field
              label="E-mail"
              type="email"
              value={form.email}
              onChange={(v) => update("email", v)}
              error={errors.email}
              required
            />

            <div>
              <textarea
                value={form.comment}
                onChange={(e) => update("comment", e.target.value)}
                placeholder="Write a comment"
                rows={4}
                className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-brand"
              />
            </div>

            <label className="flex items-start gap-2 text-sm text-subtle">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => update("agree", e.target.checked)}
                className="mt-1"
              />
              <span>
                I agree to the{" "}
                <span className="text-brand">processing of personal data,</span>{" "}
                and I understand the{" "}
                <span className="text-brand">Terms and Conditions of Use.</span>
              </span>
            </label>
            {errors.agree && (
              <p className="text-sm text-red-500">{errors.agree}</p>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="rounded-full bg-brand px-10 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, error, type = "text", required }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={required ? `${label}*` : label}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand ${
          error ? "border-red-400" : "border-black/15"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
