import { motion } from "framer-motion";

import { SplittingText } from "../../textAnimations/splitting-text";
import { TimelineItemProps } from "../types";

export const TimelineItem = ({
    title,
    date,
    description,
    variants,
    delay = 0
}: TimelineItemProps) => (
    <motion.li
        className="mb-10 relative pl-6"
        variants={variants}
    >
        <span className="absolute left-0 top-1 bg-primary-500 rounded-full w-4 h-4 border-2 border-background z-10" />
        <h4 className="text-lg font-semibold">{title}</h4>
        <time className="block mb-1 text-sm text-primary-500">{date}</time>
        <SplittingText
            type="words"
            text={description}
            className="text-sm text-muted-foreground"
            inView={true}
            inViewOnce={true}
            delay={delay}
        />
    </motion.li>
);