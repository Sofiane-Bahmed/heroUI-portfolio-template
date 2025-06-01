import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Avatar,
    AvatarGroup,
    Tooltip
} from "@heroui/react";
import { Icon } from "@iconify/react";

import ImageGallery from "./image-gallery";

export const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!project) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            scrollBehavior="inside"
            size="xl"
            backdrop="blur"
            className="border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/70 shadow-md dark:shadow-cyan-900/40 rounded-xl overflow-hidden transition-colors"
        >
            <ModalContent>
                <ModalHeader className="text-xl font-bold text-primary-700 border-b  border-white/20">
                    {project.title}
                </ModalHeader>
                <ModalBody>
                    {project.gallery && project.gallery.length > 0 && (
                        <ImageGallery images={project.gallery} />
                    )}

                    <p className="text-sm text-primary-500 mb-3 font-medium uppercase tracking-wide">
                        {project.category}
                    </p>

                    <div className="text-foreground-600 leading-relaxed mb-6 whitespace-pre-line">
                        {project.details}
                    </div>
                    {project.tech && (
                        <div className="mb-6">
                            <h4 className="font-semibold mb-6 text-foreground">
                                Technologies Used:
                            </h4>
                            <AvatarGroup >
                                {project.tech.map(({ name, icon }) => (
                                    <Tooltip
                                        key={name}
                                        content={name}
                                        showArrow={true}>
                                        <Avatar
                                            key={name}
                                            icon={<Icon icon={icon} width={25} />}
                                            classNames={{
                                                base: "bg-transparent",
                                                icon: "text-foreground dark:text-foreground-dark"
                                            }}
                                            showFallback
                                        />
                                    </Tooltip>
                                ))}
                            </AvatarGroup>
                        </div>
                    )}
                </ModalBody>

                {(project.github || project.live) && (
                    <div className="flex justify-end mb-4 px-6 gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground-500 hover:text-foreground transition"
                                aria-label="View on GitHub"
                            >
                                <Icon icon="mdi:github" width={22} height={22} />
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground-500 hover:text-foreground transition"
                                aria-label="View Live Project"
                            >
                                <Icon icon="mdi:web" width={22} height={22} />
                            </a>
                        )}
                    </div>
                )}

                <ModalFooter className="flex flex-wrap gap-3 justify-end border-t border-white/20">
                    <Button
                        color="danger"
                        variant="light"
                        onClick={onClose}
                        className="text-foreground-500"
                    >
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
