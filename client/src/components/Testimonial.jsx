import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Businessman',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'The car rental process was smooth and the vehicle was in excellent condition. Highly recommended!'
  },
  {
    name: 'Priya Singh',
    role: 'Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Great service and friendly staff. I found the perfect car for my trip!'
  },
  {
    name: 'Rahul Verma',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: 'Affordable prices and a wide range of vehicles. Will use again!'
  }
];

export const Testimonial = () => {
  return (
    <section className="py-16 bg-[#f4f8fb]">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
            />
            <h3 className="text-lg font-semibold mb-1">{t.name}</h3>
            <span className="text-blue-600 text-sm mb-2">{t.role}</span>
            <p className="text-gray-600 text-base">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}