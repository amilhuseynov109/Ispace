import { useState } from "react";
import { stores } from "../data/stores";

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  comment: "",
  agree: false,
};

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field, value) {
    setForm({ ...form, [field]: value });
  }

  function validateForm() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your e-mail.";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid e-mail.";
    }

    if (!form.agree) {
      newErrors.agree = "Please accept the terms to continue.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(EMPTY_FORM);
    }
  }

  return (
    <div className="mx-auto max-w-page px-5 py-10">
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
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Name*"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand ${
                  errors.name ? "border-red-400" : "border-black/15"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Phone number*"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand ${
                  errors.phone ? "border-red-400" : "border-black/15"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="E-mail*"
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-brand ${
                  errors.email ? "border-red-400" : "border-black/15"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                value={form.comment}
                onChange={(e) => handleChange("comment", e.target.value)}
                placeholder="Write a comment"
                rows={4}
                className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-brand"
              />
            </div>

            <label className="flex items-start gap-2 text-sm text-subtle">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => handleChange("agree", e.target.checked)}
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