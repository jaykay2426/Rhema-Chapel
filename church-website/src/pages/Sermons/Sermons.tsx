import { motion } from "framer-motion";
import { Play, Radio } from "lucide-react";

export default function Sermons() {
  return (
    <main className="overflow-hidden bg-[#0B0B0B] text-white">

      {/* HERO */}
      <section className="relative flex min-h-screen items-center">

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2200&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-20"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 12,
              ease: "easeOut",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]" />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [.15, .25, .15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute -left-32 top-24 h-[450px] w-[450px] rounded-full bg-[#C1121F] blur-[160px]"
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl items-center px-6 lg:px-10">

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: .18,
                },
              },
            }}
            className="max-w-3xl"
          >

            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="rounded-full border border-[#C1121F]/40 bg-[#C1121F]/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-[#C1121F]"
            >
              Sermons & Messages
            </motion.span>

            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  x: -60,
                },
                show: {
                  opacity: 1,
                  x: 0,
                },
              }}
              className="mt-8 text-6xl font-black leading-none md:text-7xl xl:text-8xl"
            >
              EXPERIENCE
              <br />

              <span className="text-[#C1121F]">
                GOD'S WORD
              </span>

              <br />

              EVERY WEEK
            </motion.h1>

            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="mt-10 max-w-2xl text-lg leading-9 text-gray-300"
            >
              Explore powerful sermons, Bible teachings, and inspiring messages
              designed to strengthen your faith, encourage your heart, and help
              you grow in your walk with Christ.
            </motion.p>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: .96,
                }}
                className="flex items-center gap-3 rounded-full bg-[#C1121F] px-8 py-4 font-semibold shadow-xl"
              >
                <Play size={20} />
                Watch Latest
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: .96,
                }}
                className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4"
              >
                <Radio size={20} />
                Watch Live
              </motion.button>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              className="mt-20 flex flex-wrap gap-10"
            >

              <div>
                <h3 className="text-4xl font-black text-[#C1121F]">
                  500+
                </h3>

                <p className="mt-2 text-gray-400">
                  Sermons Available
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-[#C1121F]">
                  Weekly
                </h3>

                <p className="mt-2 text-gray-400">
                  Fresh Messages
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-[#C1121F]">
                  Live
                </h3>

                <p className="mt-2 text-gray-400">
                  Every Sunday
                </p>
              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>










      {/* ================= FEATURED SERMON ================= */}

<section className="relative py-32">

  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C1121F]/10 blur-[180px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="rounded-full border border-[#C1121F]/30 bg-[#C1121F]/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-[#C1121F]">
        Featured Message
      </span>

      <h2 className="mt-8 text-5xl font-black md:text-6xl">
        This Week's
        <span className="text-[#C1121F]"> Featured Sermon</span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
        Be inspired by this week's life-changing message. Experience powerful
        biblical teaching that strengthens faith and equips you to walk daily
        with Christ.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl"
    >

      <div className="grid lg:grid-cols-[1.3fr_.9fr]">

        {/* VIDEO */}

        <div className="group relative">

          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110 lg:h-full"
          />

          <div className="absolute inset-0 bg-black/50" />

          <motion.button
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: .9
            }}
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C1121F] shadow-2xl"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="ml-1 h-10 w-10"
            >
              <path d="M8 5v14l11-7z" />
            </svg>

          </motion.button>

        </div>

        {/* DETAILS */}

        <div className="flex flex-col justify-center p-10 lg:p-14">

          <span className="text-sm uppercase tracking-[0.3em] text-[#C1121F]">
            Sunday Service
          </span>

          <h3 className="mt-6 text-4xl font-black leading-tight">
            Walking In
            <br />
            Unshakable Faith
          </h3>

          <p className="mt-6 leading-8 text-gray-300">
            Discover how unwavering faith enables believers to overcome life's
            challenges, trust God's promises, and experience His supernatural
            power every day.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-gray-400">
                Speaker
              </span>

              <span className="font-semibold">
                Rev. George Adegboye
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-gray-400">
                Date
              </span>

              <span className="font-semibold">
                Sunday Service
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-gray-400">
                Duration
              </span>

              <span className="font-semibold">
                58 Minutes
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-400">
                Scripture
              </span>

              <span className="font-semibold">
                Hebrews 11
              </span>
            </div>

          </div>

          <div className="mt-12 flex flex-wrap gap-5">

            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: .95
              }}
              className="rounded-full bg-[#C1121F] px-8 py-4 font-semibold"
            >
              ▶ Watch Sermon
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: .95
              }}
              className="rounded-full border border-white/20 px-8 py-4"
            >
              Download Notes
            </motion.button>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>














