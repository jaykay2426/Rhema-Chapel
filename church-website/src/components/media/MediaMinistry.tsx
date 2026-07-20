import { motion } from "framer-motion";
import { Camera, Video, Mic, Edit3, Radio, Monitor } from "lucide-react";

const ministries = [
  {
    title: "Photography",
    desc: "Capturing God's beauty through the lens during services and events.",
    icon: Camera,
  },
  {
    title: "Videography",
    desc: "Recording and editing powerful messages and moments.",
    icon: Video,
  },
  {
    title: "Sound Engineering",
    desc: "Ensuring clear and quality audio for every service.",
    icon: Mic,
  },
  {
    title: "Content Writing",
    desc: "Creating inspiring articles, devotionals, and social media posts.",
    icon: Edit3,
  },
  {
    title: "Livestreaming",
    desc: "Broadcasting services online to reach the global audience.",
    icon: Radio,
  },
  {
    title: "Technical Support",
    desc: "Managing screens, presentations, and behind-the-scenes tech.",
    icon: Monitor,
  },
];

export default function MediaMinistry() {
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
            Serve
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Media Ministry
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Use your gifts to spread the Gospel through media. Join a
            team that matches your talents.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[#C1121F]/50 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C1121F]/20 text-[#C1121F]">
                  <Icon size={28} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

