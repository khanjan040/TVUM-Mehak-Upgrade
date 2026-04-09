import { useState, useEffect } from 'react';

export function About() {
  const images = ["/IMG_4667.JPG.jpeg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 9500);

    return () => clearInterval(interval);
  }, []);

  const next = (current + 1) % images.length;

  return (
    <section className="py-24 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#8B7355] mb-4">
            Meet Mehak
          </h2>
          <p className="text-lg text-gray-600">Founder & Yoga Teacher</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Mehak Agarwal is the founder of TVUM Yoga & Wellness Studio and a yoga teacher based in Pune. After beginning her career in law, she transitioned into yoga in search of a more mindful and intentional way of living.
              </p>

              <p>
                She completed her 200-hour teacher training at The Yoga Institute, followed by a 300-hour advanced training in Rishikesh, and has been teaching full-time since 2021.
              </p>

              <p>
                Through TVUM, she has created a space where movement, breath and awareness come together to support a deeper sense of wellbeing. Her teaching approach is rooted in personal attention, safe alignment, and creating an environment where each student feels seen and supported.
              </p>

              <p>
                Mehak offers yoga classes, workshops, and experiences that often integrate yoga and sound healing, all designed to help you reconnect with your body and find stillness amidst the chaos.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-square">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#A69080] to-[#8B7355] rounded-2xl opacity-20 blur-xl"></div>

              <img
                src={images[next]}
                alt="Mehak background"
                className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover shadow-xl scale-[0.92] opacity-90 transition-all duration-700"
              />

              <img
                src={images[current]}
                alt="Mehak Agarwal - Founder"
                className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover shadow-2xl scale-100 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
