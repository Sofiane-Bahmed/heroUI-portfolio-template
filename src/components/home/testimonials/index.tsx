import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { TestimonialCard } from "./testimonial-card"
import { variants, dotVariants } from "./variants"
import { DATA } from '../../../data';
import { GradientText } from '../../textAnimations/gradient-text';

export const TestimonialsSection = () => {
  const { sectionTitle, sectionDescription, items } = DATA.home.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        items.length > 0 ? (prevIndex + 1) % items.length : 0
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [items.length]);

  const currentTestimonial = items[currentIndex];

  return (
    <section className="py-20 bg-background bg-gradient-to-b from-background to-content2">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16">
          <GradientText
            className="text-3xl md:text-4xl font-bold mb-4"
            text={sectionTitle} />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="w-full max-w-2xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentTestimonial.id}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                duration: 0.5,
              }}
              className="flex w-full flex-col items-center justify-center"
            >
              <TestimonialCard {...currentTestimonial} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center">
            {items.map((_, index) => (
              <motion.div
                key={index}
                className="mx-1 h-2 w-2 rounded-full cursor-pointer"
                variants={dotVariants}
                animate={index === currentIndex ? 'active' : 'inactive'}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
