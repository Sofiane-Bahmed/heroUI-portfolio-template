import { motion } from "framer-motion";

import { SectionHeader } from "../section-header";
import { TimelineItem } from "../timelines/timeline-item";
import { containerVariants, itemVariants } from "../variants";
import { ExperienceItems } from "../types";

interface ExperienceTimelineProps {
    experience: ExperienceItems;
}

export const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => (
    <div className="mb-24">
        <SectionHeader icon="mdi:briefcase-outline" title="Experience" />

        <motion.ol
            className="relative ml-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="absolute top-2 left-2 bottom-0 w-px bg-primary-500" />
            {experience.map((item, idx) => (
                <TimelineItem
                    key={idx}
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    variants={itemVariants}
                    delay={idx * 300}
                />
            ))}
        </motion.ol>
    </div>
);