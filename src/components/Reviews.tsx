// Component imports
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'AIAutomation has transformed our business operations. The AI-driven solutions have increased our efficiency by 80% while reducing costs.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director of Operations at GlobalTech',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: 'The integration was seamless, and the results were immediate. Their customer support team is exceptional and always ready to help.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO at InnovateNow',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    content: "We've seen a significant ROI since implementing AIAutomation's solutions. Their AI models are sophisticated yet easy to use.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Floating Spheres */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '0.6s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gray-700 rounded-full blur-xl opacity-20 floating" style={{ animationDelay: '1.1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about our AI automation solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-8">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.name} delay={index * 100}>
              <div className="chrome-effect rounded-xl p-3 sm:p-5 md:p-8 hover:bg-gray-800/10 transition-colors h-full flex flex-col">
                <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 flex-grow">{review.content}</p>
                <div className="flex items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full object-cover"
                  />
                  <div className="ml-2 sm:ml-3 md:ml-4">
                    <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{review.name}</p>
                    <p className="text-gray-400 text-xs md:text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center sm:space-x-4 md:space-x-8 chrome-effect rounded-xl p-4 sm:p-6 md:p-8">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
                alt="Company office"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-cover rounded-lg mb-3 sm:mb-0"
              />
              <div className="text-center sm:text-left">
                <p className="text-xl sm:text-xl md:text-2xl font-bold gradient-text">98% Client Satisfaction</p>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">Based on independent reviews</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reviews;