import { Clock, Users } from 'lucide-react';

const schedules = [
  { time: '6:30–7:30 AM', days: 'Mon, Wed, Fri' },
  { time: '8:00–9:00 AM', days: 'Mon, Wed, Fri' },
  { time: '6:30–7:30 PM', days: 'Mon, Wed, Fri' },
];

export function Classes() {
  return (
    <section className="py-24 bg-[#F5F1ED]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#8B7355] mb-6">Group Yoga Classes</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Guided group sessions designed to help you build strength, improve mobility, and feel more connected to your body. Each session includes pranayama and asana, with personal attention due to small batch sizes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-center justify-center mb-8">
            <Clock className="w-8 h-8 text-[#8B7355] mr-3" />
            <h3 className="text-2xl md:text-3xl font-light text-[#8B7355]">Class Timings</h3>
          </div>

          <div className="space-y-4 mb-10">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className="bg-[#F5F1ED] p-6 rounded-lg border-l-4 border-[#A69080] hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-xl md:text-2xl font-medium text-[#8B7355]">{schedule.time}</p>
                    <p className="text-gray-600 mt-1">{schedule.days}</p>
                  </div>
                  <Users className="w-7 h-7 text-[#A69080]" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#8B7355] text-white p-8 rounded-xl text-center">
            <p className="text-3xl font-light mb-3">₹3,500/month</p>
            <p className="text-lg opacity-90">Limited spots per batch to maintain quality and personal attention.</p>
          </div>
        </div>

        <div className="relative">
          <img
            src="/IMG_4668.JPG.jpeg"
            alt="Yoga session at TVUM Studio"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[16/9]"
          />
        </div>
      </div>
    </section>
  );
}
