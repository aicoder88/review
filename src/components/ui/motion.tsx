import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MotionProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    viewport?: { once?: boolean; margin?: string };
}

function buildRevealStyle(delay: number, duration: number, style?: CSSProperties) {
    return {
        ...style,
        ['--reveal-delay' as string]: `${delay}s`,
        ['--reveal-duration' as string]: `${duration}s`,
    } as CSSProperties;
}

export function FadeIn({ children, delay = 0, duration = 0.5, className, style, ...props }: MotionProps) {
    return (
        <div
            className={cn('reveal-fade-in', className)}
            style={buildRevealStyle(delay, duration, style)}
            {...props}
        >
            {children}
        </div>
    );
}

export function FadeUp({ children, delay = 0, duration = 0.5, className, style, ...props }: MotionProps) {
    return (
        <div
            className={cn('reveal-fade-up', className)}
            style={buildRevealStyle(delay, duration, style)}
            {...props}
        >
            {children}
        </div>
    );
}

export function ScalePop({ children, delay = 0, duration = 0.5, className, style, ...props }: MotionProps) {
    return (
        <div
            className={cn('reveal-scale-pop', className)}
            style={buildRevealStyle(delay, duration, style)}
            {...props}
        >
            {children}
        </div>
    );
}

export function StaggerChildren({ children, className, ...props }: MotionProps & { staggerDelay?: number }) {
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
}
