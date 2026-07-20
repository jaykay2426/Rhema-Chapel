import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

export default function CTA() {
  return (
    <section className="relative bg-[#0B0B0B] py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C1121F]/20 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <FaYoutube size={60} className="mx-auto text-[#C1121F]" />

          <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
            Don't Miss Another Message
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Subscribe to our YouTube channel and turn on notifications
            so you never miss a sermon, worship session, or special
            event from Rhema Chapel International Churches.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#C1121F] px-10 py-5 text-lg font-bold text-white transition duration-300 hover:scale-105 hover:bg-[#a10f19]">
            <PlayCircle size={24} />
            Subscribe on YouTube
          </button>

          <p className="mt-6 text-sm text-gray-500">
            Free. No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

