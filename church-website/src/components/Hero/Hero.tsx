import ServiceCarousel from "./ServiceCarousel";
import {
  Church,
  BookOpen,
  Users,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import GeneralOverseer from "../../assets/images/george.jpg";
import ResidentPastor from "../../assets/images/gbega.jpeg";
import {
  Play,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Church,
    title: "Powerful Worship",
    text: "Experience heartfelt worship that draws you into God's presence every service.",
  },
  {
    icon: BookOpen,
    title: "Biblical Teaching",
    text: "Practical messages rooted in Scripture that equip you for everyday living.",
  },
  {
    icon: Users,
    title: "A Loving Family",
    text: "Find genuine relationships and a community where everyone belongs.",
  },
  {
    icon: HeartHandshake,
    title: "Serve With Purpose",
    text: "Discover your gifts and become part of something bigger than yourself.",
  },

];

const Hero = () => {
  return (
    
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0B] pt-18 lg:pt-0 text-white">
      {/* Background */}
      
      {/* Background */}
<div className="absolute inset-0 overflow-hidden">
  <motion.img
    src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2200&auto=format&fit=crop"
    alt="Church"
    className="h-full w-full object-cover opacity-20"
    initial={{ scale: 1.15 }}
    animate={{ scale: 1 }}
    transition={{ duration: 12, ease: "easeOut" }}
  />

  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.15, 0.22, 0.15],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent"
  />
</div>

<div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
  <div className="grid w-full gap-16 lg:grid-cols-[1.4fr_0.8fr]">

    {/* LEFT */}
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="flex flex-col justify-center lg:-ml-48"
    >

      <motion.span
        variants={{
          hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.7 }}
        className="text-sm uppercase tracking-[0.45em] text-[#C1121F]"
      >
        RHEMA CHAPEL INTERNATIONAL CHURCHES, IKORODU
      </motion.span>

      <motion.h1
        variants={{
          hidden: {
            opacity: 0,
            x: -80,
            filter: "blur(20px)",
          },
          show: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 1 }}
        className="mt-8 text-6xl font-black leading-none md:text-7xl xl:text-8xl"
      >
        HOME
        <br />
        <span className="text-[#C1121F]">OF</span>
        <br />
        THE
        <br />
        <motion.span
          animate={{
            textShadow: [
              "0 0 0px #f30000",
              "0 0 25px #000000",
              "0 0 0px #000000",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-[#C1121F]"
        >
          BLESSED
        </motion.span>
        <br />
        PEOPLE
      </motion.h1>

      <motion.p
        variants={{
          hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
          },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.9 }}
        className="mt-10 max-w-xl text-lg leading-8 text-gray-300"
      >
        More than a church, we're a family where people encounter God,
        discover purpose, and grow together in Christ.
      </motion.p>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          show: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ duration: 0.8 }}
        className="mt-12 flex gap-5"
      >
        <motion.button
          whileHover={{
            scale: 1.08,
            y: -4,
            boxShadow: "0px 15px 35px rgba(193,18,31,.45)",
          }}
          whileTap={{ scale: .95 }}
          className="rounded-full bg-[#C1121F] px-8 py-4 font-semibold"
        >
          Plan Your Visit
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.08,
            y: -4,
            borderColor: "#C1121F",
          }}
          whileTap={{ scale: .95 }}
          className="rounded-full border border-white/20 px-8 py-4"
        >
          Watch Live
        </motion.button>
      </motion.div>

    </motion.div>

    {/* RIGHT */}
    <motion.div
      initial={{
        opacity: 0,
        x: 150,
        scale: .85,
        rotate: 4,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration: 1.3,
        delay: .5,
        ease: "easeOut",
      }}
      className="hidden lg:flex items-center justify-end pl-28"
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ServiceCarousel />
      </motion.div>
    </motion.div>

  </div>
</div>






      <section className="relative overflow-hidden bg-[#080808] py-36 text-white">

  {/* Floating Background Glow */}
  <motion.div
    animate={{
      x: [0, 60, 0],
      y: [0, -40, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C1121F]/10 blur-[150px]"
  />

  <motion.div
    animate={{
      y: [0, 40, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[150px]"
  />

  {/* Animated Grid */}
  <motion.div
    animate={{
      opacity: [0.02, 0.05, 0.02],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
    }}
    className="absolute inset-0"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
      backgroundSize: "70px 70px",
    }}
  />















  <div className="relative mx-auto w-full max-w-[1600px] px-8 lg:px-16 xl:px-34">

    {/* Heading */}

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: .2,
          },
        },
      }}
      className="mx-auto max-w-3xl text-center"
    >

      <motion.p
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
          },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
        }}
        className="uppercase tracking-[0.45em] text-[#C1121F] "
      >
        WHAT AWAITS YOU
      </motion.p>

      <motion.h2
        variants={{
          hidden: {
            opacity: 0,
            y: 60,
            filter: "blur(20px)",
          },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 1 }}
        className="mt-6 text-5xl font-black leading-none md:text-7xl"
      >
        COME
        <br />
        CURIOUS.
        <br />
        LEAVE
        <motion.span
          animate={{
            textShadow: [
              "0 0 0px #C1121F",
              "0 0 25px #C1121F",
              "0 0 0px #C1121F",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-[#C1121F]"
        >
          {" "}CHANGED.
        </motion.span>
      </motion.h2>

      <motion.p
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
        className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-400"
      >
        Every gathering is an opportunity to encounter God's presence,
        connect with authentic people, and discover purpose for your life.
      </motion.p>

    </motion.div>

    {/* Cards */}

    <div className="mt-24 flex justify-center">
  <div className="grid w-full max-w-[1400px] gap-8 md:grid-cols-2">

      {features.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 80,
              rotate: index % 2 === 0 ? -4 : 4,
              scale: .9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .8,
              delay: index * .15,
            }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            animate={{
              y: [0, -5, 0],
            }}
            className={`group relative overflow-hidden border border-white/10 bg-white/5 p-10 backdrop-blur-xl ${
              index % 2 === 0
                ? "rounded-[40px] rounded-br-[90px]"
                : "rounded-[40px] rounded-tl-[90px]"
            }`}
          >

            {/* Glow */}

            <motion.div
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#C1121F]/20 blur-3xl"
            />

            {/* Number */}

            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                delay: .4 + index * .15,
                type: "spring",
              }}
              className="absolute right-8 top-8 text-6xl font-black text-white/5"
            >
              0{index + 1}
            </motion.span>

            {/* Icon */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              whileHover={{
                rotate: 12,
                scale: 1.15,
              }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C1121F]/15"
            >
              <Icon className="h-8 w-8 text-[#C1121F]" />
            </motion.div>

            <h3 className="mt-8 text-3xl font-bold">
              {item.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {item.text}
            </p>

            <motion.button
              whileHover={{ x: 8 }}
              className="mt-8 flex items-center gap-3 font-semibold text-[#C1121F]"
            >
              Learn More
              <ArrowRight size={18} />
            </motion.button>

          </motion.div>

        );
      })}
