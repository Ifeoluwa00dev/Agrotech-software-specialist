import React, {useState} from 'react';
import {Mail, MessageSquare} from "lucide-react";
import emailjs from "@emailjs/browser";


const Contact = () => {

    const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  setStatus("sending");

  try {
    const result = await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.currentTarget,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
    );

    console.log("EmailJS success:", result);

    form.reset();
    setStatus("success");
  } catch (err) {
    console.error("EmailJS error:", err);
    setStatus("error");
  }
  finally {
    // ✅ ALWAYS clear the form
    form.reset();}
};

const [status, setStatus] = useState("idle"); // idle | sending | success | error

  return (
    <>
      <section id="contact" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">
            Share what you’re building, who it’s for, and your timeline.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              {/* Netlify-ready form */}
              <form

                className="grid gap-4"
                 onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />


                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-900">Name</label>
                    <input
                      name="from_name"
                      defaultValue= ""
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-900">Email</label>
                    <input
                      name="reply_to"
                      defaultValue=""
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
                    defaultValue=""
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-200"
                    placeholder="Company / NGO / Cooperative (optional)"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">Project type</label>
                  <select
                    name="projectType"
                    defaultValue=""
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
                    defaultValue=""
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

              {(status === "success" || status === "error") && (
  <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl border border-slate-200">
      <p className={`text-sm font-semibold ${status === "success" ? "text-emerald-800" : "text-red-700"}`}>
        {status === "success" ? "✅ Message sent" : "✅ Message sent"}
      </p>

      <p className="mt-2 text-sm text-slate-600">
        {status === "success"
          ? "Thanks — I’ll get back to you shortly."
          : "Thanks — I’ll get back to you shortly"}
      </p>

      <button
        type="button"
        onClick={() => setStatus("idle")}
        className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
      >
        Close
      </button>
    </div>
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
    </>
  )
}

export default Contact
