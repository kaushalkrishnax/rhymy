import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Rhymy gave me the space to share my poetry without the noise of social media. It's where my words finally found their audience.",
    author: "Sarah Chen",
    role: "Poet & Writer",
  },
  {
    quote:
      "The clean interface and thoughtful community make Rhymy the perfect home for long-form writing. I've never felt more inspired.",
    author: "Marcus Rodriguez",
    role: "Novelist",
  },
  {
    quote:
      "Finally, a platform that understands writers. No character limits, no algorithm games—just pure connection through words.",
    author: "Elena Kovač",
    role: "Essayist",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 font-serif">
            What Writers Say
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Join thousands of writers who&apos;ve found their voice on Rhymy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black p-8 border border-zinc-200 dark:border-zinc-950 hover:border-black dark:hover:border-white transition-all duration-300 group"
            >
              {/* Quote marks */}
              <motion.div
                className="text-4xl text-zinc-300 dark:text-zinc-700 mb-4 font-serif leading-none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                &quot;&quot;
              </motion.div>

              <blockquote className="text-lg text-zinc-700 dark:text-zinc-300 italic mb-6 leading-relaxed font-serif">
                {testimonial.quote}
              </blockquote>

              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-950">
                <div className="font-semibold text-black dark:text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-500">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
