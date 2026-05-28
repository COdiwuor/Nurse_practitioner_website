import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import AppointmentForm from '../components/AppointmentForm';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <AppointmentForm />
      <Testimonials />
      <Footer />
    </div>
  );
}
