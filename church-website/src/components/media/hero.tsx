import { motion } from "framer-motion";
import { PlayCircle, Images } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0B0B]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop"
          alt="Church Media"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/85 to-transparent" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#C1121F]/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#C1121F]/10 blur-[140px]" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-10 lg:px-10">

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="uppercase tracking-[0.35em] text-[#C1121F]"
          >
            Rhema Chapel International Churches
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2, duration: .7 }}
            className="mt-8 text-5xl font-black leading-none md:text-7xl lg:text-8xl"
          >
            MEDIA
            <br />

            <span className="text-[#C1121F]">
              &
            </span>

            <br />

            PUBLICATIONS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .35 }}
            className="mt-10 max-w-2xl text-lg leading-8 text-gray-300"
          >
            Sharing God's Word beyond the walls of the church through
            sermons, livestreams, publications, photography,
            videos and digital media that inspire lives around
            the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5 }}
            className="mt-12 flex flex-wrap gap-5"
          >

            <button className="group flex items-center gap-3 rounded-full bg-[#C1121F] px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-[#a10f19]">

              <PlayCircle
                size={22}
                className="transition group-hover:rotate-12"
              />

              Watch Messages

            </button>

            <button className="group flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 transition duration-300 hover:border-[#C1121F] hover:bg-white/5">

              <Images
                size={22}
                className="transition group-hover:scale-110"
              />

              View Gallery

            </button>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/30">
          <div className="mt-2 h-3 w-1 rounded-full bg-[#C1121F]" />
        </div>
      </motion.div>

    </section>
  );
}