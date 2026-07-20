import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";

const featuredSermon = {
  title: "The Power of Faith in Troubled Times",
  speaker: "Pastor John Doe",
  date: "March 16, 2026",
  description:
    "In this powerful message, we explore how faith can move mountains even when circumstances seem impossible. Discover the biblical principles that unlock supernatural breakthroughs in your life.",
  image:
    "https://images.unsplash.com/photo-1504052434566-3ad1246d593d?q=80&w=2000&auto=format&fit=crop",
};

export default function FeaturedMessage() {
  return (
    <section className="relative bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-[#C1121F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
            Featured Message
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Latest Sermon
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={featuredSermon.image}
                alt={featuredSermon.title}
                className="h-[400px] w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C1121F]/90 transition duration-300 hover:scale-110">
                  <Play size={32} className="ml-1 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar size={16} />
              <span>{featuredSermon.date}</span>
            </div>
            <h3 className="mt-4 text-3xl font-bold text-white">
              {featuredSermon.title}
            </h3>
            <p className="mt-2 text-[#C1121F] font-medium">
              {featuredSermon.speaker}
            </p>
            <p className="mt-6 leading-relaxed text-gray-300">
              {featuredSermon.description}
            </p>
            <button className="mt-8 rounded-full bg-[#C1121F] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#a10f19]">
              Watch Full Message
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

