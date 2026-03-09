import ScrollReveal from "@/components/ScrollReveal";
import { Car, Users, MapPin, Award, Target, Eye, Heart } from "lucide-react";

const stats = [
  { icon: Car, value: "20+", label: "Vehicles" },
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: MapPin, value: "50+", label: "Routes Covered" },
  { icon: Award, value: "12+", label: "Years Experience" },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative bg-gradient-dark py-32 pt-40">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</span>
          <h1 className="mt-3 text-4xl font-bold font-display text-primary-foreground md:text-5xl">
            Driving Excellence <span className="text-gradient-orange">Since 2014</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Mahadev Tours & Travels started with a simple vision — to provide safe, comfortable, and affordable travel solutions across Madhya Pradesh and beyond.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl border border-border bg-card transition-all hover:shadow-card hover:-translate-y-1">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-bold font-display text-foreground">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="section-separator" />

    {/* Mission, Vision, Values */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", text: "To provide the most reliable, comfortable, and affordable travel services with a commitment to customer satisfaction and safety." },
            { icon: Eye, title: "Our Vision", text: "To be the most trusted and preferred travel partner in Central India, known for excellence in service and innovation." },
            { icon: Heart, title: "Our Values", text: "Safety first, customer-centric approach, transparency in pricing, and continuous improvement in service quality." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="group rounded-2xl bg-card p-8 text-center transition-all duration-300 hover:shadow-card hover:-translate-y-2">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent transition-colors group-hover:bg-gradient-orange">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="mb-3 text-xl font-bold font-display text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Story</span>
            <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
              A Journey of <span className="text-gradient-orange">Trust & Excellence</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              What started as a small car rental service in Indore has grown into one of the most trusted travel companies in Madhya Pradesh. With a fleet of over 20 well-maintained vehicles and a team of experienced drivers, we've served more than 1000 happy customers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our commitment to safety, punctuality, and customer satisfaction has earned us a reputation as the go-to travel partner for families, corporates, and tourists. Whether it's a local city tour, an airport transfer, or an intercity journey, Mahadev Tours & Travels delivers a premium experience every time.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
);

export default About;
