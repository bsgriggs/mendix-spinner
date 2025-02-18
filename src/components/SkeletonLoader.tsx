import { createElement, ReactElement, useMemo, CSSProperties } from "react";
import { createAnimation } from "../utils/Animation";

const shimmer = createAnimation("SkeletonLoader", "100% {transform: translateX(100%);}", "skeleton");

export interface SkeletonLoaderProps {
    iterator: number;
    color?: string;
    speedMultiplier?: number;
    height?: string;
    width?: string;
}

export default function SkeletonSpinner({
    iterator = 0,
    color = "#DDDBDD",
    speedMultiplier = 1,
    height = "2.5rem",
    width = "100%"
}: SkeletonLoaderProps): ReactElement {
    const wrapper: CSSProperties = useMemo(
        () => ({
            display: "inline-block",
            position: "relative",
            overflow: "hidden",

            backgroundColor: color,
            height,
            width
        }),
        [color, height, width]
    );

    const style: CSSProperties = useMemo(
        () => ({
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            transform: "translateX(-100%)",
            backgroundImage: `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.6) 60%, 
            rgba(255, 255, 255, 0)
        )`,
            animation: `${shimmer} ${2 / speedMultiplier}s infinite`,
            animationDelay: `${0.05 * iterator}s`
        }),
        [iterator, speedMultiplier]
    );

    return (
        <span style={wrapper}>
            <span style={style} />
        </span>
    );
}
