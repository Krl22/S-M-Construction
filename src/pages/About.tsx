export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-semibold text-primary">About S&M Construction</h2>
      <p className="mt-3 text-muted-foreground">
        We are a customer-first team focused on dependable interior work.
        Our approach is simple: clear communication, honest pricing and workmanship that
        we stand behind. We bring years of hands-on experience across remodeling,
        maintenance and finish work.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border p-5">
          <h3 className="text-lg font-medium">Values</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Quality over shortcuts</li>
            <li>Respect for your home and schedule</li>
            <li>Transparent, itemized quotes</li>
          </ul>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="text-lg font-medium">Coverage</h3>
          <p className="mt-2 text-sm text-muted-foreground">Serving the local metro area — ask about your location.</p>
        </div>
      </div>
    </section>
  );
}