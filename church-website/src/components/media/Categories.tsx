import { motion } from "framer-motion";

const categories = [
  {
    title: "Sunday Sermons",
    count: "120+ Videos",
    color: "from-red-600 to-red-800",
    icon: "✝️",
  },
  {
    title: "Bible Study",
    count: "80+ Videos",
    color: "from-blue-600 to-blue-800",
    icon: "📖",
  },
  {
    title: "Worship Sessions",
    count: "60+ Videos",
    color: "from-purple-600 to-purple-800",
    icon: "🎵",
  },
  {
    title: "Testimonies",
    count: "40+ Videos",
    color: "from-green-600 to-green-800",
    icon: "🙌",
  },
  {
    title: "Youth Programs",
    count: "50+ Videos",
    color: "from-yellow-600 to-orange-700",
    icon: "🔥",
  },
  {
    title: "Conference Talks",
    count: "30+ Videos",
    color: "from-teal-600 to-teal-800",
    icon: "🎤",
  },
];

export default function Categories() {
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
            Browse by Category
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Media Categories
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br ${cat.color} p-8 transition duration-300 hover:scale-[1.03]`}
            >
              <span className="text-4xl">{cat.icon}</span>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{cat.count}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
                <span>Browse All</span>
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

