import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const videoList = [
  {
    title: "Walking in Divine Purpose",
    speaker: "Pastor John Doe",
    views: "12K views",
    thumbnail:
      "https://images.unsplash.com/photo-1438232997411-5c79c2d1b35c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "The Season of Breakthrough",
    speaker: "Pastor Jane Smith",
    views: "8.5K views",
    thumbnail:
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Faith That Overcomes",
    speaker: "Evangelist Mark",
    views: "15K views",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Building a Prayer Life",
    speaker: "Pastor John Doe",
    views: "6.3K views",
    thumbnail:
      "https://images.unsplash.com/photo-1504052434566-3ad1246d593d?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Videos() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleVideos = videoList.slice(startIndex, startIndex + 3);

  const next = () => {
    if (startIndex + 3 < videoList.length) setStartIndex(startIndex + 1);
  };
  const prev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <section className="relative bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center justify-between"
        >
          <div>
            <span className="inline-block rounded-full bg-[#C1121F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
              Watch
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Recent Videos
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:border-[#C1121F]"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:border-[#C1121F]"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleVideos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C1121F]/90 transition duration-300 group-hover:scale-110">
                    <Play size={24} className="ml-1 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">
                {video.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                {video.speaker} · {video.views}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

