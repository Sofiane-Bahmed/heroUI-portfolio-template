import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@heroui/react";

import { OrbitingCircles } from "../orbiting-circles";
import { SectionHeader } from "./section-header";
import { capitalize } from "../../lib/utils";
import { TechCategories } from "./types";

interface SkillsProps {
    tech: TechCategories;
}

export const Skills = ({ tech }: SkillsProps) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <SectionHeader icon="mdi:tools" title="Skills" />

        <Accordion variant="bordered" selectionMode="multiple">
            {Object.entries(tech).map(([category, { description, tools }]) => (
                <AccordionItem
                    key={category}
                    aria-label={category}
                    title={capitalize(category)}
                >
                    <p className="mb-4 text-sm text-muted-foreground">{description}</p>

                    <div className="relative h-[300px] w-full">
                        <OrbitingCircles
                            radius={120}
                            duration={20}
                            className="h-full w-full [&>div]:hover:scale-110 [&>div]:hover:text-primary-500"
                        >
                            {tools.map((tool) => (
                                <div key={tool.name}>
                                    <Icon
                                        icon={tool.icon}
                                        width={24}
                                        height={24}
                                        className="transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </OrbitingCircles>
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    </motion.div>
);