import { motion } from "framer-motion";
import RhemaChapel from "../../assets/images/rhema.jpeg";
import RhemaMain from "../../assets/images/rhemachapel.jpeg";

export default function About() {
  return (
    <main className="bg-[#0B0B0B] text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514894786522-9cdb3dd43d0b?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <section className="py-32">
  <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

    {/* IMAGE */}
    {/* IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative mx-auto w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-none"
>
  <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-[#C1121F]/20 blur-[80px] sm:h-40 sm:w-40 lg:-right-8 lg:-bottom-8 lg:h-56 lg:w-56 lg:blur-[120px]" />

  <img
  src={RhemaMain}
  alt="Rhema Chapel"
  className="relative mx-auto h-[300px] w-full object-contain sm:h-[380px] md:h-[500px] lg:h-[650px] lg:w-[500px]"
/>
</motion.div>

    {/* TEXT */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
    >
      <>
  <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
    Rhema Chapel International Churches
  </span>

  <h2 className="mt-8 text-5xl font-black leading-tight">
    A Church
    <br />
    for the Community
  </h2>

  <div className="mt-8 space-y-6 text-lg leading-9 text-gray-300">

    <p>
      Rhema Chapel International Churches, Ikorodu, is one of the thriving
      branches of the Rhema family, committed to bringing the transforming power
      of God's Word to individuals, families, and communities throughout Ikorodu
      and its surrounding areas.
    </p>

    <p>
  Rhema Chapel International Churches, Ikorodu is a Christ-centered family where
  people encounter God, grow through His Word, discover their purpose, and are
  equipped to make a lasting impact in their community and beyond.
</p>

    <p>
      Whether you are visiting for the very first time or have been part of our
      family for years, Rhema Chapel International Churches, Ikorodu, is a place
      where you can encounter God, build meaningful relationships, discover your
      God-given purpose, and become everything He has called you to be.
    </p>

  </div>
</>
    </motion.div>

  </div>
</section>

<section className="py-32">
  <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

    {/* TEXT */}
    <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:mx-0 lg:max-w-none"
>
      <>
  <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
    Rhema Chapel international Churches, Ikorodu
  </span>

  <h2 className="mt-8 text-5xl font-black leading-tight">
    A Church
    <br />
    for the Community
  </h2>

  <div className="mt-8 space-y-6 text-lg leading-9 text-gray-300">

    <p>
      Rhema Chapel International Churches, Ikorodu, is one of the thriving
      branches of the Rhema family, committed to bringing the transforming power
      of God's Word to individuals, families, and communities throughout Ikorodu
      and its surrounding areas.
    </p>

    <p>
  At Rhema Chapel International Churches, Ikorodu, we are a Christ-centered 
  family committed to helping people encounter God, grow through His Word, 
  build meaningful relationships, and impact our community by living 
  out the love and purpose of Jesus Christ every day.
</p>

    <p>
  Whether you're visiting for the first time or have been with us for years,
  Rhema Chapel International Churches, Ikorodu is a place to encounter God,
  grow in faith, build meaningful relationships, and discover your purpose in
  Christ.
</p>

  </div>
</>
    </motion.div>

    {/* IMAGE */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative mx-auto w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-none"
>
  <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-[#C1121F]/20 blur-[80px] sm:h-40 sm:w-40 lg:-right-8 lg:-bottom-8 lg:h-56 lg:w-56 lg:blur-[120px]" />

  <img
    src={RhemaChapel}
    alt="Rhema Ikorodu"
    className="relative h-[320px] w-full rounded-[24px] object-cover sm:h-[420px] md:h-[520px] lg:h-[650px] lg:rounded-[40px]"
  />
</motion.div>

  </div>
</section>
          
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.h2
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="text-5xl font-black"
          >
            The Journey
          </motion.h2>

          <div className="mt-20 grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{opacity:0,x:-50}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
            >
              <p className="text-gray-300 leading-9">
                Rhema Chapel International Churches was birthed from a God-given
                vision to proclaim the uncompromising truth of Scripture and
                raise people whose lives reflect Christ. Through consistent
                teaching of God's Word, passionate worship, fervent prayer, and
                intentional discipleship, the ministry has impacted countless
                individuals, families, and communities.
              </p>

              <p className="mt-8 text-gray-300 leading-9">
                Today, Rhema Chapel continues to serve as a place where people
                encounter God, discover purpose, develop spiritual maturity, and
                become equipped to influence the world for Christ.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                ["1987","The ministry was inaugurated with a vision to preach God's Word."],
                ["Growth","New branches were established, reaching more communities."],
                ["Today","Lives continue to be transformed through worship, prayer, and discipleship."]
              ].map(([year,text],i)=>(
                <motion.div
                  key={year}
                  initial={{opacity:0,x:50}}
                  whileInView={{opacity:1,x:0}}
                  viewport={{once:true}}
                  transition={{delay:i*.2}}
                  className="relative rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
                >
                  <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-[#C1121F]" />
                  <h3 className="text-3xl font-bold text-[#C1121F]">{year}</h3>
                  <p className="mt-4 text-gray-300 leading-8">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="py-32">
  <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <span className="rounded-full bg-[#C1121F]/10 px-5 py-2 uppercase tracking-[.3em] text-[#C1121F]">
        Our Vision
      </span>

      <h2 className="mt-8 text-5xl font-black">
        Raising People
        <br />
        Who Live By
        <span className="text-[#C1121F]"> God's Word</span>
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-300">
        Our vision is to raise believers who know Christ deeply,
        understand His Word, walk in His power, and positively influence
        every sphere of society for the Kingdom of God.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
    >
      <h3 className="text-3xl font-bold">
        Our Vision Statement
      </h3>

      <p className="mt-6 text-gray-300 leading-9">
        To build a Christ-centred church where lives are transformed,
        leaders are raised, families are strengthened and communities are
        impacted through the living Word of God.
      </p>
    </motion.div>

  </div>
</section>



<section className="py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="rounded-full bg-[#C1121F]/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-[#C1121F]">
        What Makes Us Different
      </span>

      <h2 className="mt-8 text-5xl font-black">
        Why People Call
        <span className="text-[#C1121F]"> Rhema </span>
        Home
      </h2>

      <p className="mx-auto mt-8 max-w-3xl leading-8 text-gray-300">
        More than a church building, Rhema Chapel is a family committed to
        helping people grow spiritually, discover purpose, build meaningful
        relationships and impact society through Christ.
      </p>
    </motion.div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Bible-Based Teaching",
          text: "Every message is rooted in Scripture and presented in a practical way that transforms everyday living."
        },
        {
          title: "Passionate Worship",
          text: "Our worship creates an atmosphere where people freely encounter God's presence."
        },
        {
          title: "Loving Community",
          text: "We believe everyone matters and everyone deserves a place to belong."
        },
        {
          title: "Purpose & Impact",
          text: "We equip believers to influence their homes, workplaces and communities for Christ."
        }
      ].map((item, i) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * .15 }}
          whileHover={{
            y: -12,
            scale: 1.03
          }}
          className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-6 leading-8 text-gray-300">
            {item.text}
          </p>
        </motion.div>

      ))}

    </div>

  </div>
</section>


<section className="py-32 bg-gradient-to-b from-transparent to-white/5">

<div className="mx-auto max-w-7xl px-6 lg:px-10">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-center"
>

<h2 className="text-5xl font-black">
Making An
<span className="text-[#C1121F]"> Eternal Impact</span>
</h2>

<p className="mx-auto mt-8 max-w-3xl text-gray-300 leading-8">
Every ministry, outreach and gathering exists to glorify God while touching
lives both inside and outside the church walls.
</p>

</motion.div>

<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

{[
["Biblical Teaching","Teaching God's Word with clarity."],
["Community Outreach","Serving communities through practical love."],
["Leadership Development","Raising faithful leaders."],
["Discipleship","Helping believers grow daily in Christ."]
].map(([title,text],i)=>(

<motion.div
key={title}
initial={{opacity:0,scale:.9}}
whileInView={{opacity:1,scale:1}}
viewport={{once:true}}
transition={{delay:i*.15}}
className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center"
>

<h3 className="text-2xl font-bold text-[#C1121F]">
{title}
</h3>

<p className="mt-5 leading-8 text-gray-300">
{text}
</p>

</motion.div>

))}

</div>

</div>

</section>



<section className="py-32">

<div className="mx-auto max-w-7xl px-6 lg:px-10">

<div className="grid gap-16 lg:grid-cols-2">

<motion.div
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
>

<span className="rounded-full bg-[#C1121F]/10 px-5 py-2 uppercase tracking-[0.3em] text-[#C1121F]">
Our Beliefs
</span>

<h2 className="mt-8 text-5xl font-black">
Our Faith Is Built
On God's Word
</h2>

<p className="mt-8 leading-9 text-gray-300">
Everything we believe is founded upon the Bible as the inspired and infallible
Word of God. We are committed to proclaiming Jesus Christ as Lord and Saviour,
raising disciples and demonstrating God's love through practical service.
</p>

</motion.div>

<div className="space-y-6">

{[
"Jesus Christ is the Son of God.",
"The Bible is God's inspired Word.",
"Salvation comes by grace through faith.",
"The Holy Spirit empowers believers.",
"Prayer changes lives.",
"We live with hope in Christ's return."
].map((belief,i)=>(

<motion.div
key={belief}
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{delay:i*.1}}
className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
>

{belief}

</motion.div>

))}

</div>

</div>

</div>

</section>



<section className="py-32">

<div className="mx-auto max-w-7xl px-6 lg:px-10">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-center"
>

<h2 className="text-5xl font-black">
Life At
<span className="text-[#C1121F]"> Rhema</span>
</h2>

<p className="mx-auto mt-8 max-w-3xl text-gray-300 leading-8">
Church extends beyond Sundays. Throughout the week, members grow through
discipleship, fellowship, prayer meetings, evangelism, leadership development,
and serving together.
</p>

</motion.div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

{[
"Sunday Worship",
"Bible Study",
"Prayer Meetings",
"Evangelism",
"Leadership Training",
"Community Fellowship"
].map((item,i)=>(

<motion.div
key={item}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*.12}}
whileHover={{y:-10}}
className="rounded-[30px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl text-center"
>

<h3 className="text-2xl font-bold">
{item}
</h3>

</motion.div>

))}

