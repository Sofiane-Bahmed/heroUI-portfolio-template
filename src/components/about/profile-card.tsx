import { useState } from "react";

import { Card, CardFooter, Skeleton } from "@heroui/react";
import { HighlightText } from "../textAnimations/highlight-text";
import { SplittingText } from "../textAnimations/splitting-text";
import { ProfileCardProps } from "./types";

export const ProfileCard = ({ image, name, title, description }: ProfileCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Card className="w-full max-w-6xl mx-auto p-0 md:p-0 mb-12 rounded-2xl dark:shadow-neutral-700 shadow-md overflow-hidden bg-white/90 dark:bg-black/60">
            <div className="flex flex-col mdplus:flex-row items-center md:items-start gap-8">
                {/* Left image card */}
                <div className="w-full md:w-[300px] relative h-[300px]">
                    <Card isFooterBlurred className="w-full h-full">
                        <Skeleton isLoaded={imageLoaded} className="w-full h-full rounded-lg">
                            <img
                                alt="Profile background"
                                className="z-0 w-full h-full object-cover"
                                src={image}
                                onLoad={() => setImageLoaded(true)}
                            />
                        </Skeleton>
                        <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t border-white/20">
                            <div className="flex flex-col text-white">
                                <HighlightText
                                    className="text-lg font-semibold "
                                    text={name}
                                />
                                <p className="text-sm text-white/80">{title}</p>
                            </div>
                        </CardFooter>
                    </Card>
                </div>

                {/* Right Description */}
                <div className="text-muted-foreground text-sm leading-relaxed max-w-2xl px-6 py-4">
                    {description.map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            <SplittingText
                                text={paragraph}
                                type="words"
                                inView={true}
                                inViewOnce={true}
                                delay={index * 500}
                                motionVariants={{ stagger: 0.08 }}
                            />
                        </p>
                    ))}
                </div>
            </div>
        </Card>
    )
};