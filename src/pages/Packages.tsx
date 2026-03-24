import ScrollReveal from "@/components/ScrollReveal";
import PackagesSection from "@/components/PackagesSection";

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
          <PackagesSection />
        </div>
      </section>
    </div>
  );
};

export default Packages;