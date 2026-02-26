import React, { useEffect, useState } from "react";
import fotoAsuncionita from "./img/Asuncionita.jpg";


export default function WeddingInvitation() {
  const linkConfirmacion = "https://docs.google.com/forms/d/e/1FAIpQLSdCZkTI_0xWwi7xUd2adjbSkpNEUqAxG1m0QxV5MHTI18w_MQ/viewform?usp=publish-editor";
  const linkMapsCeremonia = "https://maps.app.goo.gl/fCuJEuU2rRWZcEAfA";
  const linkSugerirCancion = "https://docs.google.com/forms/d/e/1FAIpQLSdp_W_-_nkP8hmnpVNKgHfF76pI4xiiXsr24Ao9Lkyr-1VYHw/viewform?usp=publish-editor";
  const linkSpotify = "https://open.spotify.com/playlist/1gjH3wHWk8gXfcaExEzD7W?si=8427fcfbe7e44452"; 
  
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-08-28T17:30:00Z");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-light selection:bg-[#bb9a2f]/30">
      
      {/* HERO SECTION */}
      <div className="hero min-h-screen relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80)'}}>
        <div className="hero-overlay bg-[#3d251e]/60"></div>
        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-2xl">
            <h1 className="romantic-title text-7xl md:text-8xl mb-4 italic text-[#bb9a2f]">Loren & Angie</h1>
            <p className=" text-2xl tracking-[0.3em] font-light uppercase">Nuestra Gran Aventura Comienza</p>
            <div className="mt-12 animate-arrow flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#bb9a2f" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 1: BIENVENIDA Y CONTADOR */}
      <section className="py-24 text-center px-4 bg-[#fdfaf5]">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-[#e9dcc9] w-16 h-16 rounded-full flex items-center justify-center shadow-inner text-[#7a0d1a]">
              <span className="text-3xl">❤</span>
            </div>
          </div>
          <h2 className="romantic-title text-4xl mb-6 text-[#3d251e]">28.08.2026</h2>
          <p className="italic text-[#3d251e] text-lg leading-relaxed mb-4">
            "Hay momentos en la vida que son especiales por sí solos, pero compartirlos con las personas que más queremos los hace inolvidables."
          </p>
        </div>

        <div className="flex justify-center gap-4 md:gap-10 flex-wrap">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="countdown-circle">
              <div className="countdown-number">{value}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#b8860b]">
                {label === 'days' ? 'Días' : label === 'hours' ? 'Horas' : label === 'minutes' ? 'Minutos' : 'Segundos'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 2: LA CELEBRACIÓN */}
      <section className="py-24 bg-[#3d251e] px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-none shadow-2xl overflow-hidden flex flex-col">
            <div className="w-full h-80 overflow-hidden">
              <img 
                src={fotoAsuncionita}
                alt="Lugar de la celebración" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 pb-12 text-center flex flex-col items-center">
              <h3 className="romantic-title text-4xl mb-6 text-[#ceb185]">La Celebración</h3>
              <div className="space-y-2 text-[#666] mb-8">
                <p className="text-xl font-medium text-[#333]">Viernes, 28 de agosto</p>
                <p className="text-xl font-light">17:30 hs.</p>
                <p className="text-lg font-light text-[#888]">Casa Rural Asuncionita, Tetir.</p>
              </div>
              <a 
                href={linkMapsCeremonia} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-block bg-[#D4BC9F] text-white px-10 py-4 rounded-full text-sm tracking-widest uppercase shadow-sm"
              >
                CÓMO LLEGAR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: DETALLES IMPORTANTES */}
      <section className="py-20 bg-[#fdfaf5] text-center px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Dress Code */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md border border-[#e9dcc9]">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3L5 21H19L15 3H13.5L14.5 8L12 7L9.5 8L10.5 3H9Z" stroke="#ceb185" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M10 20L10.5 21M14 20L13.5 21" stroke="#ceb185" strokeWidth="1.2"/>
                <rect x="10" y="10" width="4" height="2.5" rx="1" fill="#ceb185" opacity="0.3"/>
              </svg>
            </div>
            <h4 className="uppercase tracking-[0.2em] text-[#b8860b] font-bold text-xs">Dress Code</h4>
            <p className="romantic-title text-3xl text-[#3d251e]">Elegante / Formal</p>
            <p className="text-[#666] text-sm max-w-xs">Nosotros te queremos tal y como eres, así que ven con lo que te sientas más cómodo/a.</p>
          </div>

          {/* Menú Especial */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md border border-[#e9dcc9]">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="7" stroke="#ceb185" strokeWidth="1.2"/>
                <circle cx="12" cy="12" r="5" stroke="#ceb185" strokeWidth="0.8" strokeDasharray="2 2"/>
                <path d="M19 7V17" stroke="#ceb185" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M19 7C19 7 21 8 21 10C21 12 19 13 19 13" stroke="#ceb185" strokeWidth="1.2"/>
                <path d="M5 7V17M3 7V11C3 12.5 4 13 5 13M7 7V11C7 12.5 6 13 5 13" stroke="#ceb185" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="uppercase tracking-[0.2em] text-[#b8860b] font-bold text-xs">Menú Especial</h4>
            <p className="romantic-title text-3xl text-[#3d251e]">Alergias o Dietas</p>
            <p className="text-[#666] text-sm max-w-xs">Si eres alérgico a algún alimento, por favor indícalo en el formulario de confirmación.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: PARALLAX */}
      <section className="parallax-section h-[60vh] flex items-center justify-center relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1920&q=80)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="romantic-title text-5xl md:text-7xl text-white italic drop-shadow-lg mb-4">¡Nos vemos pronto!</h2>
        </div>
      </section>

      {/* SECCIÓN 5: MÚSICA ACTUALIZADA */}
      <section className="py-24 bg-white text-center px-6">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <div className="mb-6 text-[#7a0d1a]">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17V5L19 3V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="16" cy="15" r="3" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <h3 className="romantic-title text-4xl mb-4 text-[#7a0d1a]">¿Qué canción no puede faltar?</h3>
          <p className="text-sm text-[#666] mb-7 max-w-md">Para ir calentando motores, puedes escuchar nuestra lista oficial o decirnos qué canción te haría perrear hasta el suelo.</p>
          
          {/* BOTÓN SPOTIFY */}
          <a 
            href={linkSpotify} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-3 bg-[#1DB954] text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest hover:bg-[#1ed760] transition-all shadow-md mb-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.302c-.216.354-.675.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.803.562-.896 4.574-1.047 8.486-.595 11.655 1.338.353.215.464.674.248 1.028zm1.478-3.259c-.272.441-.847.58-1.288.308-3.225-1.983-8.142-2.557-11.958-1.399-.499.151-1.028-.131-1.179-.63-.151-.499.131-1.028.63-1.179 4.364-1.324 9.776-.68 13.507 1.612.441.272.58.847.308 1.288zm.126-3.418C15.221 8.2 8.807 7.987 5.08 9.118c-.573.174-1.176-.151-1.35-.724-.174-.573.151-1.176.724-1.35 4.285-1.3 11.373-1.06 15.865 1.605.516.306.685.975.379 1.491-.306.516-.975.685-1.491.379z"/>
            </svg>
            ESCUCHAR LISTA BODA
          </a>

          <a href={linkSugerirCancion} target="_blank" rel="noreferrer" className="text-[#b8860b] text-xs font-bold tracking-[0.2em] uppercase border-b border-[#b8860b]/30 pb-1 hover:text-[#7a0d1a] transition-all">Sugerir mi canción</a>
        </div>
      </section>

      {/* SECCIÓN 6: RSVP */}
      <section id="rsvp" className="py-28 bg-[#3d251e] text-center px-4">
        <h2 className="romantic-title text-6xl mb-8 text-[#bb9a2f]">Confirmar Asistencia</h2>
        <div className="max-w-md mx-auto">
            <p className="text-xl mb-4 font-light italic text-white/80">¿Nos acompañas en este día?</p>
          <p className="text-sm text-white/50 mb-12 uppercase tracking-widest">Agradecemos tu confirmación lo antes posible.</p>
          <a href={linkConfirmacion} target="_blank" rel="noreferrer" className="btn btn-romantic px-10 md:px-20 h-16 text-lg md:scale-110">Confirmar Aquí</a>
        </div>
      </section>

      <footer className="py-12 bg-[#2a1a15] text-[#bb9a2f] text-center">
        <p className="romantic-title text-3xl mb-2">Loren & Angie</p>
        <p className="text-xs uppercase tracking-[0.4em] opacity-40">28 de agosto de 2026 • Tetir, Fuerteventura</p>
      </footer>
    </div>
  );
}