import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Church,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import churchLogo from "../../assets/logo/thea.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">

      {/* Animated Background */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [.15, .3, .15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-0 h-[550px] w-[550px] rounded-full bg-[#C1121F]/20 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#0A3D91]/20 blur-[180px]"
      />

      {/* Grid */}

      <div className="relative mx-auto max-w-7xl px-8 py-24">

        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* LEFT */}

          <div>

            <img
              src={churchLogo}
              alt="logo"
              className="h-44 w-auto"
            />

            <h2 className="text-5xl font-black">

              RHEMA CHAPEL

            </h2>

            <p className="mt-2 uppercase tracking-[0.45em] text-[#C1121F]">

              HOME OF THE BLESSED PEOPLE

            </p>

            <p className="mt-8 max-w-md leading-8 text-gray-400">

              Raising men and women through the power of God's
              Word, heartfelt worship, prayer, discipleship
              and Kingdom service.

            </p>

            {/* Scripture */}

            <motion.div

              whileHover={{
                y: -5,
              }}

              className="mt-5 rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"

            >

              <Church className="text-[#C1121F]" />

              <p className="italic leading-8 text-gray-300">

                "Now unto Him that is able to do exceeding
                abundantly above all that we ask or think..."

              </p>

              <span className="mt-4 block text-sm text-[#C1121F]">

                Ephesians 3:20

              </span>

            </motion.div>

          </div>

                    {/* QUICK LINKS */}

          <div>

            <h3 className="mb-8 text-2xl font-bold">

              Quick Links

            </h3>

            <div className="space-y-4">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Sermons", path: "/sermons" },
                { name: "Departments", path: "/departments" },
                { name: "Projects", path: "/projects" },
                { name: "Media", path: "/social-media" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (

                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center gap-4 text-gray-400 transition hover:text-[#C1121F]"
                >

                  <motion.div
                    whileHover={{
                      rotate: 180,
                    }}
                    transition={{
                      duration: .35,
                    }}
                    className="h-2 w-2 rounded-full bg-[#C1121F]"
                  />

                  {item.name}

                </Link>

              ))}

            </div>

          </div>

          {/* SERVICE TIMES */}

          <div>

            <h3 className="mb-8 text-2xl font-bold">

              Service Times

            </h3>

            <div className="space-y-6">

              {[
                {
                  day: "Sunday",
                  service: "Superlative Anointing Service",
                  time: "8:00 AM",
                },

                {
                  day: "Wednesday",
                  service: "Midweek Service",
                  time: "6:30 PM",
                },

                {
                  day: "Friday",
                  service: "Victory Hour",
                  time: "6:00 PM",
                },

                {
                  day: "First Saturday",
                  service: "Morning Glory",
                  time: "7:00 AM",
                },

              ].map((item) => (

                <motion.div
                  key={item.day}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >

                  <p className="font-bold text-[#C1121F]">

                    {item.day}

                  </p>

                  <p className="mt-2 text-gray-300">

                    {item.service}

                  </p>

                  <p className="mt-1 text-sm text-gray-500">

                    {item.time}

                  </p>

                </motion.div>

              ))}

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="mb-8 text-2xl font-bold">

              Contact Us

            </h3>

            <div className="space-y-5">

              <motion.div
                whileHover={{
                  x: 8,
                }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >

                <MapPin className="mt-1 text-[#C1121F]" />

                <div>

                  <p className="font-semibold">

                    Location

                  </p>

                  <p className="text-gray-400">

                    Ikorodu, Lagos, Nigeria

                  </p>

                </div>

              </motion.div>

              <motion.div
                whileHover={{
                  x: 8,
                }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >

                <Phone className="mt-1 text-[#C1121F]" />

                <div>

                  <p className="font-semibold">

                    Phone

                  </p>

                  <p className="text-gray-400">

                    +234 XXX XXX XXXX

                  </p>

                </div>

              </motion.div>

              <motion.div
                whileHover={{
                  x: 8,
                }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >

                <Mail className="mt-1 text-[#C1121F]" />

                <div>

                  <p className="font-semibold">

                    Email

                  </p>

                  <p className="text-gray-400">

                    info@rhemachapel.org

                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-20 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Section */}

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

          {/* Socials */}

          <div className="flex items-center gap-5">

            {[
              "F",
              "IG",
              "YT",
              "TT",
              "WA",
            ].map((item) => (

              <motion.a
                key={item}
                href="#"
                whileHover={{
                  y: -8,
                  scale: 1.12,
                  rotate: 8,
                }}
                whileTap={{
                  scale: .9,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-bold backdrop-blur-xl transition hover:border-[#C1121F] hover:bg-[#C1121F]"
              >

                {item}

              </motion.a>

            ))}

          </div>

          {/* Newsletter */}

          <div className="w-full max-w-xl">

            <h3 className="mb-4 text-center text-2xl font-bold lg:text-left">

              Stay Connected

            </h3>

            <div className="flex flex-col gap-4 sm:flex-row">

              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none backdrop-blur-xl placeholder:text-gray-500 focus:border-[#C1121F]"
              />

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .95,
                }}
                className="rounded-2xl bg-[#C1121F] px-8 py-4 font-semibold shadow-[0_15px_40px_rgba(193,18,31,.4)]"
              >

                Subscribe

              </motion.button>

            </div>

          </div>

        </div>

        {/* Copyright */}

        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-10 text-center lg:flex-row">

          <motion.p
            animate={{
              opacity: [.7, 1, .7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="text-gray-500"
          >

            © {new Date().getFullYear()} Rhema Chapel International Churches.
            All Rights Reserved.

          </motion.p>

          <motion.p
            whileHover={{
              scale: 1.05,
            }}
            className="text-gray-500"
          >

            Built with ❤️ to spread the Gospel of Jesus Christ.

          </motion.p>

        </div>

      </div>

      {/* Back To Top */}

      <motion.button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        whileHover={{
          y: -10,
          scale: 1.1,
        }}
        whileTap={{
          scale: .9,
        }}
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#C1121F] text-2xl font-bold text-white shadow-[0_20px_50px_rgba(193,18,31,.5)]"
      >

        ↑

      </motion.button>

</footer>
  );
}
