import { Users, Heart, Activity } from 'lucide-react';

const offerings = [
  {
    icon: Users,
    title: 'Group Yoga Classes',
    description: 'Structured sessions focused on strength, flexibility, and overall well-being in a small group setting.',
  },
  {
    icon: Heart,
    title: 'Personalised Prenatal Yoga',
    description: 'Safe, guided one-on-one sessions tailored to each stage of pregnancy, focusing on mobility, breathwork, and relaxation.',
  },
  {
    icon: Activity,
    title: 'Yoga Therapy & Pain Relief',
    description: 'Targeted sessions designed to address back pain, posture issues, and physical discomfort through mindful movement and alignment.',
  },
];

export function Offerings() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#8B7355] mb-6">What We Offer</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className="bg-[#F5F1ED] p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-[#A69080]/20 hover:border-[#A69080]/50"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-8 h-8 text-[#8B7355]" />
                </div>
                <h3 className="text-2xl font-medium text-[#8B7355] mb-4">{offering.title}</h3>
                <p className="text-gray-700 leading-relaxed">{offering.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
