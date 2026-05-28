export default function Testimonials() {
    return (
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Patient Testimonials</h2>
            <p className="text-slate-600">Trusted by families throughout the community.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'The best healthcare experience I have ever had. The staff genuinely care.',
              'Professional, compassionate, and incredibly knowledgeable.',
              'Telehealth appointments were easy and convenient for my busy schedule.',
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md border border-slate-200"
              >
                <p className="text-slate-600 leading-relaxed">“{review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    );
  }
  