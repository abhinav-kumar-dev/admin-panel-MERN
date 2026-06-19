const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              TechNova
            </h2>

            <p className="text-slate-400 leading-7">
              Building modern web applications and software
              solutions that help businesses grow faster and
              smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-slate-400 hover:text-blue-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-slate-400 hover:text-blue-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="text-slate-400 hover:text-blue-500 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-slate-400 hover:text-blue-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Info
            </h3>

            <div className="space-y-3 text-slate-400">
              <p>📍 Bhagalpur, Bihar, India</p>
              <p>📞 +91 9876543210</p>
              <p>✉️ info@technova.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Location
            </h3>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <iframe
                title="location"
                src="https://maps.google.com/maps?q=Bhagalpur%20Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} TechNova. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-blue-500 transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-blue-500 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-slate-400 hover:text-blue-500 transition"
            >
              Instagram
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;