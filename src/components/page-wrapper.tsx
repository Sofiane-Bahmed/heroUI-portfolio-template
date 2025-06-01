import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

type PageWrapperProps = {
    children: ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
    const location = useLocation();

    return (
        <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    );
};

const pageVariants = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.98,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
    },
};

const pageTransition = {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1],
};
