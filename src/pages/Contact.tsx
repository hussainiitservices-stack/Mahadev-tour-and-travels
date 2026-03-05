import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div>
      <section className="relative bg-gradient-dark py-32 pt-40">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</span>
            <h1 className="mt-3 text-4xl font-bold font-display text-primary-foreground md:text-5xl">
              Contact <span className="text-gradient-orange">Us</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Ready to book? Have questions? Reach out to us anytime.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold font-display text-foreground">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                        required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your travel plans..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none placeholder:text-muted-foreground"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-orange py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info + Map */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <h2 className="mb-6 text-2xl font-bold font-display text-foreground">Contact Info</h2>
                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                      { icon: Mail, label: "Email", value: "info@royalwheels.com", href: "mailto:info@royalwheels.com" },
                      { icon: MapPin, label: "Address", value: "123, MG Road, Indore, Madhya Pradesh, India" },
                    ].map((c, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                          <c.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                          {c.href ? (
                            <a href={c.href} className="font-medium text-foreground hover:text-primary transition-colors">{c.value}</a>
                          ) : (
                            <p className="font-medium text-foreground">{c.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918008408!2d75.69800064999999!3d22.7241228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Royal Wheels Location"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
