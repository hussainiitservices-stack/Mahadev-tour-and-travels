import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import allOverMpt from "@/assets/All_over_mpt.png";

// ── PACKAGE DATA ─────────────────────────────────────────────
// Each group renders as one bordered card with 3 packages inside
const packageGroups = [
  {
    packages: [
      {
        title: "Boreshwar Mahadev",
        img: "https://i.pinimg.com/736x/52/1a/20/521a2019e78122677dc6157a37989a7c.jpg",
        route: "Ujjain – Boreshwar Mahadev",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain – Boreshwar Mahadev package. Please share details.",
      },
      {
        title: "Special Tour Package",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Omkareshwar_Temple_05.jpg",
        route: "Omkareshwar, Maheshwar, Maheshwar, Shani Temple",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Omkareshwar Special Tour Package. Please share details.",
      },
      {
        title: "Special Tour Package",
        img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
        route: "Indore Airport to Ujjain, Ujjain Darshan, Ujjain to Indore Airport",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Indore Airport – Ujjain Darshan package. Please share details.",
      },
    ],
  },
  {
    packages: [
      {
        title: "Airport Drop and Pickup",
        img: "https://airportchandigarh.com/images/indore_airport_outside.jpg",
        route: "Ujjain to Indore Airport",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain to Indore Airport package. Please share details.",
      },
      {
        title: "Ujjain Tour",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mahakaleshwar_Temple%2C_Ujjain.jpg/1280px-Mahakaleshwar_Temple%2C_Ujjain.jpg",
        route: "Ujjain Darshan Tour",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain Darshan Tour package. Please share details.",
      },
      {
        title: "Omkareshwar",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Omkareswar_Jyotirlinga.jpg",
        route: "Ujjain Omkareshwar",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain – Omkareshwar package. Please share details.",
      },
    ],
  },
  {
    packages: [
      {
        title: "Maheshwar",
        img: "https://www.mptourism.com/web/image/catalog/Blog%20Image/Maheshwar.jpg",
        route: "Ujjain – Maheshwar Airport",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain – Maheshwar package. Please share details.",
      },
      {
        title: "Mandu",
        img: "https://www.trawell.in/images/itinerary/Mandu1.jpg",
        route: "Ujjain – Mandu",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain – Mandu package. Please share details.",
      },
      {
        title: "Dewas Darshan",
        img: "https://images.trvl-media.com/place/6130818/15be88ad-5f74-4402-9f9f-5804a981bde2.jpg",
        route: "Ujjain – Dewas",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain – Dewas Darshan package. Please share details.",
      },
    ],
  },
  {
    packages: [
      {
        title: "Bhopal",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Upper_lake%2C_bhopal_02.jpg",
        route: "Ujjain – Bhopal",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain – Bhopal package. Please share details.",
      },
      {
        title: "Sanchi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjzcdWeu2bsNG7f-3AgtsFdbwQl-XSWfTWQ&s",
        route: "Ujjain – Sanchi",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain – Sanchi package. Please share details.",
      },
      {
        title: "Pachmani",
        img: "https://www.nativeplanet.com/photos/325x244x100/2018/08/photo-91-163027-4.jpg",
        route: "Ujjain – Pachmani",
        waText: "Hello Mahadev Tours & Travels, I am interested in the Ujjain – Pachmani package. Please share details.",
      },
    ],
  },
];

// ── SINGLE PACKAGE CARD ──────────────────────────────────────
const PackageCard = ({ pkg }: { pkg: (typeof packageGroups)[0]["packages"][0] }) => (
  <div className="group flex flex-col">
    {/* Image */}
    <div className="relative h-44 overflow-hidden rounded-xl border border-border">
      <img
        src={pkg.img}
        alt={pkg.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    {/* Info */}
    <div className="mt-3 flex-1 flex flex-col">
      <h3 className="text-xs font-extrabold uppercase tracking-widest text-foreground">
        {pkg.title}
      </h3>

      {/* Divider */}
      <div className="my-2 h-px bg-border" />

      <p className="text-xs text-muted-foreground leading-relaxed">
        {pkg.route}
      </p>

      {/* CTA — opens WhatsApp with pre-typed message for this package */}
      <a
        href={`https://wa.me/917024601594?text=${encodeURIComponent(pkg.waText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-orange px-4 py-1.5 text-xs font-bold text-white transition hover:scale-105"
      >
        MORE DETAILS <ArrowRight className="h-3 w-3" />
      </a>
    </div>
  </div>
);

// ── PAGE ─────────────────────────────────────────────────────
const Packages = () => {
  return (
    <div>
      {/* HEADER — same pattern as Services.tsx */}
      <section className="relative bg-gradient-dark py-32 pt-40">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Tour Packages
            </span>
            <h1 className="mt-3 text-4xl font-bold font-display text-primary-foreground md:text-5xl">
              Explore Our <span className="text-gradient-orange">Packages</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Handpicked tour packages from Ujjain to the most beautiful destinations across India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">

          {/* ── ALL OVER MPT FEATURED CARD ── */}
          <ScrollReveal>
            <a
              href={`https://wa.me/917024601594?text=${encodeURIComponent(
                "Hello Mahadev Tours & Travels, I am interested in the All over Madhya Pradesh Tour (MPT). Please share details and itinerary."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-10 flex flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:flex-row"
            >
              {/* Image side */}
              <div className="h-52 shrink-0 overflow-hidden sm:h-auto sm:w-72">
                <img
                  src={allOverMpt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text side */}
              <div className="flex flex-col justify-center gap-3 p-7">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Featured Package
                </span>
                <h2 className="text-2xl font-bold font-display text-foreground md:text-3xl">
                  All over{" "}
                  <span className="text-gradient-orange">Madhya Pradesh</span>{" "}
                  Tour
                </h2>
                <p className="max-w-lg text-sm text-muted-foreground leading-relaxed">
                  Explore the heart of India — from the temples of Ujjain &amp; Omkareshwar to the forts of Mandu, the wildlife of Kanha, and the heritage of Khajuraho. A complete MPT experience tailored just for you.
                </p>
                <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-orange px-5 py-2 text-xs font-bold text-white transition group-hover:scale-105">
                  ENQUIRE NOW <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-10 flex items-center gap-3">
              <span className="text-xl font-bold font-display text-foreground">Tours</span>
              <div className="h-0.5 w-12 bg-primary rounded-full" />
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {packageGroups.map((group, gi) => (
              <ScrollReveal key={gi} delay={gi * 0.08}>
                {/* Outer bordered card — matches the screenshot's grouped border */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {group.packages.map((pkg, pi) => (
                      <PackageCard key={pi} pkg={pkg} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Packages;