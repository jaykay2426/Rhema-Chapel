import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    videoId: "dQw4w9WgXcQ",
    title: "Welcome to Church",
    subtitle: "Where Faith Meets Community",
    description:
      "Experience the warmth of God's love in a place where everyone belongs.",
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "Welcome to Rhema Chapel",
    subtitle: "Home of the Blessed People",
    description:
      "A prophetic community raising men and women through the Word of God.",
  },
  {
    videoId: "dQw4w9WgXcQ",
    title: "Welcome to Your Father's House",
    subtitle: "A Place Called Destiny",
    description:
      "You are not just a visitor — you are family. Discover your place in God's house.",
  },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const DURATION = 8;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = 1000 / 60;
    const step = (interval / (DURATION * 1000)) * 100;
    const timer = setInterval(() => {
      setProgress((p) => {
        const n = p + step;
        if (n >= 100) {
          next();
          return 0;
        }
        return n;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [isPlaying, next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_rgba(193,18,31,0.15)_0%,_transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(10,61,145,0.1)_0%,_transparent_60%)]" />
          </motion.div>
          <div
            className="absolute inset-0 opacity-[0.03] z-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="text-sm font-medium tracking-[0.3em] text-white/60">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="h-[1px] w-16 bg-white/20" />
          <span className="text-sm font-medium tracking-[0.3em] text-white/60">
            {String(slides.length).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={slide.title}
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -60, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl text-6xl font-black leading-none tracking-tight text-white md:text-7xl lg:text-8xl xl:text-9xl"
          >
            {slide.title.split(" ").map((word, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 ? (
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 0px #C1121F",
                        "0 0 30px #C1121F",
                        "0 0 0px #C1121F",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-[#C1121F]"
                  >
                    {word}
                  </motion.span>
                ) : (
                  word
                )}
                {i < arr.length - 1 && " "}
              </span>
            ))}
          </motion.h1>
        </AnimatePresence>

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={slide.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg font-medium tracking-[0.25em] uppercase text-[#C1121F]"
          >
            {slide.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={slide.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-300"
          >
            {slide.description}
          </motion.p>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 35px rgba(193,18,31,.45)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#C1121F] px-8 py-4 font-semibold text-white shadow-xl"
          >
            Watch Full Video
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#C1121F" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-xl"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        {/* Progress */}
        <div className="flex gap-1 px-8">
          {slides.map((_, i) => (
            <div key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ width: "0%" }}
                animate={{
                  width: i === current ? `${progress}%` : i < current ? "100%" : "0%",
                }}
                transition={{ duration: i === current ? 0 : 0.3 }}
                className="h-full rounded-full bg-[#C1121F]"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-8 py-6">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl transition hover:bg-white/20"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isPlaying ? "Pause" : "Play"}
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current ? "w-8 bg-[#C1121F]" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              <ChevronRight size={20} />
            </button>
          </div>
      </div>

      {/* Glow orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-20 top-1/4 h-64 w-64 rounded-full bg-[#C1121F]/10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-20 top-1/3 h-72 w-72 rounded-full bg-[#0A3D91]/10 blur-[120px]"
      />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-24 left-1/2 z-30 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] text-white/40 uppercase">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
