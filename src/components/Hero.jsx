export default function Hero() {
   return (
<div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-4 text-cyan-100">
              Compassionate • Modern • Patient-Centered Care
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Family Nurse Practitioner Care You Can Trust
            </h1>
            <p className="text-lg text-cyan-50 mb-8 leading-relaxed">
              Personalized healthcare for individuals and families with a focus on wellness,
              prevention, and compassionate treatment.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/your-clinic/appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition inline-flex items-center justify-center"
              >
                Book Appointment
              </a>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 min-h-\[520px\]">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
              alt="Professional nurse practitioner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="relative z-10 p-8 space-y-6 flex flex-col justify-end h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2">Office Hours</h3>
                <p>Monday – Friday</p>
                <p>8:00 AM – 5:00 PM</p>
              </div>
               <div>
                <h3 className="text-2xl font-bold mb-2">Location</h3>
                <p>123 Wellness Avenue</p>
                <p>Grand Rapids, MI</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Contact</h3>
                <p>(616) 555-0192</p>
                <p>care@riversideclinic.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7l mx-auto px-6 pb-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-cyan-100 mb-3">
              Board Certified Nurse Practitioner
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Dr. Afweze Uzo
            </h2>
          </div>
        </div>
       
      </section>
      
      {/* Appointment Form */}
      
      {/* Testimonials */}
      
      {/* Footer */}
     
    </div>
  );
}
