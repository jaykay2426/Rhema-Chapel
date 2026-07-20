import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";

const services = [
  {
    day: "Sunday",
    title: "Superlative Anointing for Success",
    time: "1st Service • 8:00 AM - 9:15 AM\n2nd Service • 9:15 AM - 11:00 AM",
    verse: "Come expecting transformation and divine encounters.",
    color: "from-red-500 to-pink-500",
  },
  {
    day: "Wednesday",
    title: "Midweek Service",
    time: "6:30 PM - 8:00 PM",
    verse: "Recharge your faith through worship and the Word.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    day: "Friday",
    title: "Victory Hour Prayer Meeting",
    time: "6:00 PM - 7:00 PM",
    verse: "A powerful hour dedicated to prayer and breakthrough.",
    color: "from-violet-500 to-indigo-500",
  },
  {
    day: "1st Saturday",
    title: "Morning Glory & Evangelism",
    time: "7:00 AM - 9:00 AM",
    verse: "Reach souls while growing spiritually together.",
    color: "from-green-500 to-emerald-500",
  },
  {
    day: "1st Sunday",
    title: "General Fellowship",
    time: "Immediately After Service",
    verse: "Meet, connect and build lasting relationships.",
    color: "from-orange-500 to-amber-500",
  },
  {
    day: "Last Sunday",
    title: "Thanksgiving Sunday",
    time: "During Both Services",
    verse: "Celebrate God's faithfulness with joyful praise.",
    color: "from-yellow-500 to-red-500",
  },
];

export default function ServiceCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev =
    current === 0 ? services.length - 1 : current - 1;

  const next =
    current === services.length - 1 ? 0 : current + 1;

  return (
    <div className="relative flex h-[620px] w-full items-center justify-center perspective-[2000px]">

      {/* Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-red-500/20 blur-[120px]" />

      {/* Previous */}
      <motion.div
        animate={{
          x: -120,
          scale: .82,
          rotateY: 35,
          opacity: .35,
        }}
        className="absolute"
      >
        <Card data={services[prev]} />
      </motion.div>

      {/* Active */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{
            opacity:0,
            rotateY:-50,
            scale:.8
          }}
          animate={{
            opacity:1,
            rotateY:0,
            scale:1
          }}
          exit={{
            opacity:0,
            rotateY:50,
            scale:.8
          }}
          transition={{
            duration:.7
          }}
          className="z-20"
        >
          <Card data={services[current]} active />
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <motion.div
        animate={{
          x:120,
          scale:.82,
          rotateY:-35,
          opacity:.35
        }}
        className="absolute"
      >
        <Card data={services[next]} />
      </motion.div>

      {/* Dots */}
      <div className="absolute -bottom-12 flex gap-3">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              current === i
                ? "w-10 bg-red-500"
                : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  data,
  active = false,
}: {
  data: (typeof services)[number];
  active?: boolean;
}) {
  return (
    <motion.div
      whileHover={{
        rotateX:-6,
        rotateY:6,
        y:-8
      }}
      transition={{
        type:"spring",
        stiffness:200
      }}
      className={`relative h-[500px] w-[360px]
      rounded-[35px]
      border border-white/10
      bg-white/10
      backdrop-blur-2xl
      overflow-hidden
      shadow-[0_40px_80px_rgba(0,0,0,.45)]`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-20`}
      />

      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.3),transparent_40%)]" />

      <div className="relative flex h-full flex-col p-8">

        <div className="flex items-center justify-between">

          <div className="rounded-full bg-white/10 p-4 backdrop-blur-xl">
            <CalendarDays size={28}/>
          </div>

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            {data.day}
          </span>

        </div>

        <h2 className="mt-8 text-3xl font-black leading-tight">
          {data.title}
        </h2>

        <div className="mt-8 flex items-start gap-3 text-gray-200 whitespace-pre-line">
          <Clock3 className="mt-1"/>
          <p>{data.time}</p>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="leading-7 text-gray-300">
            {data.verse}
          </p>
        </div>

        <div className="mt-auto">

          <button className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-500 py-4 font-semibold shadow-xl">
            Join This Service
          </button>

        </div>

      </div>

      {active && (
        <motion.div
          initial={{ width:0 }}
          animate={{ width:"100%" }}
          transition={{
            duration:5,
            ease:"linear"
          }}
          className="absolute bottom-0 left-0 h-1 bg-red-500"
        />
      )}
    </motion.div>
  );
}