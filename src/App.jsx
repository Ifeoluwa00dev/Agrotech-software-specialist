import React, { useMemo, useState } from "react";
import { Menu, X, Check, ChevronRight, Mail, MessageSquare } from "lucide-react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const AgroTechPortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = useMemo(
    () => [
      { name: "Home", id: "home" },
      { name: "Work", id: "work" }, // Solutions + Projects combined
      { name: "How It Works", id: "how-it-works" },
      { name: "About", id: "about" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(Object.fromEntries(formData)),
    });

    if (!res.ok) throw new Error("Network response was not ok");

    form.reset();
    setStatus("success");
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};

  const workItems = useMemo(
    () => [
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

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NavLinks = ({ onClick }) => (
    <div className="space-y-1">
      {navigation.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            scrollToId(item.id);
            onClick?.();
          }}
          className="w-full text-left rounded-xl px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white transition"
        >
          {item.name}
        </button>
      ))}
    </div>
  );

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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[280px] flex-col justify-between bg-emerald-800 text-white px-6 py-7">
        <div className="space-y-8">
          <div>
         <p className="text-sm font-medium text-white/70">
           Joshua Adelegan
        </p>

  <h1 className="mt-1 text-xl font-semibold leading-tight">
    Agrotech Frontend Specialist
  </h1>

  <p className="mt-2 text-sm text-white/80">
    Building calm, mobile-first systems that work in real farming environments.
  </p>
</div>


          <NavLinks />
        </div>

        <div className="space-y-2">
          <a
            href="/Joshua.pdf"
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15 transition"
          >
            Resume
          </a>
          <a
            href="https://github.com/Ifeoluwa00dev  "
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15 transition"
          >
            GitHub
          </a>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="md:hidden sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">Joshua Adelegan</p>
            <p className="text-sm font-semibold text-emerald-800">Agrotech Frontend</p>
            <p className="text-xs text-slate-600">Simple systems. Real impact.</p>
          </div>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="rounded-lg border border-slate-200 bg-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="px-4 pb-4">
            <div className="rounded-2xl bg-emerald-800 p-3 text-white">
              <NavLinks onClick={() => setMobileMenuOpen(false)} />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="/resume.pdf"
                  className="rounded-xl bg-white/10 px-3 py-2 text-center text-sm font-semibold"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/Ifeoluwa00dev"
                  className="rounded-xl bg-white/10 px-3 py-2 text-center text-sm font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="md:ml-[280px] max-w-[1200px] px-5 md:px-12 py-10">
        {/* HOME */}
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

        {/* WORK */}
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

        {/* HOW IT WORKS */}
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

        {/* ABOUT */}
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


        {/* CONTACT */}
        <section id="contact" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">
            Share what you’re building, who it’s for, and your timeline.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              {/* Netlify-ready form */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="grid gap-4"
                 onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />


                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-900">Name</label>
                    <input
                      name="name"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-900">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">Organization</label>
                  <input
                    name="organization"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Company / NGO / Cooperative (optional)"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">Project type</label>
                  <select
                    name="projectType"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-200"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option>Farmer Data Collection</option>
                    <option>Admin Dashboard</option>
                    <option>Knowledge Hub</option>
                    <option>Landing Page</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Tell me what you want to build."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-2xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-900 transition"
                >
                  Send message
                </button>
              </form>


              {status === "success" && (
  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
    ✅ Message sent. I’ll get back to you shortly.
  </div>
)}

{status === "error" && (
  <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
    ❌ Something went wrong. Please try again or message me on WhatsApp.
  </div>
)}

            </div>

            <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Other ways to reach me</p>

              <div className="mt-4 space-y-3">
                <a
                  href="mailto:adeleganifeoluwapojoshua@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white transition"
                >
                  <Mail className="h-5 w-5 text-emerald-800" />
                  Email
                </a>

                <a
                  href="https://wa.me/2349036975505"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white transition"
                >
                  <MessageSquare className="h-5 w-5 text-emerald-800" />
                  WhatsApp
                </a>

                <a
  href="https://www.linkedin.com/in/joshua-adelegan-2a751b281/"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white transition"
>
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#0A66C2] text-xs font-bold text-white">
    in
  </span>
  LinkedIn
</a>

                <a
                  href="/Joshua.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white transition"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-emerald-800 text-xs font-bold text-white">
                    CV
                  </span>
                  Resume (PDF)
                </a>
              </div>

              <p className="mt-6 text-xs text-slate-500">
                Tip: I will respond shortly
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pb-10 text-center">
          <p className="text-sm font-semibold text-slate-900">Joshua - Agrotech Frontend Specialist</p>
          <p className="mt-2 text-sm text-slate-600">
            Building calm, mobile-first systems for farmer data, communication, and operations.
          </p>
          <p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()}.</p>
        </footer>
      </main>
    </div>
  );
};

export default AgroTechPortfolio;
