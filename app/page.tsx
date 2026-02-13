'use client';
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Instagram, 
  Menu, 
  X, 
  Microscope, 
  Search, 
  Eye, 
  Activity, 
  Zap,
  MessageCircle,
  Stethoscope,
  Scissors,
  HeartPulse,
  FlaskConical
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: "Especialidades Médicas", desc: "Atención de especialistas acreditados en diversas áreas.", img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400" },
    { title: "Caninos y Felinos", desc: "Medicina interna experta para gatos y perros de todas las razas.", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400" },
    { title: "Alimentos", desc: "Variedad de dietas premium y alimentos terapéuticos.", img: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400" },
    { title: "Consultas", desc: "Atención personalizada y seguimiento detallado de casos.", img: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=400" },
    { title: "Cirugías", desc: "Pabellón moderno equipado para cirugías de tejidos blandos.", img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400" },
    { title: "Ecografías", desc: "Diagnóstico por imagen no invasivo de alta resolución.", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400" },
    { title: "Laboratorio Clínico", desc: "Toma de muestras y análisis para resultados rápidos.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400" },
    { title: "Salud Integral", desc: "Cuidado preventivo para una vida larga y saludable.", img: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400" },
    { title: "Peluquería", desc: "Estética profesional y cuidado dermatológico del pelaje.", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400" }
  ];

  const schedule = [
    { day: "Lunes", time: "Cerrado", closed: true },
    { day: "Martes - Viernes", time: "10:00 a.m. – 6:30 p.m.", closed: false },
    { day: "Sábado", time: "10:00 a.m. – 5:00 p.m.", closed: false },
    { day: "Domingo", time: "Cerrado", closed: true },
  ];

  const team = [
    { name: "Dr. José Agüero", role: "Bovinos / Acreditado SAG", desc: "Especialista medicina rural y predios libres.", icon: <Microscope /> },
    { name: "Dr. Matías Pacheco", role: "Dermatología Clínica", desc: "Video-otoscopia y diagnóstico avanzado.", icon: <Search /> },
    { name: "Dra. Marcela Cabrera", role: "Oftalmología Avanzada", desc: "Cirugía y ecografía ocular experta.", icon: <Eye /> },
    { name: "Dra. Belén Niklitschek", role: "Cardiología Clínica", desc: "Ecocardiografía y monitoreo especializado.", icon: <Activity /> },
    { name: "Dra. Nataly Reuss", role: "Imagenología / Ecografía", desc: "Ecografía abdominal y gestacional.", icon: <Zap /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navegación */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-[#f0f9f9] rounded-full flex items-center justify-center relative">
               <svg viewBox="0 0 100 100" className="w-8 h-8">
                  <path d="M50 20 L50 80 M30 40 Q50 20 70 40 Q50 60 30 40 M30 70 Q50 50 70 70" stroke="#4f9d9e" strokeWidth="4" fill="none" />
                  <circle cx="50" cy="15" r="5" fill="#25d366" />
               </svg>
            </div>
            <span className="text-3xl font-bold text-[#4f9d9e] tracking-tight">Trivet</span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-medium">
            {['Inicio', 'Servicios', 'Nosotros', 'Equipo', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#4f9d9e] transition">{item}</a>
            ))}
          </div>

          <a href="https://www.acvet.app/agenda/reserva/3DYCYGVBFUAB" target="_blank" className="hidden md:block bg-[#4f9d9e] text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition shadow-md">
            Reserva Hora
          </a>

          <button className="md:hidden text-2xl text-[#4f9d9e]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 flex flex-col p-4 space-y-4 shadow-inner">
            {['Inicio', 'Servicios', 'Nosotros', 'Equipo', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block font-medium" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
            <a href="https://wa.me/56933042830" target="_blank" className="bg-[#25d366] text-white text-center py-2 rounded-lg font-bold">WhatsApp</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[650px] flex items-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1350&q=80" 
            className="w-full h-full object-cover"
            alt="Fondo de bienvenida"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl bg-black/20 p-8 rounded-3xl backdrop-blur-md">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Cuidamos a los que más quieres.</h1>
            <p className="text-xl mb-8 text-gray-100 font-light">Atención profesional y afectuosa para que tu mascota siempre esté sana y feliz en Puerto Montt.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-white text-[#4f9d9e] px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:bg-gray-100 transition">
                Ver Ubicación
              </a>
              <a href="https://wa.me/56933042830" target="_blank" className="bg-[#25d366] text-white px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                <MessageCircle size={24} /> Escríbenos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Ahora con la lista completa de 9 servicios */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight uppercase">NUESTROS SERVICIOS</h2>
            <div className="w-24 h-1 bg-[#4f9d9e] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="overflow-hidden rounded-xl mb-4 shadow-sm">
                  <img src={s.img} alt={s.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 uppercase text-gray-800">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
              <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600" alt="Sobre Trivet" className="rounded-3xl shadow-2xl relative z-10" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#4f9d9e] rounded-3xl z-0"></div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Pasión por los animales</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              En <strong>Trivet</strong> nos enorgullece ser un punto de encuentro para la salud animal. Nuestro equipo está compuesto por profesionales dedicados que entienden que tu mascota es un miembro más de tu familia.
            </p>
            <a href="https://www.instagram.com/trivet.cl/" target="_blank" className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition">
              <Instagram size={20} />
              <span>@trivet.cl</span>
            </a>
          </div>
        </div>
      </section>

      {/* Equipo Especialista */}
      <section id="equipo" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestro Equipo Especialista</h2>
            <div className="w-20 h-1 bg-[#4f9d9e] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-[#4f9d9e] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 leading-tight">{member.name}</h3>
                <p className="text-xs font-semibold text-[#4f9d9e] uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold mb-8 tracking-tight">¿Cómo encontrarnos?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-5">
                  <div className="bg-[#4f9d9e] p-3 rounded-2xl"><MapPin /></div>
                  <div>
                    <h4 className="text-xl font-bold">Dirección</h4>
                    <p className="text-gray-400 italic">Antihual 1258, Puerto Montt, Los Lagos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-[#4f9d9e] p-3 rounded-2xl"><Mail /></div>
                  <div>
                    <h4 className="text-xl font-bold">Correo Electrónico</h4>
                    <a href="mailto:trivetcl@gmail.com" className="text-gray-400 hover:text-[#4f9d9e] transition border-b border-gray-800 hover:border-[#4f9d9e]">trivetcl@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="bg-[#4f9d9e] p-3 rounded-2xl"><Clock /></div>
                  <div className="w-full max-w-sm">
                    <h4 className="text-xl font-bold mb-4">Horario de Trabajo</h4>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                      {schedule.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className={item.closed ? "text-gray-500" : "text-gray-100 font-medium"}>{item.day}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.closed ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"
                          }`}>
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/56933042830" target="_blank" className="bg-[#25d366] text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
                <MessageCircle size={24} /> Reservar Hora por WhatsApp
              </a>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[550px] border-4 border-gray-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.8878566274483!2d-72.9234863!3d-41.4582845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183b8653e1d13d%3A0x6b49e8a8a8a8a8a8!2sAntihual%201258%2C%20Puerto%20Montt%2C%20Los%20Lagos!5e0!3m2!1ses!2scl!4v1710000000000!5m2!1ses!2scl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 text-center text-gray-600 border-t border-gray-800">
        <p>&copy; 2024 Veterinaria Trivet - Puerto Montt. Cuidado profesional y especializado.</p>
      </footer>

      {/* Botón Flotante WhatsApp */}
      <a href="https://wa.me/56933042830" target="_blank" className="fixed bottom-6 right-6 z-40 bg-[#25d366] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle size={28} />
      </a>
    </div>
  );
}