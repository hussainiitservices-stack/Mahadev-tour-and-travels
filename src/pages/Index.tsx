import HeroSlider from "@/components/HeroSlider";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Shield, Clock, MapPin, Star, Users, ThumbsUp, Car, Route } from "lucide-react";
import heroSuv from "@/assets/hero-suv.jpg";
import heroSedan from "@/assets/hero-sedan.jpg";
import heroInnova from "@/assets/hero-innova.jpg";
import heroTraveller from "@/assets/hero-traveller.jpg";

const whyChoose = [
  { icon: Shield, title: "Safe & Reliable", desc: "GPS-tracked vehicles with experienced, verified drivers" },
  { icon: Clock, title: "24/7 Available", desc: "Round the clock booking and customer support" },
  { icon: MapPin, title: "Wide Coverage", desc: "Serving all major cities and tourist destinations" },
  { icon: ThumbsUp, title: "Best Prices", desc: "Competitive rates with no hidden charges" },
];

const cars = [
  { img: heroSedan, name: "Sedan", seats: "4 Passengers", price: "₹12/km" },
  { img: heroSuv, name: "SUV", seats: "6 Passengers", price: "₹16/km" },
  { img: heroInnova, name: "Innova Crysta", seats: "7 Passengers", price: "₹18/km" },
  { img: heroTraveller, name: "Tempo Traveller", seats: "12 Passengers", price: "₹22/km" },
];

const routes = [
  "Indore to Bhopal", "Bhopal to Ujjain", "Indore to Omkareshwar",
  "Bhopal to Indore", "Indore to Airport", "Local City Tours",
];

const reviews = [
  { name: "Rajesh Kumar", text: "Excellent service! The driver was punctual and the car was spotless. Highly recommended.", stars: 5 },
  { name: "Priya Sharma", text: "Best travel experience in Indore. Comfortable Innova for our family trip to Ujjain.", stars: 5 },
  { name: "Amit Patel", text: "Professional service with great pricing. Will definitely book again for airport transfers.", stars: 4 },
];

const Index = () => {
  return (
    <div>
      <HeroSlider />

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
              <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
                The Royal Wheels <span className="text-gradient-orange">Advantage</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:shadow-card hover:-translate-y-2">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent transition-colors duration-300 group-hover:bg-gradient-orange">
                    <item.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold font-display text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Featured Cars */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Fleet</span>
              <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
                Featured <span className="text-gradient-orange">Vehicles</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cars.map((car, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold font-display text-foreground">{car.name}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" /> {car.seats}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{car.price}</span>
                      <Link
                        to="/contact"
                        className="rounded-full bg-gradient-orange px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-background">
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
            {routes.map((route, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-card">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent transition-colors group-hover:bg-gradient-orange">
                    <Route className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{route}</h3>
                    <p className="text-xs text-muted-foreground">Comfortable rides available</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Reviews */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
              <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
                What Our Customers <span className="text-gradient-orange">Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="rounded-2xl bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-card">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                  <p className="font-semibold text-foreground">{r.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-orange">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold font-display text-primary-foreground md:text-5xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Book your ride today and experience the royal treatment with Royal Wheels Travels.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-background px-10 py-4 font-semibold text-foreground transition-transform duration-200 hover:scale-105 shadow-elevated"
            >
              Book Your Ride Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
