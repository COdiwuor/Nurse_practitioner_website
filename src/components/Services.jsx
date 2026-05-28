export default function Services() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Providing accessible and comprehensive healthcare tailored to every stage of life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Primary Care',
              description:
                'Routine checkups, chronic disease management, preventative care, and wellness exams.',
            },
            {
              title: 'Women’s Health',
              description:
                'Compassionate care including annual exams, screenings, and reproductive health support.',
            },
            {
              title: 'Telehealth Visits',
              description:
                'Convenient virtual appointments for follow-ups, consultations, and urgent concerns.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-8 border border-slate-100"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }