import { Link } from "react-router-dom";
import { Phone, Mail, Clock, XCircle, Tag, IndianRupee } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../assets/LOGO.png";

// ── Detect mobile for phone/wa link ─────────────────────────
const isMobile = () =>
  typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);

const phoneNumber  = "917024601594";
const phoneDisplay = "+91 70246 01594";

function callOrWhatsapp() {
  if (isMobile()) {
    window.location.href = `tel:+${phoneNumber}`;
  } else {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  }
}

const Footer = () => (
  <>
    {/* ── FEATURE BADGES BAR (above footer) ── */}
    <div className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { icon: Clock,        label: "Always On Time" },
            { icon: XCircle,      label: "Free Cancellation" },
            { icon: Tag,          label: "Best Offers" },
            { icon: IndianRupee,  label: "Lowest Fares" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-6 py-5"
            >
              <Icon className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-bold text-foreground tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ── NEED FURTHER ASSISTANCE BANNER ── */}
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-widest text-primary-foreground">
              Need Further Assistance?
            </h3>
            <p className="mt-1 text-sm text-primary-foreground/80">
              We're here to help!<br />
              Reach out to us anytime and we'll happily answer your questions.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <p className="text-sm font-semibold text-primary-foreground/70 sm:mr-2">
              Call Us at:
            </p>
            {/* On mobile → tel: | On desktop → wa.me */}
            <a
              href={`tel:+${phoneNumber}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground hover:text-primary md:hidden"
            >
              <Phone className="h-4 w-4" /> {phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground hover:text-primary"
            >
              <FaWhatsapp className="h-4 w-4" /> {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* ── FAMOUS PLACES IN UJJAIN ── */}
    <div className="bg-background border-b border-border py-10">
      <div className="container mx-auto px-4">
        <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-foreground">
          Famous Places to Explore in Ujjain
        </h4>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[
            "Mahakaleshwar Temple",
            "Bada Ganesh Temple",
            "Maa Harsidhi Temple",
            "Shipra River (Ram Ghat)",
            "Mangalnath Temple",
            "Sidhnath Temple",
            "Kal Bheraw Temple",
            "Gadkalika Temple",
            "Bharatri Gufa",
            "Jantar-Mantar (Vedhshala)",
            "Chintaman Ganesh Temple",
            "Vikramaditya Sinhasan",
            "Chardham Temple",
            "Mahakal Lok",
          ].map((place) => (
            <p key={place} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="text-primary font-bold">·</span> {place}
            </p>
          ))}
        </div>
      </div>
    </div>

    {/* ── MAIN FOOTER (unchanged) ── */}
    <footer className="bg-gradient-dark text-muted-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="Mahadev Tours & Travels Logo"
                className="h-16 w-auto object-contain"
              />
              <span className="text-xl font-bold font-display text-primary-foreground">
                Mahadev Tours & Travels
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Your trusted travel partner for comfortable and safe journeys across India. Premium vehicles, professional drivers.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-muted-foreground/20 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/917024601594"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-muted-foreground/20 transition-all duration-200 hover:border-green-500 hover:bg-green-500 hover:text-white"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-muted-foreground/20 transition-all duration-200 hover:border-red-500 hover:bg-red-500 hover:text-white"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-display font-semibold text-primary-foreground">Quick Links</h4>
            {["Home", "About", "Services", "Contact"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="block py-1.5 text-sm transition-colors hover:text-primary"
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-display font-semibold text-primary-foreground">Our Services</h4>
            {["Sedan Rental", "SUV Rental", "Innova Hire", "Tempo Traveller", "Airport Transfer", "Local Tours"].map((s) => (
              <p key={s} className="py-1.5 text-sm">{s}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-display font-semibold text-primary-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+917024601594" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" /> +91 70246 01594
              </a>
              <a href="mailto:info@84mahadevtravels.com" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" /> info@84mahadevtravels.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-muted-foreground/10 py-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Mahadev Tours and Travels. All rights reserved.
        <p>
          Designed and Developed by{" "}
          <a href="https://hussainiitservices.com" className="text-primary hover:underline">
            Hussain IT Services
          </a>
        </p>
      </div>
    </footer>
  </>
);

export default Footer;