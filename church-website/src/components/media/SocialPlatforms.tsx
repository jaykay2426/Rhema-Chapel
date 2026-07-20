import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const platforms = [
  {
    name: "YouTube",
    handle: "@RhemaChapelInt",
    subscribers: "25K subscribers",
    color: "hover:bg-red-600",
    border: "border-red-600/30",
    icon: FaYoutube,
  },
  {
    name: "Instagram",
    handle: "@rhemachapel",
    followers: "15K followers",
    color: "hover:bg-pink-600",
    border: "border-pink-600/30",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    handle: "Rhema Chapel Int.",
    followers: "40K followers",
    color: "hover:bg-blue-600",
    border: "border-blue-600/30",
    icon: FaFacebookF,
  },
  {
    name: "Twitter / X",
    handle: "@rhemachapel",
    followers: "10K followers",
    color: "hover:bg-sky-500",
    border: "border-sky-500/30",
    icon: FaXTwitter,
  },
  {
    name: "TikTok",
    handle: "@rhemachapel",
    followers: "20K followers",
    color: "hover:bg-black",
    border: "border-gray-600/30",
    icon: Music2,
  },
];

export default function SocialPlatforms() {
  return (
    <section className="relative bg-[#111] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-[#C1121F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C1121F]">
            Connect
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Follow Us on Social Media
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Stay connected with Rhema Chapel on all major platforms
            for daily inspiration and updates.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {platforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group flex flex-col items-center rounded-2xl border ${platform.border} bg-white/5 p-8 text-center transition-all duration-300 ${platform.color}`}
              >
                <Icon
                  size={40}
                  className="text-white transition group-hover:scale-110"
                />
                <h3 className="mt-4 text-xl font-bold text-white">
                  {platform.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {platform.handle}
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  {platform.followers}
                </p>
                <span className="mt-4 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  Follow →
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

