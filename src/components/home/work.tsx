import { useState } from "react";
import { motion } from "framer-motion";

import { ProjectCard } from "../project-card";
import { ProjectModal } from "../project-modal";
import { GradientText } from "../textAnimations/gradient-text";
import { DATA } from "../../data";

export const WorkSection = () => {
  const { work } = DATA.projects;
  const { sectionTitle, sectionDescription } = DATA.projects;

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <GradientText
            className="text-3xl md:text-4xl font-bold mb-4"
            text={sectionTitle} />
          <p className="text-foreground-600 text-lg max-w-2xl mx-auto">{sectionDescription}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {work.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full md:max-w-none"
            >
              <ProjectCard
                project={project}
                onViewDetails={() => handleOpenModal(project)}
              />
            </motion.div>
          ))}
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};
