import React, {useMemo} from 'react';
import {} from "lucide-react"

const DesktopSidebar = () => {

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

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
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
            href="https://www.linkedin.com/in/joshua-adelegan-2a751b281/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/15 transition"
          >
            LinkedIn
          </a>
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

    </>
  )
}

export default DesktopSidebar
