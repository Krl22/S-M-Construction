export default function Services() {
  const services = [
    {
      title: "Bathroom Remodeling",
      desc: "Tile, vanities, fixtures and shower upgrades with clean finishes.",
      img: "https://1stchoicecabinetryinc.com/wp-content/uploads/2024/07/GSP_3188-copy.webp",
    },
    {
      title: "Kitchen Remodeling",
      desc: "Cabinetry, countertops, backsplash and layout improvements.",
      img: "https://mylandmark.la/wp-content/uploads/2020/08/kitchen-remodeling-in-beverly-hills.jpg",
    },
    {
      title: "Interior Painting",
      desc: "Walls, ceilings and trims with proper prep and durable paints.",
      img: "https://i2.wp.com/allforthememories.com/wp-content/uploads/2019/01/aftm-painted-doors_0471.jpg?fit=1400%2C933&ssl=1",
    },
    {
      title: "Flooring",
      desc: "Wood, laminate, vinyl and tile — installation and repair.",
      img: "https://dam.thdstatic.com/content/production/F3ni3r33hbbVdsWS07LK5g/7LhDq_jcU9Z846dxFZEd9Q/Original%20file/types-of-flooring-section-1.jpg",
    },
    {
      title: "Drywall & Framing",
      desc: "Repairs, new partitions, textures and soundproofing.",
      img: "https://pabcogypsum.com/cms/resources/media/2023/02/Techtip_condition_940x530.jpg",
    },
    {
      title: "Carpentry",
      desc: "Doors, trims, baseboards, custom built-ins.",
      img: "https://surry.edu/uploads/images/_videoPoster/GettyImages-1147804793.jpg",
    },
    {
      title: "Electrical & Lighting",
      desc: "Fixture installs, switches, minor upgrades.",
      img: "https://www.schaferelectric.com/wp-content/uploads/2024/05/electrician-remodeling-kitchen-lighting-jpg.webp",
    },
    {
      title: "Plumbing Fixtures",
      desc: "Sink, toilet, shower fixture replacement and sealing.",
      img: "https://www.waldmanplumbing.com/wp-content/uploads/2024/07/choosing-the-right-plumbing-fixtures-for-your-kitchen.jpg",
    },
    {
      title: "Maintenance",
      desc: "Punch lists, rentals refresh, move-in-ready services.",
      img: "https://img1.wsimg.com/isteam/stock/yrY2D1q/:/rs=h:1000,cg=true,m",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold text-primary">Interior Services</h2>
      <p className="mt-2 text-muted-foreground">
        We currently specialize in interior projects. Exterior home building is
        not offered yet while we finalize licensing. Ask us about permits for
        interior remodels.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="overflow-hidden rounded-lg border">
            <div className="aspect-4/3 w-full bg-muted">
              {s.img ? (
                <img
                  src={s.img}
                  alt={`${s.title} by S&M Construction`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="grid h-full place-items-center text-muted-foreground">
                  Photo coming soon
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
