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
import SkeletonLoader from "./SkeletonLoader";

export type SpinnerMapProps = {
    spinnerType: SpinnerTypeEnum;
    iterator: number;
    spinnerColor?: string;
    speedMultiplier?: number;
    spinnerHeight?: string;
    spinnerMargin?: string;
    spinnerRadius?: string;
    spinnerSize?: string;
    spinnerWidth?: string;
};

const SpinnerMap = ({
    spinnerType,
    iterator,
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
                        color={spinnerColor}
                        size={spinnerSize}
                        margin={spinnerMargin}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "bounce":
                loader = <BounceLoader color={spinnerColor} size={spinnerSize} speedMultiplier={speedMultiplier} />;
                break;
            case "circle":
                loader = <CircleLoader color={spinnerColor} size={spinnerSize} speedMultiplier={speedMultiplier} />;
                break;
            case "climbingBox":
                loader = (
                    <ClimbingBoxLoader color={spinnerColor} size={spinnerSize} speedMultiplier={speedMultiplier} />
                );
                break;
            case "clip":
                loader = <ClipLoader color={spinnerColor} size={spinnerSize} speedMultiplier={speedMultiplier} />;
                break;
            case "clock":
                loader = <ClockLoader color={spinnerColor} size={spinnerSize} speedMultiplier={speedMultiplier} />;
                break;
            case "dot":
                loader = <DotLoader color={spinnerColor} size={spinnerSize} speedMultiplier={speedMultiplier} />;
                break;
            case "fade":
                loader = (
                    <FadeLoader
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
                        color={spinnerColor}
                        size={spinnerSize}
                        margin={spinnerMargin}
                        speedMultiplier={speedMultiplier}
                    />
                );
                break;
            case "hash":
                loader = <HashLoader color={spinnerColor} speedMultiplier={speedMultiplier} size={spinnerSize} />;
                break;
            case "moon":
                loader = <MoonLoader color={spinnerColor} speedMultiplier={speedMultiplier} size={spinnerSize} />;
                break;
            case "pacman":
                loader = (
                    <PacmanLoader
                        color={spinnerColor}
                        margin={spinnerMargin}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                    />
                );
                break;
            case "propagate":
                loader = <PropagateLoader color={spinnerColor} speedMultiplier={speedMultiplier} size={spinnerSize} />;
                break;
            case "puff":
                loader = <PuffLoader color={spinnerColor} speedMultiplier={speedMultiplier} size={spinnerSize} />;
                break;
            case "pulse":
                loader = (
                    <PulseLoader
                        color={spinnerColor}
                        speedMultiplier={speedMultiplier}
                        size={spinnerSize}
                        margin={spinnerMargin}
                    />
                );
                break;
            case "ring":
                loader = <RingLoader color={spinnerColor} speedMultiplier={speedMultiplier} size={spinnerSize} />;
                break;
            case "rise":
                loader = (
                    <RiseLoader
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
                return <SkewLoader color={spinnerColor} speedMultiplier={speedMultiplier} size={spinnerSize} />;
            case "skeleton":
                return (
                    <SkeletonLoader
                        iterator={iterator}
                        color={spinnerColor}
                        width={spinnerWidth}
                        height={spinnerHeight}
                        speedMultiplier={speedMultiplier}
                    />
                );
            case "square":
                return <SquareLoader color={spinnerColor} speedMultiplier={speedMultiplier} size={spinnerSize} />;
            case "sync":
                loader = (
                    <SyncLoader
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
