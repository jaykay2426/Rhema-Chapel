import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ArrowRight, HeartHandshake, Building2, Users, HandHeart } from "lucide-react";


const help = [
{
title:"Give",
icon:"💰",
text:"Support our projects financially."
},
{
title:"Pray",
icon:"🙏",
text:"Cover every project in prayer."
},
{
title:"Volunteer",
icon:"🤝",
text:"Serve with your gifts and time."
},
{
title:"Share",
icon:"📢",
text:"Invite others to be part of the vision."
},
];

const projects = [
  {
    title: "Children's Camp 2026",
    description:
      "A life-changing camp experience designed to raise children spiritually, mentally, and socially through teachings, activities, mentorship, and fellowship.",
    icon: Users,
    status: "Upcoming - August",
  },

  {
    title: "Church Building Project",
    description:
      "Supporting the expansion and development of our church facility to create a better environment for worship, teaching, fellowship, and community impact.",
    icon: Building2,
    status: "Ongoing",
  },

  {
    title: "Children's Church Renovation",
    description:
      "Creating a beautiful, safe, and inspiring environment where children can learn about God and grow in faith.",
    icon: HeartHandshake,
    status: "In Progress",
  },

  {
    title: "Power & Generator Project",
    description:
      "Providing reliable power solutions that support worship services, media, children's ministry, and church activities.",
    icon: Building2,
    status: "Ongoing",
  },

  {
    title: "Sound System Upgrade",
    description:
      "Improving our audio equipment to provide excellent worship experiences, clearer teaching, and better media production.",
    icon: HandHeart,
    status: "Upcoming",
  },

  {
    title: "Community Outreach",
    description:
      "Taking the love of Christ beyond the church through food support, evangelism, charity programs, and community assistance.",
    icon: HeartHandshake,
    status: "Active",
  },

];


export default function ChurchProjects() {

return (

<main className="overflow-hidden bg-[#0B0B0B] text-white pt-35">


{/* HERO */}

<section className="relative min-h-[80vh] flex items-center">

<div className="absolute inset-0">

<img
src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2000"
className="h-full w-full object-cover opacity-20"
/>

<div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]"
/>

</div>


<div className="relative mx-auto max-w-7xl px-6 lg:px-10">


<motion.p

initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}

className="uppercase tracking-[0.4em] text-[#C1121F]"
>
Rhema Chapel International Churches
</motion.p>



<motion.h1

initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}

className="mt-8 text-6xl font-black leading-none md:text-8xl"

>
BUILDING
<br/>

<span className="text-[#C1121F]">
GOD'S HOUSE
</span>

<br/>

CHANGING
<br/>

LIVES

</motion.h1>



<motion.p

initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}

className="mt-10 max-w-3xl text-lg leading-8 text-gray-300"

>

Every project is an opportunity to serve God, strengthen His church,
raise the next generation, and impact our community. Together, we are
building a place where lives are transformed and God's purpose is fulfilled.

</motion.p>


</div>

</section>





{/* PROJECTS */}


<section className="py-32">

<div className="mx-auto max-w-7xl px-6 lg:px-10">


<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}

>

<h2 className="text-5xl font-black">

Our Current Projects

</h2>


<p className="mt-5 max-w-2xl text-gray-300">

Discover the different ways we are growing, improving,
and serving God's people.

</p>

</motion.div>




<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


{
projects.map((project,index)=>{

const Icon = project.icon;


return (

<motion.div

key={project.title}

initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}

transition={{delay:index*.1}}

whileHover={{
y:-10
}}

className="
rounded-[35px]
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
"

>


<div className="flex items-center justify-between">


<div className="rounded-2xl bg-[#C1121F]/20 p-4">

<Icon size={30}/>

</div>


<span className="rounded-full bg-white/10 px-4 py-2 text-xs">

{project.status}

</span>


</div>



<h3 className="mt-8 text-2xl font-black">

{project.title}

</h3>


<p className="mt-5 leading-8 text-gray-300">

{project.description}

</p>


<button className="
mt-8
flex
items-center
gap-2
text-[#C1121F]
font-semibold
">

Support Project

<ArrowRight size={18}/>

</button>


</motion.div>


)

})

}


</div>

</div>

</section>








{/* WHY WE BUILD */}

<section className="border-y border-white/10 bg-[#111111] py-32">
  <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <img
        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600"
        className="h-[650px] w-full rounded-[40px] object-cover"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <p className="uppercase tracking-[0.35em] text-[#C1121F]">
        WHY WE BUILD
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight">
        More Than
        <br />
        Buildings
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-300">
        Every classroom prepared, every child reached, every soul won and every
        outreach completed reflects God's heart for people.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-300">
        Our projects aren't simply construction projects—they're Kingdom
        assignments designed to impact generations.
      </p>

      <div className="mt-10 grid gap-5">

        {[
          "Kingdom Impact",
          "Community Transformation",
          "Future Generations",
          "Eternal Value",
        ].map((item) => (
          <div key={item} className="flex items-center gap-4">
            <CheckCircle2 className="text-[#C1121F]" />
            <span className="text-lg">{item}</span>
          </div>
        ))}

      </div>
    </motion.div>

  </div>
</section>











<section className="py-32">

<div className="mx-auto max-w-7xl px-6">

<h2 className="text-center text-5xl font-black">

How You Can Help

</h2>

<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

{help.map((item)=>(

<div
key={item.title}
className="rounded-[35px] border border-white/10 bg-white/5 p-10 text-center transition hover:-translate-y-3"
>

<div className="text-6xl">

{item.icon}

</div>

<h3 className="mt-8 text-2xl font-bold">

{item.title}

</h3>

<p className="mt-4 text-gray-300">

{item.text}

</p>

</div>

))}

</div>

</div>

</section>






<section className="bg-[#111111] py-32">

<div className="mx-auto max-w-5xl">

<div className="rounded-[40px] border border-white/10 bg-white/5 p-16 backdrop-blur-xl">

<h2 className="text-5xl font-black">

Support The Vision

</h2>

<div className="mt-16 grid gap-10 md:grid-cols-2">

<div>

<h3 className="text-2xl font-bold text-[#C1121F]">

Church Main Account

</h3>

<div className="mt-8 space-y-5 text-lg">

<p>Bank: Zenith Bank</p>

<p>Account Name: Rhema Chapel International Churches</p>

<p className="font-bold text-3xl">

0123456789

</p>

</div>

</div>

<div>

<h3 className="text-2xl font-bold text-[#C1121F]">

Samaritan Account

</h3>

<div className="mt-8 space-y-5 text-lg">

<p>Bank: GTBank</p>

<p>Account Name: RCIC Samaritan</p>

<p className="font-bold text-3xl">

1234567890

</p>

</div>

</div>

</div>

</div>

</div>

</section>


</main>

)

}