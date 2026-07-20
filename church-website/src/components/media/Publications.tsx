import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Daily Devotional Vol. 5",
    type: "PDF Book",
    pages: 180,
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Faith Foundations",
    type: "Study Guide",
    pages: 95,
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "The Gospel of John",
    type: "Commentary",
    pages: 240,
    image:
      "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Prayer Warriors Handbook",
    type: "Guide",
    pages: 120,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Publications() {
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
            Read
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Publications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Download free e-books, devotionals, and study materials to
            deepen your walk with God.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#C1121F] px-3 py-1 text-xs font-semibold uppercase">
                    <FileText size={12} />
                    {pub.type}
                  </span>
                  <p className="mt-2 text-sm text-gray-300">
                    {pub.pages} pages
                  </p>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">
                {pub.title}
              </h3>
              <div className="mt-3 flex gap-3">
                <button className="flex items-center gap-2 rounded-full bg-[#C1121F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a10f19]">
                  <Download size={14} />
                  Download
                </button>
                <button className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-[#C1121F]">
                  <ExternalLink size={14} />
                  Preview
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

