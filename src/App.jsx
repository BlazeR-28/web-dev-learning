import React from 'react'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="bg-slate-800 w-full p-8 text-white text-center shadow-lg">
        <h1 className="text-4xl font-bold tracking-tight">
          Web Dev Journey: React + Tailwind
        </h1>
        <p className="mt-2 text-slate-300">Professionelles Lernen mit modernen Tools</p>
      </header>

      <main className="flex-grow max-w-4xl p-8 bg-white shadow-md my-8 rounded-xl border border-slate-200">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800 border-b pb-2 border-slate-100">
            Nächste Lernziele
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
              <h3 className="font-bold text-indigo-900">1. Figma Design</h3>
              <p className="text-sm text-indigo-800">Grundlagen der Gestaltung und UI/UX.</p>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <h3 className="font-bold text-emerald-900">2. Tailwind Utility First</h3>
              <p className="text-sm text-emerald-800">Styling ohne jemals die HTML/React-Datei zu verlassen.</p>
            </div>
          </div>
        </section>

        <button 
          onClick={() => alert('Viel Erfolg beim Lernen!')}
          className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md active:scale-95"
        >
          Lernsession starten
        </button>
      </main>

      <footer className="w-full text-center py-6 text-slate-400 text-sm">
        &copy; 2026 BlazeR - Professional Web Learning Environment
      </footer>
    </div>
  )
}

export default App
