import { ArrowRight } from 'lucide-react';

const galleryImages = [
  '/IMG_8893.jpg',
  '/IMG_9513.jpg',
  '/IMG_8850.jpg',
  '/IMG_9092.JPEG',
  '/IMG_9091.JPEG',
  '/IMG_9086.JPEG',
];

export function StudioSpace() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-[#8B7355] mb-6">A Space to Slow Down</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Designed to help you disconnect from the noise and reconnect with yourself, our space is calm, minimal, and intentionally created for your practice.
            </p>
            <p>
              We also host a variety of wellness experiences here — from yoga sessions and sound healing to intimate workshops and community gatherings.
            </p>
            <p>
              The studio is also available for private bookings, including workshops, small events, and curated experiences.
            </p>
            <p className="text-[#8B7355] font-medium italic">
              Every detail in the space is curated to support stillness, movement, and mindful living.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Studio space ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#8B7355] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#6F5C46] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Reserve Your Spot
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