</div>

</div>

</section>

<section className="py-32">

<div className="mx-auto max-w-5xl px-6">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-center"
>

<h2 className="text-5xl font-black">
Frequently Asked Questions
</h2>

</motion.div>

<div className="mt-20 space-y-6">

{[
[
"Do I need to be a member to attend?",
"No. Everyone is welcome to worship with us."
],
[
"What should I wear?",
"Come as you are. We welcome everyone."
],
[
"Are children catered for?",
"Yes. We have dedicated children's ministries."
],
[
"Can I join a department?",
"Absolutely. We encourage every member to serve."
]

].map(([q,a],i)=>(

<motion.div
key={q}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{delay:i*.1}}
className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
>

<h3 className="text-2xl font-bold">
{q}
</h3>

<p className="mt-4 leading-8 text-gray-300">
{a}
</p>

</motion.div>

))}

</div>

</div>

</section>

<section className="py-36">

<motion.div
initial={{opacity:0,scale:.95}}
whileInView={{opacity:1,scale:1}}
viewport={{once:true}}
className="mx-auto max-w-6xl rounded-[45px] border border-white/10 bg-gradient-to-r from-[#C1121F]/20 via-white/5 to-[#C1121F]/20 p-16 text-center backdrop-blur-2xl"
>

<h2 className="text-6xl font-black">
There's A Place
For You
</h2>

<p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
Whether you're exploring faith, searching for a church home, or looking for a
community where you can grow spiritually, Rhema Chapel International Churches
welcomes you with open arms. We would love to worship, pray and grow together
with you.
</p>

<div className="mt-14 flex flex-wrap justify-center gap-6">

<button className="rounded-full bg-[#C1121F] px-10 py-5 font-semibold transition hover:scale-105">
Plan Your Visit
</button>

<button className="rounded-full border border-white/20 px-10 py-5 font-semibold transition hover:border-[#C1121F]">
Contact Us
</button>

</div>

</motion.div>

</section>
    </main>
  );
}
