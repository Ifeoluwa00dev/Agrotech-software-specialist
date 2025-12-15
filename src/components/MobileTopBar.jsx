import React ,{useState, useMemo}from 'react';
import {Menu, X } from "lucide-react"

const MobileTopBar = () => {

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
    </>
  )
}

export default MobileTopBar
