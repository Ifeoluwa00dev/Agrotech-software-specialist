import React from 'react';
import {ChevronRight} from "lucide-react"

const HowItWorks = () => {
  return (
    <>
      <section id="how-it-works" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-slate-900">How my systems work</h2>
          <p className="mt-2 text-slate-600">Every system follows a simple, reliable flow.</p>

          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                { title: "Farmer / User", sub: "Takes a simple action" },
                { title: "Web System", sub: "Stores & organizes data" },
                { title: "Admin Team", sub: "Acts on insights" },
                { title: "Real Impact", sub: "Better outcomes" },
              ].map((s, i) => (
                <React.Fragment key={s.title}>
                  <div className="text-center flex-1">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100">
                      <p className="font-semibold text-slate-900">{s.title}</p>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">{s.sub}</p>
                  </div>
                  {i < 3 && (
                    <ChevronRight className="h-6 w-6 text-emerald-700 rotate-90 md:rotate-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-slate-900">Three real examples</h3>
          <div className="mt-4 space-y-4">
            {[
              {
                title: "Farmer registration",
                text:
                  "Farmer fills a simple form on a phone → data is stored cleanly → admins see farmers by region → teams plan distribution better.",
              },
              {
                title: "Field visit logging",
                text:
                  "Officer logs a visit → issues are tagged by location → managers see patterns → teams respond faster to farmer needs.",
              },
              {
                title: "Knowledge delivery",
                text:
                  "Farmer opts in → tips are delivered consistently (SMS/WhatsApp) → farmers apply advice → fewer losses and better yields over time.",
              },
            ].map((ex) => (
              <div key={ex.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-900">{ex.title}</p>
                <p className="mt-2 text-sm text-slate-700">{ex.text}</p>
              </div>
            ))}
          </div>
        </section>
    </>
  )
}

export default HowItWorks
