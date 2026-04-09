import { useState } from 'react';
import { Send, CheckCircle, MapPin, Instagram, MessageCircle, MessageCircle as WhatsAppIcon } from 'lucide-react';
import { supabase } from '../lib/supabase';

const reasons = [
  'Improve Flexibility',
  'Build Strength',
  'Enhance Mobility',
  'Stress Relief & Relaxation',
  'Manage Pain or Injury',
  'Overall Wellness',
  'Spiritual Growth',
  'Other',
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    why_join: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
      setFormData({ name: '', contact: '', why_join: '', reason: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-[#8B7355]">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div className="bg-white rounded-2xl p-12 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-light text-[#8B7355] mb-4">Thank You!</h3>
            <p className="text-xl text-gray-600">
              We've received your inquiry and will get back to you soon.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-light text-[#8B7355] mb-6">Have any questions?</h3>
            <p className="text-lg text-gray-600 mb-8">Contact us through WhatsApp</p>
            <a
              href="https://wa.me/919561852500"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#8B7355]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-white/90">
            Take the first step towards a healthier, more balanced you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-[#8B7355] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#A69080]/30 rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-lg font-medium text-[#8B7355] mb-2">
                  Contact Details *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#A69080]/30 rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                  placeholder="Phone number or email"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-lg font-medium text-[#8B7355] mb-2">
                  What brings you to yoga? *
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#A69080]/30 rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 bg-white"
                >
                  <option value="">Select a reason</option>
                  {reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="why_join" className="block text-lg font-medium text-[#8B7355] mb-2">
                  Tell us more about your goals *
                </label>
                <textarea
                  id="why_join"
                  name="why_join"
                  required
                  value={formData.why_join}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-[#A69080]/30 rounded-lg focus:border-[#8B7355] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Share what you hope to achieve through yoga..."
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8B7355] text-white py-4 px-8 rounded-lg text-lg font-medium hover:bg-[#6F5C46] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Submit
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-medium text-[#8B7355] mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="https://instagram.com/mehak181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-[#8B7355] transition-colors group"
                >
                  <div className="bg-[#F5F1ED] p-3 rounded-full group-hover:bg-[#8B7355] group-hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Instagram</p>
                    <p className="text-lg font-medium">@Mehak181</p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/N7Zc2itnwaNj9gHb9?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-gray-700 hover:text-[#8B7355] transition-colors group"
                >
                  <div className="bg-[#F5F1ED] p-3 rounded-full group-hover:bg-[#8B7355] group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-lg font-medium">Baner, Pune</p>
                    <p className="text-sm text-gray-500 mt-1">View on Google Maps</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.797723744967!2d73.78707127465314!3d18.559849867974343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9cce54f0e5%3A0xcdb1242d499cf52!2sTvum%20yoga%20and%20wellness%20studio!5e1!3m2!1sen!2sin!4v1775721420094!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TVUM Yoga Studio Location"
              ></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