</div>
    </div>

  </div>

</section>






    
    <section className="relative overflow-hidden bg-[#090909] py-36">

      <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[170px]" />

      <div className="mx-auto w-full px-8 lg:px-16 xl:px-24">

        <div className="text-center">

          <p className="tracking-[0.45em] uppercase text-red-600">
            OUR LEADERS
          </p>

          <h2 className="mt-5 text-6xl font-black text-white">
            MEET OUR SHEPHERDS
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Faithful servants committed to raising lives through God's Word,
            prayer and genuine leadership.
          </p>

        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">

  {/* General Overseer */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: .8 }}
    className="group"
  >
    <div className="overflow-hidden rounded-[32px] bg-[#111] border border-white/10">

      <div className="flex justify-center bg-black pt-10">
        <img
          src={GeneralOverseer}
          alt="General Overseer"
          className="h-[380px] w-auto object-contain transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="border-t border-white/10 p-8">

        <Quote className="mb-4 text-red-500" />

        <h3 className="text-3xl font-bold text-white">
          Rev. George Adegboye
        </h3>

        <p className="mt-2 font-medium text-red-500">
          General Overseer
        </p>

        <p className="mt-5 leading-8 text-gray-400">
          Our mission is to raise people who know Christ,
          walk in purpose, and impact generations through
          the transforming power of God's Word.
        </p>

      </div>

    </div>
  </motion.div>

  {/* Resident Pastor */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: .8, delay: .2 }}
    className="group"
  >
    <div className="overflow-hidden rounded-[32px] bg-[#111] border border-white/10">

      <div className="flex justify-center bg-black pt-10">
        <img
          src={ResidentPastor}
          alt="Resident Pastor"
          className="h-[380px] w-auto object-contain transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="border-t border-white/10 p-8">

        <Quote className="mb-4 text-red-500" />

        <h3 className="text-3xl font-bold text-white">
          Pastor Gbenga Oladipo
        </h3>

        <p className="mt-2 font-medium text-red-500">
          Resident Pastor
        </p>

        <p className="mt-5 leading-8 text-gray-400">
          Every service is an opportunity to encounter God,
          grow deeper in faith and become part of a loving
          family where lives are transformed.
        </p>

      </div>

    </div>
  </motion.div>

</div>

      </div>
    </section>
    <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="relative overflow-hidden bg-[#080808] py-36"
>
  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-[160px]" />

  <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.5fr_.8fr]">

    {/* LEFT */}

    <motion.div
      initial={{ x: -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="relative h-[500px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1800"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 transition duration-500 group-hover:scale-110">
          <Play
            fill="white"
            className="ml-1 text-white"
          />
        </button>

        <div className="absolute bottom-10 left-10">

          <p className="tracking-[0.35em] uppercase text-red-500">
            Latest Sermon
          </p>

          <h3 className="mt-3 text-5xl font-black text-white">
            Living By Faith
          </h3>

          <p className="mt-4 max-w-lg text-gray-300">
            Discover practical biblical principles that strengthen
            your faith in everyday life.
          </p>

        </div>

      </div>
    </motion.div>

    {/* RIGHT */}

    <motion.div
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
    >

      <span className="tracking-[0.35em] uppercase text-red-500">
        Upcoming Event
      </span>

      <h3 className="mt-6 text-4xl font-black text-white">
        Night of
        <br />
        Encounter
      </h3>

      <div className="mt-10 space-y-7">

        <div className="flex items-center gap-4 text-gray-300">
          <CalendarDays className="text-red-500" />
          Friday, August 15
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <Clock3 className="text-red-500" />
          10:00 PM
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <MapPin className="text-red-500" />
          Rhema Chapel Auditorium
        </div>

      </div>

      <p className="mt-10 leading-8 text-gray-400">
        Join us for an unforgettable night of worship,
        prayer, miracles and the ministry of God's Word.
      </p>

      <button className="mt-12 flex items-center gap-3 rounded-full bg-red-600 px-7 py-4 font-semibold text-white transition hover:gap-5">
        Reserve a Seat

        <ArrowRight size={18} />
      </button>

    </motion.div>

  </div>
</motion.section>
    </section>
    
  );
};

export default Hero;