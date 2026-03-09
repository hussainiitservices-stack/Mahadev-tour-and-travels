import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Users, Route } from "lucide-react";
import heroSedan from "@/assets/hero-sedan.png";
// import heroSuv from "@/assets/hero-suv.png";
import heroErtiga from "@/assets/hero-ertiga.png";
import heroInnova from "@/assets/hero-innova.png";
import heroTavera from "@/assets/hero-tavera.png";
import heroTraveller from "@/assets/hero-traveller.jpg";

const vehicles = [
  { img: heroSedan, name: "Sedan", seats: "4", price: "₹12/km", desc: "Perfect for airport transfers and business travel" },
  // { img: heroSuv, name: "SUV", seats: "6", price: "₹16/km", desc: "Ideal for family trips and outstation journeys" },
  { img: heroErtiga, name: "Ertiga", seats: "7", price: "₹18/km", desc: "Spacious and comfortable for family trips" },
  { img: heroTavera, name: "Tavera", seats: "12-16", price: "₹20/km", desc: "Ideal for large groups and corporate travel" },
  { img: heroInnova, name: "Innova Crysta", seats: "7", price: "₹18/km", desc: "Most popular choice for comfortable group travel" },
  { img: heroTraveller, name: "Tempo Traveller", seats: "12-16", price: "₹22/km", desc: "Best for large groups and pilgrim tours" },
  { img: heroSedan, name: "Luxury Car", seats: "4", price: "₹25/km", desc: "Premium vehicles for special occasions" },
];

const routes = [
  { from: "Indore", to: "Bhopal", distance: "195 km", time: "3.5 hrs" },
  { from: "Bhopal", to: "Ujjain", distance: "185 km", time: "3 hrs" },
  { from: "Indore", to: "Omkareshwar", distance: "80 km", time: "2 hrs" },
  { from: "Bhopal", to: "Indore", distance: "195 km", time: "3.5 hrs" },
  { from: "Indore", to: "Airport", distance: "15 km", time: "30 min" },
  { from: "Local", to: "City Tours", distance: "Flexible", time: "Full day" },
];

const Services = () => (
  <div>
    <section className="relative bg-gradient-dark py-32 pt-40">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</span>
          <h1 className="mt-3 text-4xl font-bold font-display text-primary-foreground md:text-5xl">
            Premium <span className="text-gradient-orange">Fleet & Routes</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose from our wide range of well-maintained vehicles for any occasion.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Vehicles */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Fleet</span>
            <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
              Choose Your <span className="text-gradient-orange">Ride</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-card hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={v.img}
                    alt={v.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {v.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-foreground">{v.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" /> {v.seats} Passengers
                  </div>
                  <Link
                    to="/contact"
                    className="mt-4 inline-block w-full rounded-xl bg-gradient-orange py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="section-separator" />

    {/* Routes */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Destinations</span>
            <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
              Popular <span className="text-gradient-orange">Routes</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent transition-colors group-hover:bg-gradient-orange">
                  <Route className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{r.from} → {r.to}</h3>
                  <p className="text-xs text-muted-foreground">{r.distance} • {r.time}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
