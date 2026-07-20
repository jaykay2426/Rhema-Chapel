import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, ArrowDown } from "lucide-react";
import { slides } from "./slides";

export default function VideoHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white">

      {/* Background Videos */}

      <AnimatePresence mode="wait">

        <motion.video
          key={current}
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
          }}
        >
          <source src={slides[current].video} />
        </motion.video>

      </AnimatePresence>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Red Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

      {/* Glow */}

      <motion.div
        animate={{
          opacity: [.2, .5, .2],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#C1121F]/20 blur-[160px]"
      />

      {/* Content */}

      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <motion.p
            key={"small" + current}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="mb-6 uppercase tracking-[0.5em] text-[#C1121F]"
          >
            RHEMA CHAPEL INTERNATIONAL CHURCHES, IKORODU
          </motion.p>

          <AnimatePresence mode="wait">

            <motion.h1
              key={slides[current].title}
              initial={{
                opacity: 0,
                y: 80,
                filter: "blur(15px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -60,
                filter: "blur(15px)",
              }}
              transition={{
                duration: .8,
              }}
              className="text-6xl font-black leading-none md:text-8xl"
            >
              {slides[current].title}
            </motion.h1>

          </AnimatePresence>

          <AnimatePresence mode="wait">

            <motion.p
              key={slides[current].subtitle}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                delay: .15,
                duration: .8,
              }}
              className="mt-8 max-w-xl text-lg leading-8 text-gray-200"
            >
              {slides[current].subtitle}
            </motion.p>

          </AnimatePresence>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .5,
            }}
            className="mt-12 flex flex-wrap gap-5"
          >

            <button className="rounded-full bg-[#C1121F] px-8 py-4 font-semibold transition hover:scale-105 hover:shadow-2xl hover:shadow-red-600/40">
              Plan Your Visit
            </button>

            <button className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 backdrop-blur-lg transition hover:bg-white/20">

              <Play
                fill="white"
                size={18}
              />

              Watch Live

            </button>

          </motion.div>

        </div>

      </div>

      {/* Previous */}

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-4 backdrop-blur-lg transition hover:bg-[#C1121F]"
      >
        <ChevronLeft />
      </button>

      {/* Next */}

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/40 p-4 backdrop-blur-lg transition hover:bg-[#C1121F]"
      >
        <ChevronRight />
      </button>

      {/* Bottom */}

      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">

        {/* Dots */}

        <div className="mb-8 flex gap-3">

          {slides.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                current === index
                  ? "w-10 bg-[#C1121F]"
                  : "w-3 bg-white/40"
              }`}
            />

          ))}

        </div>

        {/* Scroll */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="flex flex-col items-center text-white/80"
        >

          <span className="mb-2 text-xs uppercase tracking-[0.35em]">

            Scroll

          </span>

          <ArrowDown />

        </motion.div>

      </div>

      {/* Progress */}

      <motion.div
        key={current}
        initial={{
          width: 0,
        }}
        animate={{
          width: "100%",
        }}
        transition={{
          duration: 8,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 z-40 h-1 bg-[#C1121F]"
      />

    </section>
  );
}