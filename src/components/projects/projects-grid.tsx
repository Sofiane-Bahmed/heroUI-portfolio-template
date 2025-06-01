import { useState, useEffect } from "react";

import { ProjectCard } from "../project-card";
import { ProjectsGridProps, Project } from "./types";
import { ProjectModal } from "../project-modal";
import { MotionEffect } from "../motion-effect";

export const ProjectsGrid = ({ projects, className = "" }: ProjectsGridProps) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [animationKey, setAnimationKey] = useState(0);

    const handleOpenModal = (project: Project) => setSelectedProject(project);
    const handleCloseModal = () => setSelectedProject(null);

    useEffect(() => {
        setAnimationKey(prevKey => prevKey + 1);
    }, [projects]);

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
            {projects.map((project, index) => (
                <MotionEffect
                    key={`${project.id}-${animationKey}`} 
                    slide={{ direction: 'down' }}
                    fade
                    zoom
                    inView
                    delay={0.1 + index * 0.1} 
                    className="w-full md:max-w-none"
                    resetKey={animationKey}
                >
                    <ProjectCard
                        project={project}
                        onViewDetails={() => handleOpenModal(project)}
                    />
                </MotionEffect>
            ))}
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={handleCloseModal}
                project={selectedProject}
            />
        </div>
    );
};