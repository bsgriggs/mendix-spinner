import { createElement, ReactElement } from "react";
import { SpinnerTypeEnum } from "typings/SpinnerProps";
import {
    BarLoader,
    BeatLoader,
    BounceLoader,
    CircleLoader,
    ClimbingBoxLoader,
    ClipLoader,
    ClockLoader,
    DotLoader,
    FadeLoader,
    GridLoader,
    HashLoader,
    MoonLoader,
    PacmanLoader,
    PropagateLoader,
    PuffLoader,
    PulseLoader,
    RingLoader,
    RiseLoader,
    RotateLoader,
    ScaleLoader,
    SkewLoader,
    SquareLoader,
    SyncLoader
} from "react-spinners";

export type SpinnerMapProps = {
    spinnerType: SpinnerTypeEnum;
    spinnerColor: string;
    speedMultiplier: number;
    spinnerHeight?: string;
    spinnerMargin?: string;
    spinnerRadius?: string;
    spinnerSize?: string;
    spinnerWidth?: string;
};

const SpinnerMap = ({
    spinnerType,
    spinnerColor,
    speedMultiplier,
    spinnerHeight,
    spinnerMargin,
    spinnerRadius,
    spinnerSize,
    spinnerWidth
}: SpinnerMapProps): ReactElement => {
    const renderLoader = (): ReactElement => {
        let loader: ReactElement;
        switch (spinnerType) {
            case "bar":
                loader = (
                    <BarLoader
                        aria-label="Loading Bar Spinner"
                        color={spinnerColor}
                        height={spinnerHeight}
                        width={spinnerWidth}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "beat":
                loader = (
                    <BeatLoader
                        aria-label="Loading Beat Spinner"
                        color={spinnerColor}
                        size={spinnerSize}
                        margin={spinnerMargin}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "bounce":
                loader = (
                    <BounceLoader
                        aria-label="Loading Bounce Spinner"
                        color={spinnerColor}
                        size={spinnerSize}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "circle":
                loader = (
                    <CircleLoader
                        aria-label="Loading Circle Spinner"
                        color={spinnerColor}
                        size={spinnerSize}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "climbingBox":
                loader = (
                    <ClimbingBoxLoader
                        aria-label="Loading Climbing Spinner"
                        color={spinnerColor}
                        size={spinnerSize}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "clip":
                loader = (
                    <ClipLoader
                        aria-label="Loading Clip Spinner"
                        color={spinnerColor}
                        size={spinnerSize}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "clock":
                loader = (
                    <ClockLoader
                        aria-label="Loading Clock Spinner"
                        color={spinnerColor}
                        size={spinnerSize}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "dot":
                loader = (
                    <DotLoader
                        aria-label="Loading Dot Spinner"
                        color={spinnerColor}
                        size={spinnerSize}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "fade":
                loader = (
                    <FadeLoader
                        aria-label="Loading Fade Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        height={spinnerHeight}
                        width={spinnerWidth}
                        radius={spinnerRadius}
                        margin={spinnerMargin}
                    />
                );
                break;
            case "grid":
                loader = (
                    <GridLoader
                        aria-label="Loading Grid Spinner"
                        color={spinnerColor}
                        size={spinnerSize}
                        margin={spinnerMargin}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "hash":
                loader = (
                    <HashLoader
                        aria-label="Loading Hash Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                    />
                );
                break;
            case "moon":
                loader = (
                    <MoonLoader
                        aria-label="Loading Moon Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                    />
                );
                break;
            case "pacman":
                loader = (
                    <PacmanLoader
                        aria-label="Loading Pacman Spinner"
                        cssOverride={{ width: `calc(${spinnerSize} * 2)`, height: `calc(${spinnerSize} * 2)` }}
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                    />
                );
                break;
            case "propagate":
                loader = (
                    <PropagateLoader
                        aria-label="Loading Propagate Spinner"
                        cssOverride={{ height: spinnerSize }}
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                    />
                );
                break;
            case "puff":
                loader = (
                    <PuffLoader
                        aria-label="Loading Puff Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                    />
                );
                break;
            case "pulse":
                loader = (
                    <PulseLoader
                        aria-label="Loading Pulse Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                        margin={spinnerMargin}
                    />
                );
                break;
            case "ring":
                loader = (
                    <RingLoader
                        aria-label="Loading Ring Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                    />
                );
                break;
            case "rise":
                loader = (
                    <RiseLoader
                        aria-label="Loading Rise Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                        margin={spinnerMargin}
                    />
                );
                break;
            case "rotate":
                loader = (
                    <RotateLoader
                        aria-label="Loading Rotate Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                        margin={spinnerMargin}
                    />
                );
                break;
            case "scale":
                loader = (
                    <ScaleLoader
                        aria-label="Loading Scale Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        height={spinnerHeight}
                        width={spinnerWidth}
                        radius={spinnerRadius}
                        margin={spinnerMargin}
                    />
                );
                break;
            case "skew":
                return (
                    <SkewLoader
                        aria-label="Loading Skew Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                    />
                );
            case "square":
                return (
                    <SquareLoader
                        aria-label="Loading Square Spinner"
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                    />
                );
            case "sync":
                loader = (
                    <SyncLoader
                        aria-label="Loading Sync Spinner"
                        cssOverride={{ height: `calc(${spinnerSize} + 10px)` }}
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        margin={spinnerMargin}
                        size={spinnerSize}
                    />
                );
                break;
        }
        return loader;
    };

    return renderLoader();
};

export default SpinnerMap;
