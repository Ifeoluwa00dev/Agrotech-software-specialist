import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="mt-16 pb-10 text-center">
          <p className="text-sm font-semibold text-slate-900">Joshua - Agrotech Frontend Specialist</p>
          <p className="mt-2 text-sm text-slate-600">
            Building calm, mobile-first systems for farmer data, communication, and operations.
          </p>
          <p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()}.</p>
        </footer>
    </>
  )
}

export default Footer
