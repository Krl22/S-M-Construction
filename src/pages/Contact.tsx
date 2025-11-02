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
    contactMethod: "",
    interest: "",
    message: "",
  });
  const requireEmail =
    form.contactMethod === "email" || form.contactMethod === "both";
  const requirePhone =
    form.contactMethod === "phone" || form.contactMethod === "both";

  const whatsappHref = () =>
    `https://wa.me/${SITE.phoneWhatsApp}?text=${encodeURIComponent(
      `Hello S&M Construction, I'm ${form.firstName} ${form.lastName}. ${
        form.interest ? `I'm interested in ${form.interest}. ` : ""
      }${
        form.contactMethod
          ? `Preferred contact method: ${form.contactMethod}. `
          : ""
      }${form.message || "I would like a quote."}`
    )}`;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-semibold text-primary">Contact Us</h2>
      <p className="mt-2 text-muted-foreground">
        Send us a message — WhatsApp works best.
      </p>
      <form
        className="mt-8 grid gap-4 sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(whatsappHref(), "_blank");
        }}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName" className="text-sm font-medium">
            First name{" "}
            <span className="text-red-500" aria-hidden>
              *
            </span>
          </label>
          <input
            id="firstName"
            className="rounded-md border p-3 w-full"
            placeholder="First name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last name{" "}
            <span className="text-red-500" aria-hidden>
              *
            </span>
          </label>
          <input
            id="lastName"
            className="rounded-md border p-3 w-full"
            placeholder="Last name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            required
          />
        </div>
        <div className="col-span-2 flex flex-col gap-1">
          <label htmlFor="contactMethod" className="text-sm font-medium">
            Contact method{" "}
            <span className="text-red-500" aria-hidden>
              *
            </span>
          </label>
          <select
            id="contactMethod"
            className="rounded-md border p-3 w-full"
            value={form.contactMethod}
            onChange={(e) =>
              setForm({ ...form, contactMethod: e.target.value })
            }
            required
          >
            <option value="">Choose a method</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="both">Both</option>
          </select>
        </div>
        {(form.contactMethod === "email" || form.contactMethod === "both") && (
          <div
            className={`flex flex-col gap-1 ${
              form.contactMethod === "email" ? "col-span-2" : ""
            }`}
          >
            <label htmlFor="email" className="text-sm font-medium">
              Email{" "}
              {requireEmail && (
                <span className="text-red-500" aria-hidden>
                  *
                </span>
              )}
            </label>
            <input
              id="email"
              className="rounded-md border p-3 w-full"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              required={requireEmail}
            />
          </div>
        )}
        {(form.contactMethod === "phone" || form.contactMethod === "both") && (
          <div
            className={`flex flex-col gap-1 ${
              form.contactMethod === "phone" ? "col-span-2" : ""
            }`}
          >
            <label htmlFor="phone" className="text-sm font-medium">
              Phone{" "}
              {requirePhone && (
                <span className="text-red-500" aria-hidden>
                  *
                </span>
              )}
            </label>
            <input
              id="phone"
              className="rounded-md border p-3 w-full"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              type="tel"
              required={requirePhone}
            />
          </div>
        )}
        <div className="col-span-2 flex flex-col gap-1">
          <label htmlFor="interest" className="text-sm font-medium">
            Service of interest{" "}
            <span className="text-red-500" aria-hidden>
              *
            </span>
          </label>
          <select
            id="interest"
            className="rounded-md border p-3 w-full"
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
            required
          >
            <option value="">Choose a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <textarea
          className="col-span-2 min-h-28 rounded-md border p-3 w-full"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <div className="col-span-2 flex gap-3">
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <div className="mt-8 rounded-lg border p-4 text-sm text-muted-foreground">
        Prefer email? Write to{" "}
        <a className="text-primary" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
      </div>
    </section>
  );
}
