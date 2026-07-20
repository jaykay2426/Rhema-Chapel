import SectionHeading from "../../components/SectionHeading/SectionHeading";

export default function MemberRegistration() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 text-left">
      <SectionHeading
        title="Member Registration"
        subtitle="Request to join Rhema Church"
      />

      <div className="mt-6 rounded-2xl border bg-white/60 p-6 dark:bg-slate-900/40">
        <p className="text-sm text-slate-700 dark:text-slate-200">
          Registration form content goes here.
        </p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          This page was missing a valid component, causing build failures. A basic
          placeholder has been added so the project builds and routes work.
        </p>
      </div>
    </div>
  );
}

