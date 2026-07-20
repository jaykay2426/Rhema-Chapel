type Props = {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 text-slate-700 dark:text-slate-200">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

