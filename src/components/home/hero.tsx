import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { Hole } from "../backgrounds/hole/hole";
import { DATA } from "../../data";

export const HeroSection = ({
  showBackground = true,
  name = DATA.home.hero.name,
  title = DATA.home.hero.title,
  subtitle = DATA.home.hero.subtitle,
}: {
  showBackground?: boolean;
  name?: string;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background">
      {showBackground && <Hole />}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I'm {name} — I design & code modern web experiences.
          </motion.h1>

          <motion.p
            className="text-foreground-600 text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}: {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/new CV.pdf" download aria-label="Download CV in PDF format" className="w-full sm:w-auto">
              <Button
                aria-label="Downoald CV"
                fullWidth
                size="lg"
                color="primary"
                variant="shadow"
                endContent={<Icon icon="lucide:download" />}
              >
                Download CV
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button
                aria-label="View Projects"
                fullWidth
                size="lg"
                color="primary"
                variant="bordered"
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                View Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
