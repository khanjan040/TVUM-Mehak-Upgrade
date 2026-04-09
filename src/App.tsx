import { Hero } from './components/Hero';
import { Classes } from './components/Classes';
import { Offerings } from './components/Offerings';
import { About } from './components/About';
import { StudioSpace } from './components/StudioSpace';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Classes />
      <Offerings />
      <About />
      <StudioSpace />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
