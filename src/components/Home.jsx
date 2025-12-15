import React from 'react'

const Home = () => {
  return (
    <div>
      <section id="home" className="scroll-mt-24">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm">
            <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              Available for contracts & frontend roles
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              I build simple web systems that help agrotech teams reach farmers, collect data, and operate better.
            </h2>

            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl">
              Mobile-first, low-bandwidth experiences and dashboards designed for agriculture and food systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToId("contact")}
                className="rounded-2xl bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 transition"
              >
                Talk to me
              </button>

              <button
                onClick={() => scrollToId("work")}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                View work
              </button>
            </div>

            {/* What you solve */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Farmer Data Collection",
                  text: "Register farmers, track visits, and store clean data teams can actually use.",
                },
                {
                  title: "Farmer Communication",
                  text: "Simple systems that support SMS/WhatsApp workflows without friction.",
                },
                {
                  title: "Simple Admin Dashboards",
                  text: "Clear reporting so managers can act quickly and confidently.",
                },
              ].map((b) => (
                <div key={b.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-emerald-800">{b.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{b.text}</p>
                </div>
              ))}
            </div>

            {/* Who you work with */}
            <div className="mt-10">
              <p className="text-sm font-semibold text-slate-900">Who I work with</p>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Agrotech Startups", "NGOs & Programs", "Cooperatives", "Input Suppliers"].map((x) => (
                  <div key={x} className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
                    <p className="text-sm font-semibold text-slate-800">{x}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home
