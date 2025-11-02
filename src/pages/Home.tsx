import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SITE } from "@/config/site";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const whatsappUrl = `https://wa.me/${
    SITE.phoneWhatsApp
  }?text=${encodeURIComponent(SITE.defaultWhatsAppText)}`;
  const slides = [
    {
      src: "https://shabbyfufu.com/wp-content/uploads/2024/06/Decorating_Blue_Accents_Blue_Living_Room_Ideas_7_onekindesign.jpg",
      alt: "Elegant living room interior with blue accents",
    },
    {
      src: "https://1stchoicecabinetryinc.com/wp-content/uploads/2024/07/GSP_3188-copy.webp",
      alt: "Modern bathroom remodel with double vanity and shower",
    },
    {
      src: "https://mylandmark.la/wp-content/uploads/2020/08/kitchen-remodeling-in-beverly-hills.jpg",
      alt: "Kitchen remodel with cabinets and backsplash",
    },
    {
      src: "https://i2.wp.com/allforthememories.com/wp-content/uploads/2019/01/aftm-painted-doors_0471.jpg?fit=1400%2C933&ssl=1",
      alt: "Interior painting with fresh white doors",
    },
    {
      src: "https://dam.thdstatic.com/content/production/F3ni3r33hbbVdsWS07LK5g/7LhDq_jcU9Z846dxFZEd9Q/Original%20file/types-of-flooring-section-1.jpg",
      alt: "Flooring types showcase in interior setting",
    },
    {
      src: "https://pabcogypsum.com/cms/resources/media/2023/02/Techtip_condition_940x530.jpg",
      alt: "Drywall installation and finishing details",
    },
    {
      src: "https://surry.edu/uploads/images/_videoPoster/GettyImages-1147804793.jpg",
      alt: "Carpentry trim and tools in interior",
    },
    {
      src: "https://www.schaferelectric.com/wp-content/uploads/2024/05/electrician-remodeling-kitchen-lighting-jpg.webp",
      alt: "Electrical work installing kitchen lighting",
    },
    {
      src: "https://www.waldmanplumbing.com/wp-content/uploads/2024/07/choosing-the-right-plumbing-fixtures-for-your-kitchen.jpg",
      alt: "Plumbing fixtures being installed in kitchen",
    },
    {
      src: "https://img1.wsimg.com/isteam/stock/yrY2D1q/:/rs=h:1000,cg=true,m",
      alt: "General maintenance work in interior",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, slides.length]);
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-primary">
            Reliable interior remodeling and maintenance services
          </h1>
          <p className="mt-4 text-muted-foreground">
            S&M Construction delivers professional interior work: kitchens,
            bathrooms, flooring, painting, drywall and more. Licensed soon for
            exterior builds; meanwhile we focus on high–quality interior results
            and responsive service.
          </p>
          <div className="mt-6 flex gap-3 relative">
            <div className="relative">
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => setContactOpen((v) => !v)}
              >
                Contact Us
              </Button>
              {contactOpen && (
                <div className="absolute left-0 z-20 mt-2 w-56 overflow-hidden rounded-md border bg-white shadow-md">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 hover:bg-muted"
                    onClick={() => setContactOpen(false)}
                  >
                    WhatsApp
                  </a>
                  {SITE.facebookUrl && (
                    <a
                      href={SITE.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 hover:bg-muted"
                      onClick={() => setContactOpen(false)}
                    >
                      Facebook
                    </a>
                  )}
                  <Link
                    to="/contact"
                    className="block px-3 py-2 hover:bg-muted"
                    onClick={() => setContactOpen(false)}
                  >
                    Contact Form
                  </Link>
                </div>
              )}
            </div>
            <Link to="/services">
              <Button variant="outline">View Services</Button>
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "On-time, on-budget delivery",
              "Clean, respectful crews",
              "Transparent quotes",
              "Warranty on workmanship",
            ].map((item) => (
              <li key={item} className="rounded-md border p-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative aspect-4/3 w-full overflow-hidden rounded-lg border"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {slides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              decoding="async"
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/10 to-transparent" />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Button
              size="icon"
              className="bg-black/40 text-white hover:bg-black/60"
              onClick={() =>
                setIndex((i) => (i - 1 + slides.length) % slides.length)
              }
            >
              <ChevronLeft className="size-5" />
            </Button>
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Button
              size="icon"
              className="bg-black/40 text-white hover:bg-black/60"
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
