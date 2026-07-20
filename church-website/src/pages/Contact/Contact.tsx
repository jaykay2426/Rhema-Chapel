import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

import SectionHeading from "../../components/SectionHeading/SectionHeading";



export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(10,61,145,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(193,18,31,0.15),transparent_35%)]" />

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0A3D91]/20 blur-[150px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#C1121F]/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-12">
        <SectionHeading
          title="Contact Us"
          subtitle="We would love to hear from you."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-bold text-white">
                Get In Touch
              </h2>

              <p className="mt-4 leading-8 text-gray-400">
                Whether you have a prayer request, testimony or simply want to
                know more about Rhema Chapel International Churches, we'd love
                to hear from you.
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex items-center gap-5">
                  <div className="rounded-xl bg-[#C1121F]/20 p-4">
                    <Mail className="text-[#C1121F]" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Email
                    </p>

                    <p className="text-white">
                      info@rhemachurch.org
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="rounded-xl bg-[#0A3D91]/20 p-4">
                    <Phone className="text-[#0A3D91]" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Phone
                    </p>

                    <p className="text-white">
                      +234 800 000 0000
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="rounded-xl bg-[#C1121F]/20 p-4">
                    <MapPin className="text-[#C1121F]" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Address
                    </p>

                    <p className="text-white">
                      Rhema Chapel International Churches
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white">
                Connect With Us
              </h3>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <a
                  href="#"
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-2 hover:border-blue-500"
                >
                  <FaFacebookF
                    size={26}
                    className="text-blue-500"
                  />

                  <p className="mt-4 text-white">
                    Facebook
                  </p>
                </a>

                <a
                  href="#"
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-2 hover:border-pink-500"
                >
                  <FaInstagram
                    size={26}
                    className="text-pink-500"
                  />

                  <p className="mt-4 text-white">
                    Instagram
                  </p>
                </a>

                <a
                  href="#"
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-2 hover:border-green-500"
                >
                  <FaWhatsapp
                    size={26}
                    className="text-green-500"
                  />

                  <p className="mt-4 text-white">
                    WhatsApp
                  </p>
                </a>

                <a
                  href="#"
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-2 hover:border-white"
                >
                  <FaTiktok
                    size={26}
                    className="text-white"
                  />

                  <p className="mt-4 text-white">
                    TikTok
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white">
              Send Us a Message
            </h2>

            <p className="mt-4 text-gray-400">
              We'd be delighted to hear from you.
            </p>

            <form className="mt-10 space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[#C1121F]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[#C1121F]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[#0A3D91]"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-[#C1121F]"
              />

              <button
                className="w-full rounded-2xl bg-[#C1121F] py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

