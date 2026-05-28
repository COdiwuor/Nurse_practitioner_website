export default function Footer() {
    return (
      <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">Riverside NP Clinic</h3>
          <p className="max-w-sm text-slate-400 leading-relaxed">
            Providing high-quality healthcare with compassion, integrity, and patient-focused
            treatment.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Home</li>
            <li>Services</li>
            <li>Appointments</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-slate-400">
            <li>(616) 555-0192</li>
            <li>care@riversideclinic.com</li>
            <li>Grand Rapids, Michigan</li>
          </ul>
        </div>
      </div>
    </footer>
    );
  }
  