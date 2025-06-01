import { AnimatePresence, motion } from 'framer-motion';
import { useIsMobile } from '../../../hooks/use-mobile';
import { Icon } from '@iconify/react';
import { Button } from '@heroui/react';
import { GradientText } from '../../textAnimations/gradient-text';

import { TestimonialCard } from './testimonial-card';
import { variants, dotVariants } from './variants';
import { useTestimonials } from '../../../hooks/use-testimonials';
import { DATA } from '../../../data/index';

export const TestimonialsSection = () => {
  const { sectionTitle, sectionDescription, items } = DATA.home.testimonials;
  const {
    currentIndex,
    direction,
    nextTestimonial,
    prevTestimonial,
    setCurrentIndex,
    handleNavigation,
  } = useTestimonials(items);
  
  const isMobile = useIsMobile();
  const currentTestimonial = items[currentIndex] || items[0];

  return (
    <section className="py-20 bg-background bg-gradient-to-b from-background to-content2">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <GradientText className="text-3xl md:text-4xl font-bold mb-4" text={sectionTitle} />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">{sectionDescription}</p>
        </motion.div>

        <div className="relative w-full max-w-2xl mx-auto">
          {!isMobile && (
            <>
              <Button
                isIconOnly
                radius="full"
                variant="flat"
                onClick={() => handleNavigation(prevTestimonial)}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10"
              >
                <Icon icon="heroicons:chevron-left-20-solid" className="w-5 h-5" />
              </Button>
              <Button
                isIconOnly
                radius="full"
                variant="flat"
                onClick={() => handleNavigation(nextTestimonial)}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10"
              >
                <Icon icon="heroicons:chevron-right-20-solid" className="w-5 h-5" />
              </Button>
            </>
          )}

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.5 }}
              className="flex w-full flex-col items-center justify-center"
            >
              <TestimonialCard {...currentTestimonial} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center items-center gap-4">
            {isMobile && (
              <Button
                isIconOnly
                radius="full"
                variant="flat"
                size="sm"
                onClick={() => handleNavigation(prevTestimonial)}
                aria-label="Previous testimonial"
              >
                <Icon icon="heroicons:chevron-left-20-solid" className="w-4 h-4" />
              </Button>
            )}

            <div className="flex items-center gap-2">
              {items.map((_, index) => (
                <motion.button
                  key={index}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className="mx-1 h-2 w-2 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
                  variants={dotVariants}
                  animate={index === currentIndex ? 'active' : 'inactive'}
                  onClick={() => {
                    setCurrentIndex(index);
                    handleNavigation(() => { });
                  }}
                />
              ))}
            </div>

            {isMobile && (
              <Button
                isIconOnly
                radius="full"
                variant="flat"
                size="sm"
                onClick={() => handleNavigation(nextTestimonial)}
                aria-label="Next testimonial"
              >
                <Icon icon="heroicons:chevron-right-20-solid" className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
