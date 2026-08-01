"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  function update(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and a message.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
    if (!emailOk) {
      setStatus("error");
      setErrorMsg("That email address doesn't look right.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus("sent");
      setValues(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Couldn't send that — try again in a moment.");
    }
  }

  return (
    <section id="contact-form" className="px-6 md:px-12">
      <Reveal className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <p className="eyebrow">Contact Form</p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-bone">Contact For Work</h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
          <Field label="Your Name">
            <input
              type="text"
              value={values.name}
              onChange={update("name")}
              placeholder="Enter your good name"
              autoComplete="name"
              className="field-input"
            />
          </Field>

          <Field label="Your E-mail">
            <input
              type="email"
              value={values.email}
              onChange={update("email")}
              placeholder="Enter the email"
              autoComplete="email"
              className="field-input"
            />
          </Field>

          <Field label="Your Phone">
            <input
              type="tel"
              value={values.phone}
              onChange={update("phone")}
              placeholder="Enter your phone no"
              autoComplete="tel"
              className="field-input"
            />
          </Field>

          <Field label="Message">
            <textarea
              value={values.message}
              onChange={update("message")}
              placeholder="Tell me about the project"
              rows={4}
              className="field-input resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={status === "sending"}
            data-cursor-hover
            className="group flex items-center gap-2 rounded-full bg-white py-3 pl-6 pr-2 text-sm font-semibold text-ink transition-opacity disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Request"}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white transition-transform group-hover:rotate-45">
              ↗
            </span>
          </button>

          <div aria-live="polite" className="min-h-[1.5rem] text-sm">
            {status === "sent" && (
              <p className="text-emerald-400">
                Thanks — your message is in. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && <p className="text-ember">{errorMsg}</p>}
          </div>
        </form>
      </Reveal>

      <style jsx>{`
        :global(.field-input) {
          width: 100%;
          background: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.6rem 0;
          color: #f3efe9;
          outline: none;
          transition: border-color 0.2s ease;
        }
        :global(.field-input::placeholder) {
          color: rgba(243, 239, 233, 0.35);
        }
        :global(.field-input:focus) {
          border-color: #ff5a1f;
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-bone">{label}</span>
      {children}
    </label>
  );
}
