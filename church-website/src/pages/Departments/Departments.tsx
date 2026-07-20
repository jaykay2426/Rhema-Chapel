import { motion } from "framer-motion";
import {
  Music4,
  Mic2,
  Users,
  HeartHandshake,
  Baby,
  ShieldCheck,
  Camera,
  Radio,
  BookOpen,
  HandHelping,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const featuredDepartments = [
  {
    title: "Worship Ministry",
    icon: Music4,
    color: "from-red-500 to-red-700",
    description:
      "Leading God's people into His presence through passionate worship, excellence, and musical ministry.",
  },
  {
    title: "Media Department",
    icon: Camera,
    color: "from-blue-500 to-cyan-600",
    description:
      "Communicating the Gospel through photography, livestreams, sound, projection and digital media.",
  },
  {
    title: "Children's Church",
    icon: Baby,
    color: "from-orange-500 to-yellow-500",
    description:
      "Raising children with biblical values through engaging teaching, worship and activities.",
  },
  {
    title: "Prayer Ministry",
    icon: HeartHandshake,
    color: "from-purple-500 to-pink-500",
    description:
      "Standing in the gap through intercession, spiritual warfare and consistent prayer support.",
  },
];

const departments = [
  {
    icon: Mic2,
    title: "Choir",
    description:
      "Using music and worship to glorify God and lead the congregation into His presence.",
  },
  {
    icon: Music4,
    title: "Instrumentalists",
    description:
      "Serving with excellence through musical skill and heartfelt worship.",
  },
  {
    icon: Camera,
    title: "Media",
    description:
      "Handling projection, livestreams, photography, videography and social media.",
  },
  {
    icon: Radio,
    title: "Sound",
    description:
      "Ensuring every service is heard clearly through professional audio management.",
  },
  {
    icon: Users,
    title: "Ushering",
    description:
      "Welcoming members and visitors while creating an atmosphere of love and order.",
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    description:
      "Teaching children God's Word in a fun, engaging and life-changing way.",
  },
  {
    icon: BookOpen,
    title: "Bible Study",
    description:
      "Helping believers grow deeper through systematic study of God's Word.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Providing safety and maintaining a secure worship environment.",
  },
  {
    icon: HandHelping,
    title: "Outreach",
    description:
      "Reaching communities with the Gospel through evangelism and compassionate service.",
  },
];

export default function Departments() {
  return (
    <main className="overflow-hidden bg-[#0B0B0B] text-white">

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2200&auto=format&fit=crop"
            className="h-full w-full object-cover opacity-20"
            alt=""
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/90 to-[#0B0B0B]" />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 blur-[170px]"
          />

        </div>

        <div className="relative mx-auto flex w-full max-w-7xl items-center px-6 lg:px-10">

          <div className="max-w-4xl">

            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm uppercase tracking-[0.35em] text-[#C1121F]"
            >
              Ministries & Departments
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 text-6xl font-black leading-none md:text-8xl"
            >
              SERVE.
              <br />

              <span className="text-[#C1121F]">
                GROW.
              </span>

              <br />

              BELONG.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              viewport={{ once: true }}
              className="mt-10 max-w-3xl text-lg leading-9 text-gray-300"
            >
              Every department at Rhema Chapel International Churches exists
              to glorify God, serve people with excellence, and provide
              opportunities for every believer to discover their gifts,
              develop spiritually, and become actively involved in building
              God's Kingdom.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: .4 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <button className="rounded-full bg-[#C1121F] px-8 py-4 font-semibold transition hover:scale-105">
                Join A Department
              </button>

              <button className="rounded-full border border-white/20 px-8 py-4 transition hover:border-[#C1121F]">
                Learn More
              </button>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= FEATURED ================= */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="text-sm uppercase tracking-[0.35em] text-[#C1121F]">
              Featured Ministries
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Find Your Place To Serve
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Every gift matters. Every member belongs. Whether your passion
              is worship, media, teaching, hospitality or outreach, there is
              a place where your gifts can impact lives.
            </p>

          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {featuredDepartments.map((dept, i) => {

              const Icon = dept.icon;

              return (

                <motion.div
                  key={dept.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * .15 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
                >

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-10 group-hover:opacity-20 transition`}
                  />

                  <div className="relative">

                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${dept.color}`}
                    >
                      <Icon size={36} />
                    </div>

                    <h3 className="mt-8 text-3xl font-bold">
                      {dept.title}
                    </h3>

                    <p className="mt-6 leading-8 text-gray-300">
                      {dept.description}
                    </p>

                    <button className="mt-10 inline-flex items-center gap-3 text-[#C1121F] font-semibold">

                      Learn More

                      <ArrowRight size={18} />

                    </button>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

            {/* ================= ALL DEPARTMENTS ================= */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-[#C1121F]">
              <Sparkles size={16} />
              Our Departments
            </span>

            <h2 className="mt-6 text-5xl font-black">
              There Is A Place For Everyone
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              God has uniquely gifted every believer. Our departments provide
              opportunities to discover your gifts, develop your potential and
              serve with excellence while making lasting Kingdom impact.
            </p>

          </motion.div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

            {departments.map((department, index) => {

              const Icon = department.icon;

              return (

                <motion.div
                  key={department.title}
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .08,
                    duration: .6,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all"
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-600/15 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <motion.div
                    whileHover={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: .8,
                    }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C1121F]"
                  >
                    <Icon size={30} />
                  </motion.div>

                  <h3 className="relative mt-8 text-2xl font-bold">
                    {department.title}
                  </h3>

                  <p className="relative mt-5 leading-8 text-gray-300">
                    {department.description}
                  </p>

                  <motion.button
                    whileHover={{
                      x: 8,
                    }}
                    className="relative mt-10 inline-flex items-center gap-3 font-semibold text-[#C1121F]"
                  >
                    Learn More

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-2"
                    />
                  </motion.button>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* ================= HOW TO JOIN ================= */}

      <section className="py-28 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="uppercase tracking-[0.35em] text-[#C1121F]">
              Become A Volunteer
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Joining Is Simple
            </h2>

          </motion.div>

          <div className="relative mt-24">

            <div className="absolute left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#C1121F] to-transparent lg:block" />

            {[
              {
                step: "01",
                title: "Attend Services",
                text: "Become part of the church family by worshipping and connecting with other members regularly.",
              },
              {
                step: "02",
                title: "Meet A Leader",
                text: "Speak with any departmental leader or church pastor about where you would like to serve.",
              },
              {
                step: "03",
                title: "Receive Training",
                text: "Every volunteer is equipped with practical guidance and ministry training before serving.",
              },
              {
                step: "04",
                title: "Serve With Excellence",
                text: "Begin using your gifts to glorify God while impacting lives through faithful service.",
              },
            ].map((item, i) => (

              <motion.div
                key={item.step}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * .15,
                }}
                className={`mb-14 flex ${
                  i % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }`}
              >

                <div className="relative w-full rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:w-[46%]">

                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#C1121F] text-xl font-black">
                    {item.step}
                  </div>

                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-300">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
          {/* ================= WHY SERVE ================= */}

      <section className="py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="uppercase tracking-[0.35em] text-[#C1121F]">
              Why Serve?
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Ministry Is More Than
              <br />
              Filling A Position
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Serving in God's house is an opportunity to worship, grow,
              develop your gifts and become part of something much bigger
              than yourself.
            </p>

          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                number: "15+",
                title: "Departments",
                text: "Different ministries where every believer can serve.",
              },
              {
                number: "100%",
                title: "Kingdom Impact",
                text: "Every act of service contributes to changing lives.",
              },
              {
                number: "1",
                title: "Church Family",
                text: "Serving together with one heart and one vision.",
              },
              {
                number: "∞",
                title: "Lives Touched",
                text: "Every service creates opportunities for transformation.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .12,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
              >

                <h3 className="text-6xl font-black text-[#C1121F]">
                  {item.number}
                </h3>

                <h4 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-4 leading-8 text-gray-300">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= SCRIPTURE ================= */}

      <section className="py-32">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <motion.div
            initial={{
              opacity: 0,
              scale: .9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#C1121F]/15 to-white/5 p-16 backdrop-blur-2xl"
          >

            <BookOpen
              className="mx-auto text-[#C1121F]"
              size={50}
            />

            <h2 className="mt-8 text-4xl font-black">
              "...Whatever you do,
              work at it with all your heart,
              as working for the Lord..."
            </h2>

            <p className="mt-8 text-xl font-semibold text-[#C1121F]">
              Colossians 3:23
            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[45px] bg-gradient-to-r from-[#C1121F] to-[#790B12] p-14 lg:p-20"
          >

            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

            <div className="relative">

              <span className="uppercase tracking-[0.35em] text-white/70">
                Start Serving Today
              </span>

              <h2 className="mt-6 max-w-3xl text-5xl font-black leading-tight">
                God Has Given You Gifts.
                The Church Has A Place
                For You To Use Them.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/80">
                Whether your passion is worship, media, hospitality,
                evangelism, prayer, children's ministry or administration,
                there is a department waiting for you.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <button className="rounded-full bg-white px-8 py-4 font-bold text-[#C1121F] transition hover:scale-105">
                  Join A Department
                </button>

                <button className="rounded-full border border-white/30 px-8 py-4 transition hover:bg-white/10">
                  Contact A Pastor
                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}

