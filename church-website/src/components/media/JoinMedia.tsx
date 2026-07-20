import { motion } from "framer-motion";
import { Send, Heart } from "lucide-react";

export default function JoinMedia() {
  return (
    <section className="relative bg-[#111] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C1121F]/20">
            <Heart size={36} className="text-[#C1121F]" />
          </div>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
            Join the Media Team
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Are you passionate about using media to spread the Gospel?
            We're looking for talented and dedicated individuals to
            join our media ministry team. No experience? No problem —
            we'll train you!
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 rounded-full bg-[#C1121F] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#a10f19]">
              <Send size={18} />
              Apply Now
            </button>
            <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:border-[#C1121F]">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

