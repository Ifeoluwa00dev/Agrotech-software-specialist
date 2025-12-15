import React from 'react'

const About = () => {
  return (
    <>
      <section id="about" className="mt-12 scroll-mt-24">
               <h2 className="text-2xl font-semibold text-slate-900">About</h2>
             <p className="mt-2 text-slate-600">Human, practical, and focused on real use-cases.</p>

  <div className="mt-6 grid gap-6 lg:grid-cols-5">
    {/* Profile Card */}
    <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src="/DSC_3034.jpg"
          alt="Joshua Adelegan"
          className="h-20 w-20 rounded-2xl object-cover border border-slate-200 grayscale-[10%]"
        />
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-900">Joshua Adelegan</p>
          <p className="text-sm font-semibold text-emerald-800">Agrotech Frontend Specialist</p>
          <p className="mt-1 text-xs text-slate-600">Mobile-first • Low-bandwidth</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4 border border-slate-200">
        <p className="text-sm font-semibold text-slate-900">Quick focus</p>
        <ul className="mt-2 space-y-2 text-sm text-slate-700">
          <li>Farmer onboarding systems</li>
          <li>Field data collection flows</li>
          <li>Simple dashboards for teams</li>
        </ul>
      </div>

      <div className="mt-4">
        <p className="text-xs text-slate-500">
          Open to contracts and frontend roles.
        </p>
      </div>
    </div>

    {/* About Content */}
    <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="space-y-6 text-slate-700">
        <div>
          <p className="text-sm font-semibold text-slate-900">Who I am</p>
          <p className="mt-2">
            I’m a frontend developer specializing in agrotech and agriculture-focused systems.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Why agrotech</p>
          <p className="mt-2">
            Many digital tools fail farmers because they’re too complex. I focus on simple systems
            that work on phones and slow internet.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-900">How I work</p>
            <p className="mt-2">
              I build MVPs first, test with real users, then improve gradually.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">What I value</p>
            <p className="mt-2">
              Clarity, reliability, and real-world impact.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm font-semibold text-slate-900">Tech focus (for recruiters)</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["React", "Tailwind", "Accessibility", "Performance", "CMS-ready"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About
