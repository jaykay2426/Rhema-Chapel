import SectionHeading from '../../components/SectionHeading/SectionHeading'

export default function Children() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 text-left">
      <SectionHeading title="Children & Kids" subtitle="Activities, lessons, and fun in God’s presence" />
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white/60 p-6 dark:bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Sunday School
          </h3>
          <p className="mt-3 text-slate-700 dark:text-slate-200">
            Bible stories, songs, memory verses, and guided lessons.
          </p>
        </div>
        <div className="rounded-2xl border bg-white/60 p-6 dark:bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Youth Games & Learning
            </h3>
          <p className="mt-3 text-slate-700 dark:text-slate-200">
            Kid-friendly activities that build faith and character.
          </p>
        </div>
      </div>
    </div>
  )
}

