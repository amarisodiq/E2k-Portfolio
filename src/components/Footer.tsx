import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Camera,
} from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "YouTube", href: "#", icon: Youtube },
];

const quickLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Wedding Photography", href: "/portfolio?category=weddings" },
  { name: "Portrait Sessions", href: "/portfolio?category=portraits" },
  { name: "Event Coverage", href: "/portfolio?category=events" },
  { name: "Commercial Work", href: "/portfolio?category=commercial" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Camera className="h-8 w-8 mr-3 text-white" />
              <h3 className="text-2xl font-bold">E2K Photography</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Capturing beautiful moments and telling stories through
              photography. Specializing in weddings, portraits, and commercial
              photography.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-200"
                  aria-label={`Follow us on ${item.name}`}
                >
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact Information
            </h4>
            <div className="grid gap-6 text-center md:text-left">
              <div className="flex items-center  space-x-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+234 913 049 1075</p>
                </div>
              </div>

              <div className="flex items-center  space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">hello@e2kphotography.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Lagos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-5 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2026 E2K Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
