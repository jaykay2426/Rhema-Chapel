import SectionHeading from "../../components/SectionHeading/SectionHeading";

const leadership = [
  {
    name: "Pastor Wisdom",
    role: "Senior Pastor",
    bio: "Leads the church with a focus on faith, discipleship, and Kingdom service.",
  },
  {
    name: "Pastor Emmanuel",
    role: "Teaching Pastor",
    bio: "Provides Bible-based teaching and mentorship for spiritual growth.",
  },
  {
    name: "Pastor Sophia",
    role: "Women & Outreach",
    bio: "Oversees outreach programs and discipleship for women in the church.",
  },
];

export default function Leadership() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 text-left">
      <SectionHeading
        title="Leadership"
        subtitle="Meet the people serving at Rhema Church"
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {leadership.map((l) => (
          <div
            key={l.name}
            className="rounded-2xl border bg-white/60 p-6 dark:bg-slate-900/40"
          >
            <div className="text-sm font-semibold text-violet-700 dark:text-violet-300">
              {l.role}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
              {l.name}
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {l.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

