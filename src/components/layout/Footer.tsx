import { SITE } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} S&M Construction. All rights reserved.
        </p>
        <p className="mt-1">WhatsApp: +{SITE.phoneWhatsApp.replace(/^(\+?)/, "")} · Email: {SITE.email}</p>
      </div>
    </footer>
  );
}