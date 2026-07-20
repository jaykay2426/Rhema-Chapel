import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1438232997411-5c79c2d1b35c?q=80&w=2000&auto=format&fit=crop",
    alt: "Church Service",
  },
  {
    src: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2000&auto=format&fit=crop",
    alt: "Worship Night",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    alt: "Conference",
  },
  {
    src: "https://images.unsplash.com/photo-1504052434566-3ad1246d593d?q=80&w=2000&auto=format&fit=crop",
    alt: "Prayer Meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop",
    alt: "Choir",
  },
  {
    src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2000&auto=format&fit=crop",
    alt: "Outreach Event",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const open = (i: number) => setSelected(i);
  const close = () => setSelected(null);
  const prev = () =>
    setSelected((s) => (s !== null && s > 0 ? s - 1 : images.length - 1));
  const next = () =>
    setSelected((s) => (s !== null && s < images.length - 1 ? s + 1 : 0));

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
            Moments
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Photo Gallery
          </h2>
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group relative mb-4 cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => open(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-lg font-semibold text-white">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={close}
              className="absolute right-6 top-6 z-10 text-white transition hover:text-[#C1121F]"
            >
              <X size={32} />
            </button>
            <button
              onClick={prev}
              className="absolute left-6 top-1/2 z-10 -translate-y-1/2 text-white transition hover:text-[#C1121F]"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={next}
              className="absolute right-6 top-1/2 z-10 -translate-y-1/2 text-white transition hover:text-[#C1121F]"
            >
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

