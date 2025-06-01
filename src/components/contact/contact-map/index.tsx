import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {MapSkeleton} from "./map-skeleton"
import { ContactMapProps } from "../types";

export const ContactMap: React.FC<ContactMapProps> = ({ src, className = "" }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden relative ${className}`}
        >
            <AnimatePresence mode="wait">
                {!isLoaded && !hasError && (
                    <motion.div
                        key="skeleton"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-default-100 rounded-xl"
                    >
                        <MapSkeleton />
                    </motion.div>
                )}

                {hasError ? (
                    <motion.div
                        key="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-default-100 rounded-xl flex items-center justify-center"
                    >
                        <div className="text-center space-y-2">
                            <div className="text-default-400 text-lg">📍</div>
                            <p className="text-default-500 text-sm">Unable to load map</p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.iframe
                        key="map"
                        src={src}
                        loading="lazy"
                        allowFullScreen
                        className="w-full h-full border-none filter grayscale invert"
                        title="Location Map"
                        onLoad={handleLoad}
                        onError={handleError}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isLoaded ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            visibility: isLoaded ? 'visible' : 'hidden',
                        }}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};