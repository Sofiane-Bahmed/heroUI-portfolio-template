import * as React from 'react';
import {
    motion,
    useInView,
    type HTMLMotionProps,
    type Transition,
    type UseInViewOptions,
} from 'motion/react';

import { cn } from '../../lib/utils';

type HighlightTextProps = HTMLMotionProps<'span'> & {
    text: string;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    transition?: Transition;
};

const HighlightText = React.forwardRef<HTMLSpanElement, HighlightTextProps>(
    (
        {
            text,
            className,
            inView = false,
            inViewMargin = '0px',
            inViewOnce = true,
            transition = { duration: 2, ease: 'easeInOut' },
            ...props
        },
        ref
    ) => {
        const localRef = React.useRef<HTMLSpanElement>(null);
        React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement);

        const inViewResult = useInView(localRef, {
            once: inViewOnce,
            margin: inViewMargin,
        });
        const isInView = !inView || inViewResult;

        return (
            <motion.span
                ref={localRef}
                data-slot="highlight-text"
                initial={{
                    backgroundSize: '0% 100%',
                }}
                animate={isInView ? { backgroundSize: '100% 100%' } : undefined}
                transition={transition}
                style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left center',
                    display: 'inline',
                }}
                className={cn(
                    `relative inline-block px-2 py-1 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400`,
                    className,
                )}
                {...props}
            >
                {text}
            </motion.span>
        );
    }
);

HighlightText.displayName = 'HighlightText';

export { HighlightText, type HighlightTextProps };
