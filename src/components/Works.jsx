import React, {useMemo} from 'react';
import {Check } from "lucide-react"


const Works = () => {

    const WorkCard = ({ item }) => (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{item.audience}</p>
        </div>

        <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          {item.status}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">Problem</p>
          <p className="mt-1 text-sm text-slate-700">{item.problem}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Solution</p>
          <p className="mt-1 text-sm text-slate-700">{item.solution}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">MVP includes</p>
          <ul className="mt-2 space-y-2">
            {item.includes.map((x) => (
              <li key={x} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 text-emerald-700" />
                <span className="text-sm text-slate-700">{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Outcome</p>
          <p className="mt-1 text-sm text-slate-700">{item.outcome}</p>
        </div>

        <div className="pt-2">
          <p className="text-sm font-semibold text-slate-900">Tech stack</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );

  const workItems = useMemo(
    () => [
      {
  title: "FarmTrack — Remote Daily Farm Logs",
  audience: "Farm owners, farm managers, agri-cooperatives, small/medium farms",
  problem:
    "Owners can’t monitor daily farm activity when they’re not on-site, and updates get lost across calls, WhatsApp messages, and notebooks—making it hard to track productivity and accountability.",
  solution:
    "A web app that lets farm teams submit structured daily logs (tasks, output, issues) while owners get a clear dashboard view of today’s and weekly activity—anywhere, anytime.",
  includes: [
    "Owner onboarding (create farm + first unit)",
    "Role-based access (Owner / Worker)",
    "Team invite flow (owner adds members)",
    "Daily log creation (activities, output, issues)",
    "Logs list + filtering (unit + date range)",
    "Dashboard stats (Today’s logs + This week’s logs)",
    "Worker visibility (view only logs they submitted)"
  ],
  outcome:
    "Better visibility, stronger accountability, and consistent farm records—so owners can spot issues early and make better decisions without being physically present.",
  status: "MVP-ready",
  stack: ["React", "Tailwind", "Firebase Auth", "Firestore", "Vite"]
},

      {
        title: "Farmer Onboarding Portal",
        audience: "Input suppliers, NGOs, agrotech startups",
        problem:
          "Teams struggle to register and track farmers because everything is scattered across paper, WhatsApp, and Excel.",
        solution:
          "A mobile-friendly onboarding portal that captures clean farmer data and supports confirmation messages.",
        includes: [
          "Farmer registration (phone-first)",
          "Region + crop capture",
          "Admin dashboard view",
          "Export to CSV for field and sales teams",
        ],
        outcome: "Clean farmer data, better planning, faster outreach.",
        status: "Demo-ready",
        stack: ["React", "Tailwind", "Netlify", "CMS-ready"],
      },
      {
        title: "Field Officer Dashboard",
        audience: "Field teams, extension programs, cooperatives",
        problem:
          "Field officers visit farmers but there’s no simple, consistent place to log visits, issues, and photos.",
        solution:
          "A lightweight dashboard where officers log visits and managers can review activity by location and issue type.",
        includes: [
          "Visit logging",
          "Photo upload (optional)",
          "Simple reporting by region",
          "Weekly export for reporting",
        ],
        outcome:
          "Field activity becomes usable data. Management sees what’s happening on the ground.",
        status: "Concept",
        stack: ["React", "Tailwind", "Netlify"],
      },
      {
        title: "Cooperative Membership System",
        audience: "Farmer cooperatives, savings groups",
        problem:
          "Cooperatives track membership and payments manually, so members don’t trust the records or know their status.",
        solution:
          "A member portal that shows payment history, dues, and membership status in a simple layout.",
        includes: [
          "Member login",
          "Payment status tracking",
          "Admin management view",
          "Payment gateway (later)",
        ],
        outcome:
          "More trust, less confusion. Admins manage without paper chaos and endless WhatsApp threads.",
        status: "Concept",
        stack: ["React", "Tailwind", "Netlify"],
      },
      {
        title: "Knowledge Hub",
        audience: "NGOs, extension services, education platforms",
        problem:
          "Farmers need practical tips, but information is scattered across PDFs, WhatsApp, and random websites.",
        solution:
          "A searchable knowledge hub organized by crop, season, and common farming problems.",
        includes: [
          "Crop-based library",
          "Local language support (later)",
          "Video support (later)",
          "SMS/WhatsApp opt-in (later)",
        ],
        outcome:
          "Centralized knowledge. Farmers find answers without waiting for an extension officer.",
        status: "Concept",
        stack: ["React", "Tailwind", "Netlify"],
      },
      {
        title: "Agrotech Landing Pages",
        audience: "Agrotech startups and early-stage programs",
        problem:
          "Founders have a strong idea but no clear online presence. Partners and investors judge fast.",
        solution:
          "Clean, credible pages that explain the offer in simple language and capture leads.",
        includes: [
          "Clear messaging",
          "Lead capture",
          "Impact highlights",
          "Fast-loading mobile layout",
        ],
        outcome: "Better first impressions. More trust. More serious conversations.",
        status: "Ready",
        stack: ["React", "Tailwind", "Netlify"],
      },
    ],
    []
  );

  return (
    <>
      <section id="work" className="mt-12 scroll-mt-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Work</h2>
              <p className="mt-2 text-slate-600">
                Solutions + projects combined. Each one is a real system with a clear MVP and outcome.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {workItems.map((item) => (
              <WorkCard key={item.title} item={item} />
            ))}
          </div>
        </section>
    </>
  )
}

export default Works
