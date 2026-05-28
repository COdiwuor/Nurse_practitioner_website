export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-700 to-sky-900 text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-2 rounded-full mb-8 shadow-lg">
            <div className="w-3 h-3 rounded-full bg-emerald-300 animate-pulse" />

            <p className="uppercase tracking-[0.3em] text-xs text-cyan-100 font-medium">
              Compassionate • Modern • Patient-Centered Care
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8 drop-shadow-2xl">
            Family Nurse
            <span className="block text-cyan-200">
              Practitioner
            </span>
            Care You Can Trust
          </h1>

          <p className="text-xl text-cyan-50/90 leading-relaxed max-w-2xl mb-10">
            Personalized healthcare for individuals and families with a focus on wellness,
            prevention, and compassionate treatment.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://calendly.com/your-clinic/appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-teal-700 px-8 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
            >
              Book Appointment
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <button className="px-8 py-5 rounded-2xl text-lg font-semibold border border-white/40 bg-white/10 backdrop-blur-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-14">
            {[
              ['10+', 'Years Experience'],
              ['5K+', 'Patients Served'],
              ['24/7', 'Patient Support'],
            ].map(([stat, label]) => (
              <div
                key={label}
                className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 shadow-2xl"
              >
                <h3 className="text-3xl font-black">{stat}</h3>

                <p className="text-cyan-100 text-sm mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-white/10 blur-3xl rounded-full" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.45)] min-h-[720px] bg-black/20 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop"
              alt="Professional nurse practitioner"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-10">
              <div className="self-end bg-emerald-400 text-slate-900 font-bold px-5 py-2 rounded-full shadow-xl">
                Accepting New Patients
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                  <h3 className="text-3xl font-black mb-3">
                    Office Hours
                  </h3>

                  <p className="text-xl text-cyan-50">
                    Monday – Friday
                  </p>

                  <p className="text-xl text-cyan-50">
                    8:00 AM – 5:00 PM
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-3">
                      Location
                    </h3>

                    <p className="text-cyan-50">
                      123 Wellness Avenue
                    </p>

                    <p className="text-cyan-50">
                      Grand Rapids, MI
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-3">
                      Contact
                    </h3>

                    <p className="text-cyan-50">
                      (616) 555-0192
                    </p>

                    <p className="text-cyan-50">
                      care@riversideclinic.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pb-16 -mt-8">
        <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-cyan-100 mb-3 font-semibold">
              Board Certified Nurse Practitioner
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Dr. Afweze Uzo
            </h2>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-teal-700 px-7 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300">
              Schedule Visit
            </button>

            <button className="border border-white/40 bg-white/10 backdrop-blur-xl px-7 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300">
              Contact Office
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}