import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { ContactCardProps } from "./types";

export const ContactCard = ({ heading, children }: ContactCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto"
    >
        <Card className="border-none shadow-xl bg-white/90 dark:bg-black/60">
            <CardBody className="p-8">
                <div className="text-center mb-8">
                    <h1 className="text-foreground-600">
                        {heading}
                    </h1>
                </div>
                {children}
            </CardBody>
        </Card>
    </motion.div>
);