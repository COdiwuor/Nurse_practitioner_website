export default function About() {
    return (
      <section className="bg-white py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
            alt="Nurse practitioner"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-teal-700 mb-3">
            About the Practice
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Dedicated to Building Long-Term Patient Relationships
          </h2>

          <p className="text-slate-600 mb-6 leading-relaxed text-lg">
            Our mission is to deliver compassionate, evidence-based care in a welcoming and
            inclusive environment. We believe healthcare should feel personal, empowering, and
            accessible.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-teal-700">10+</h3>
              <p className="text-slate-600 mt-2">Years Experience</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-teal-700">5k+</h3>
              <p className="text-slate-600 mt-2">Patients Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  