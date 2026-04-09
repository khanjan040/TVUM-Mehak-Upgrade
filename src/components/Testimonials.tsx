import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "It has been a month since I joined her yoga class, and the experience has been truly wonderful. She is very attentive and ensures that everyone maintains the correct posture throughout the session. Along with yoga, she conducts sound therapy sessions that are incredibly soothing and have helped me feel deeply relaxed. Her teaching style is calm, clear, and encouraging. I would highly recommend her classes to anyone looking for a positive and refreshing yoga experience.",
    name: "Nikhil Murkute",
  },
  {
    text: "I attended yoga classes at TVUM Yoga and Wellness Studio for three months now, and it has been a really great experience for me. Yoga therapist, Mehak, is amazing at understanding everyone's body and comfort level. She gives easy options and corrections whenever needed. The studio has a very positive and peaceful atmosphere. With Mehak's help, I was able to unlock my tight lower back and improve my posture and flexibility. I always left the class feeling relaxed, refreshed, and more energized. If you want a yoga practice that helps both your body and mind, I truly recommend TVUM and Mehak's classes.",
    name: "Karan Pradeep",
  },
  {
    text: "Mehak is a highly dedicated and passionate yoga instructor who brings the perfect balance of discipline and joy to her sessions. Her diligent approach ensures that every student not only practices yoga correctly but also understands the importance of consistency and commitment. At the same time, her fun and encouraging teaching style makes each class engaging and motivating. She truly inspires her students to embrace dedication, discipline, and mindfulness both on and off the mat.",
    name: "Shikha Shukla",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#8B7355] mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600">Real experiences from our yoga community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-[#A69080]/20 hover:border-[#A69080]/50 transition-all duration-300 hover:shadow-xl"
            >
              <Quote className="w-10 h-10 text-[#A69080] mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">{testimonial.text}</p>
              <p className="font-medium text-[#8B7355]">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}