{/* ================= LATEST SERMONS ================= */}

<section className="py-32">

  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left"
    >

      <div>

        <span className="rounded-full border border-[#C1121F]/30 bg-[#C1121F]/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-[#C1121F]">
          Latest Messages
        </span>

        <h2 className="mt-8 text-5xl font-black">
          Grow Through
          <span className="text-[#C1121F]"> Every Message</span>
        </h2>

      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: .96 }}
        className="rounded-full border border-white/20 px-8 py-4 hover:border-[#C1121F]"
      >
        View All Sermons
      </motion.button>

    </motion.div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "Faith That Works",
          speaker: "Rev. George Adegboye",
          date: "Sunday Service",
          image:
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Living By The Word",
          speaker: "Pastor Gbega",
          date: "Midweek Service",
          image:
            "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Kingdom Living",
          speaker: "Guest Minister",
          date: "Conference",
          image:
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Walking In Grace",
          speaker: "Rev. George Adegboye",
          date: "Sunday Service",
          image:
            "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "The Power Of Prayer",
          speaker: "Pastor Emmanuel",
          date: "Prayer Meeting",
          image:
            "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Living Victoriously",
          speaker: "Pastor Wisdom",
          date: "Sunday Service",
          image:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
        },
      ].map((sermon, i) => (

        <motion.div
          key={sermon.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * .1 }}
          whileHover={{
            y: -12,
            scale: 1.02,
          }}
          className="group overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          <div className="relative overflow-hidden">

            <img
              src={sermon.image}
              alt={sermon.title}
              className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-full bg-[#C1121F] px-4 py-2 text-sm font-semibold">
              {sermon.date}
            </div>

          </div>

          <div className="p-8">

            <p className="text-sm uppercase tracking-[0.25em] text-[#C1121F]">
              {sermon.speaker}
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight">
              {sermon.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Discover timeless biblical truths that strengthen your faith,
              inspire your walk with Christ, and equip you for victorious living.
            </p>

            <motion.button
              whileHover={{
                x: 8,
              }}
              className="mt-8 font-semibold text-[#C1121F]"
            >
              ▶ Watch Message →
            </motion.button>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>




















{/* ================= FEATURED SERMON ================= */}

<section className="relative py-32 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#111111] to-[#0B0B0B]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="grid lg:grid-cols-2">

        {/* LEFT IMAGE */}

        <div className="relative h-[320px] sm:h-[450px] lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop"
            alt="Featured Sermon"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

          <div className="absolute left-8 top-8 rounded-full bg-[#C1121F] px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em]">
            Featured
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16">

          <p className="text-sm uppercase tracking-[0.4em] text-[#C1121F]">
            Sermon of the Month
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight lg:text-6xl">
            Living By
            <br />
            The Word
          </h2>

          <p className="mt-8 leading-8 text-gray-300">
            Discover how God's Word transforms every area of life—from your
            faith and family to your purpose and daily decisions. This powerful
            teaching encourages believers to become doers of the Word and not
            hearers only.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-full bg-[#C1121F] px-8 py-4 font-semibold transition hover:scale-105">
              ▶ Watch Now
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 transition hover:border-[#C1121F]">
              Download Notes
            </button>

          </div>

          <div className="mt-10 flex flex-wrap gap-10 text-sm text-gray-400">

            <div>
              <p className="text-white font-semibold">Speaker</p>
              <p>Rev. George Adegboye</p>
            </div>

            <div>
              <p className="text-white font-semibold">Duration</p>
              <p>58 Minutes</p>
            </div>

            <div>
              <p className="text-white font-semibold">Series</p>
              <p>Living Victoriously</p>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  </div>
</section>













{/* ================= SERMON SERIES ================= */}

<section className="relative py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="text-center"
    >
      <span className="rounded-full bg-[#C1121F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#C1121F]">
        Current Teaching Series
      </span>

      <h2 className="mt-8 text-5xl font-black lg:text-6xl">
        Grow Through Every Series
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
        Our teachings are carefully organized into life-changing series that
        help believers grow spiritually, strengthen their faith, and live
        victoriously through God's Word.
      </p>
    </motion.div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "Living Victoriously",
          lessons: "8 Messages",
          color: "from-red-600 to-red-400",
          desc: "Discover your identity in Christ and walk in daily victory."
        },
        {
          title: "Faith That Works",
          lessons: "6 Messages",
          color: "from-blue-600 to-cyan-400",
          desc: "Build unwavering faith that produces visible results."
        },
        {
          title: "Walking in Love",
          lessons: "5 Messages",
          color: "from-pink-600 to-rose-400",
          desc: "Learn God's love and how to express it every day."
        },
        {
          title: "Kingdom Excellence",
          lessons: "4 Messages",
          color: "from-green-600 to-emerald-400",
          desc: "Serve God with excellence in every area of life."
        },
        {
          title: "Power of Prayer",
          lessons: "7 Messages",
          color: "from-violet-600 to-indigo-500",
          desc: "Develop a consistent and effective prayer life."
        },
        {
          title: "Purpose & Destiny",
          lessons: "9 Messages",
          color: "from-orange-500 to-yellow-500",
          desc: "Understand God's unique calling upon your life."
        },
      ].map((series, i) => (

        <motion.div
          key={series.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * .08 }}
          whileHover={{
            y: -12,
            scale: 1.03
          }}
          className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <div
            className={`absolute inset-0 bg-gradient-to-br ${series.color} opacity-10 transition group-hover:opacity-20`}
          />

          <div className="relative">

            <div
              className={`inline-flex rounded-full bg-gradient-to-r ${series.color} px-5 py-2 text-sm font-semibold`}
            >
              {series.lessons}
            </div>

            <h3 className="mt-8 text-3xl font-black">
              {series.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              {series.desc}
            </p>

            <button className="mt-10 rounded-full border border-white/15 px-6 py-3 transition hover:border-[#C1121F] hover:bg-[#C1121F]">
              View Series →
            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>







{/* ================= VIDEO SERMONS ================= */}

<section className="relative py-32 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#0B0B0B] to-[#111111]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <span className="rounded-full bg-[#C1121F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#C1121F]">
        Watch Online
      </span>

      <h2 className="mt-8 text-5xl font-black lg:text-6xl">
        Experience God's Word
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
        Watch powerful messages that will inspire your faith, strengthen your
        walk with Christ, and equip you for victorious living.
      </p>
    </motion.div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "Faith That Overcomes",
          duration: "56 mins",
          image:
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "Living in God's Grace",
          duration: "48 mins",
          image:
            "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop",
        },
        {
          title: "The Power of Prayer",
          duration: "1 hr 05 mins",
          image:
            "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1200&auto=format&fit=crop",
        },
      ].map((video, index) => (

        <motion.div
          key={video.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="group overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          <div className="relative overflow-hidden">

            <img
              src={video.image}
              alt={video.title}
              className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/35" />

            <motion.div
              whileHover={{ scale: 1.15 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C1121F]/90 text-3xl shadow-2xl backdrop-blur-xl">
                ▶
              </div>
            </motion.div>

            <div className="absolute bottom-5 right-5 rounded-full bg-black/60 px-4 py-2 text-sm">
              {video.duration}
            </div>

          </div>

          <div className="p-8">

            <h3 className="text-2xl font-black">
              {video.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              Watch this life-changing teaching and discover biblical truths
              that will strengthen your faith and transform your everyday life.
            </p>

            <button className="mt-8 rounded-full bg-[#C1121F] px-7 py-3 font-semibold transition hover:scale-105">
              Watch Sermon
            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </div>
</section>

    </main>
  );
}