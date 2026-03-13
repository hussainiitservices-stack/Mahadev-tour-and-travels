import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, Send, ChevronDown, CheckCircle2, AlertCircle, Loader2, CalendarDays } from "lucide-react";

// ── Replace with your deployed Apps Script Web App URL ──────
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWgWY0Ws1mko44u6LBaafVRb1PZKzr3cyVzwsMQt3NsXrUktpliunqAU-rYH-N_i21/exec";

const vehicles = [
  { name: "Sedan",                        seats: "4 Passengers" },
  { name: "Ertiga",                        seats: "7 Passengers" },
  { name: "Tavera",                        seats: "7 Passengers" },
  { name: "Innova Crysta",                 seats: "7 Passengers" },
  { name: "Tempo Traveller (14 Seater)",   seats: "14 Passengers" },
  { name: "Tempo Traveller (17 Seater)",   seats: "17 Passengers" },
  { name: "Tempo Traveller (20 Seater)",   seats: "20 Passengers" },
  { name: "Tempo Traveller (26 Seater)",   seats: "26 Passengers" },
];

type Status = "idle" | "loading" | "success" | "error";
const EMPTY_FORM = { name: "", phone: "", email: "", vehicle: "", date: "", message: "" };

// Today's date string for the min= attribute (no past dates)
const todayStr = new Date().toISOString().split("T")[0];

const Contact = () => {
  const [form, setForm]     = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      await fetch(APPS_SCRIPT_URL, {
        method : "POST",
        mode   : "no-cors",
        headers: { "Content-Type": "application/json" },
        body   : JSON.stringify({
          ...form,
          // Format date nicely for the sheet/emails: "20 March 2026"
          date: form.date
            ? new Date(form.date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })
            : "",
        }),
      });
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch {
      setStatus("error");
      setErrMsg("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <div>
      {/* ── Hero ── */}
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

      {/* ── Main Section ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">

            {/* ── Form ── */}
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold font-display text-foreground">Send a Message</h2>

                {status === "success" ? (
                  <div className="flex flex-col items-center gap-4 py-12 text-center">
                    <CheckCircle2 className="h-14 w-14 text-green-500" />
                    <h3 className="text-xl font-bold text-foreground">Enquiry Sent!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you! We've saved your details and sent a confirmation to your email.
                      Our team will contact you within <strong>2–4 hours</strong>.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 rounded-xl border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Text inputs */}
                    {[
                      { name: "name",  label: "Your Name",     type: "text",  placeholder: "Your Name" },
                      { name: "phone", label: "Phone Number",  type: "tel",   placeholder: "Phone Number" },
                      { name: "email", label: "Email Address", type: "email", placeholder: "Email Address" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.name as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                          required
                          disabled={status === "loading"}
                          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground disabled:opacity-50"
                        />
                      </div>
                    ))}

                    {/* Vehicle dropdown */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Select Vehicle / Service</label>
                      <div className="relative">
                        <select
                          value={form.vehicle}
                          onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                          required
                          disabled={status === "loading"}
                          className="w-full appearance-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer disabled:opacity-50"
                        >
                          <option value="" disabled>Choose a vehicle…</option>
                          {vehicles.map((v) => (
                            <option key={v.name} value={v.name}>{v.name} — {v.seats}</option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>

                    {/* Date picker */}
                    <div>
                      <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        Preferred Booking / Travel Date
                      </label>
                      <input
                        type="date"
                        min={todayStr}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        required
                        disabled={status === "loading"}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 cursor-pointer"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your travel plans, pickup point, destination…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        disabled={status === "loading"}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none placeholder:text-muted-foreground disabled:opacity-50"
                      />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        {errMsg}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-orange py-3.5 font-semibold text-primary-foreground transition-all hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                      {status === "loading"
                        ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                        : <><Send className="h-4 w-4" /> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* ── Info ── */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <h2 className="mb-6 text-2xl font-bold font-display text-foreground">Contact Info</h2>
                  <div className="space-y-5">
                    {[
                      { icon: Phone, label: "Phone", value: "+91 70246 01594",           href: "tel:+917024601594" },
                      { icon: Mail,  label: "Email", value: "info@84mahadevtravels.com", href: "mailto:info@84mahadevtravels.com" },
                    ].map((c, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                          <c.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                          <a href={c.href} className="font-medium text-foreground hover:text-primary transition-colors">{c.value}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next steps */}
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold font-display text-foreground">What happens next?</h3>
                  <ol className="space-y-3">
                    {[
                      "You submit the form — we receive it instantly.",
                      "You get a confirmation email with your enquiry + date.",
                      "Our team calls or WhatsApps you back within 2–4 hours.",
                      "We finalise your booking & you're all set! 🎉",
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
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