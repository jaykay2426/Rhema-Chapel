import SectionHeading from '../../components/SectionHeading/SectionHeading'

const items = [
  {
    day: 'Monday',
    verse: 'Psalm 119:105',
    quote:
      'Your word is a lamp to my feet and a light to my path.',
  },
  {
    day: 'Tuesday',
    verse: 'Romans 15:13',
    quote:
      'May the God of hope fill you with all joy and peace as you trust in him.',
  },
  {
    day: 'Wednesday',
    verse: 'Joshua 1:9',
    quote:
      'Be strong and courageous. Do not be afraid; the Lord your God is with you.',
  },
]

export default function DailyBread() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 text-left">
      <SectionHeading
        title="Daily Bread"
        subtitle="Read daily Bible quotes and daily encouragement"
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.day}
            className="rounded-2xl border bg-white/60 p-6 dark:bg-slate-900/40"
          >
            <div className="text-sm font-semibold text-violet-700 dark:text-violet-300">
              {it.day}
            </div>
            <div className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">
              {it.quote}
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Verse:</span> {it.verse}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

