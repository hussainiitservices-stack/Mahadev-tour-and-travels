import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../assets/LOGO.png";
const Footer = () => (
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
              <Phone className="h-4 w-4 text-primary" /> +91 70246 01594            </a>
            <a href="mailto:info@royalwheels.com" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" /> info@84mahadevtravels.com
            </a>
            {/* <p className="flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              123, MG Road, Indore, Madhya Pradesh, India
            </p> */}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-muted-foreground/10 py-6 text-center text-sm opacity-60">
      © {new Date().getFullYear()} Mahadev Tours and Travels. All rights reserved.
      <p>
      Designed and Developed by <a href="https://hussainiitservices.com" className="text-primary hover:underline">Hussain IT Services</a>
      </p>
    </div>
    
  </footer>
);

export default Footer;
