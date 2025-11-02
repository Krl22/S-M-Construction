import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { SERVICES } from "@/data/services";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: SERVICES[0] ?? "",
    message: "",
  });

  const whatsappHref = () =>
    `https://wa.me/${SITE.phoneWhatsApp}?text=${encodeURIComponent(
      `Hello S&M Construction, I'm ${form.firstName} ${form.lastName}. I'm interested in ${form.interest}. ${
        form.message || "I would like a quote."
      }`
    )}`;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-semibold text-primary">Contact Us</h2>
      <p className="mt-2 text-muted-foreground">Send us a message — WhatsApp works best.</p>
      <form
        className="mt-8 grid gap-4 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(whatsappHref(), "_blank");
        }}
      >
        <input
          className="rounded-md border p-3"
          placeholder="First name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <input
          className="rounded-md border p-3"
          placeholder="Last name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        <input
          className="rounded-md border p-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="rounded-md border p-3"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <select
          className="col-span-2 rounded-md border p-3"
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <textarea
          className="col-span-2 min-h-28 rounded-md border p-3"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <div className="col-span-2 flex gap-3">
          <Button type="submit">
            Send via WhatsApp
          </Button>
        </div>
      </form>
      <div className="mt-8 rounded-lg border p-4 text-sm text-muted-foreground">
        Prefer email? Write to <a className="text-primary" href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>
    </section>
  );
}