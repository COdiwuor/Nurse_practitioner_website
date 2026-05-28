export default function AppointmentForm() {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Request an Appointment</h2>
            <p className="text-slate-600">
              Submit your information and our office will contact you shortly.
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <select className="border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-teal-500">
              <option>Select Service</option>
              <option>Primary Care</option>
              <option>Women’s Health</option>
              <option>Telehealth</option>
            </select>

            <textarea
              placeholder="Message"
              rows={5}
              className="md:col-span-2 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-teal-600 text-white py-4 rounded-2xl font-semibold hover:bg-teal-700 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    );
  }
  