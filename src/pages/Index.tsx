
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import BusinessSegments from "@/components/BusinessSegments";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Diferenciais from "@/components/Diferenciais";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="Inicio" className="bg-arcadia-dark">
        <Hero />
      </section>
      <section id="Sobre">
        <About />
      </section>
      <section id="Diferenciais">
        <Diferenciais />
      </section>
      <section id="Portfolio" className="bg-arcadia-primary">
        <Portfolio />
      </section>
      <section id="Segmentos" className="bg-arcadia-white">
        <BusinessSegments />
      </section>

      {/* <section id="testimonials" className="bg-arcadia-dark">
        <Testimonials />
      </section> */}

      {/* <section id="contact" className="bg-arcadia-primary">
        <ContactForm />
      </section> */}
      <Footer />
    </main>
  );
};

export default Index;
