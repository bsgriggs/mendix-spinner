import { ReactElement, createElement } from "react";
import SpinnerMap from "./components/SpinnerMap";
import Caption from "./components/Caption";
import { SpinnerPreviewProps } from "../typings/SpinnerProps";

export function preview({
    spinnerType,
    spinnerColor,
    spinnerSize,
    speedMultiplier,
    spinnerHeight,
    spinnerMargin,
    spinnerRadius,
    spinnerWidth,
    spinnerCaption
}: SpinnerPreviewProps): ReactElement {
    return (
        <div className="mx-spinner">
            <SpinnerMap
                spinnerType={spinnerType}
                spinnerColor={spinnerColor}
                speedMultiplier={parseFloat(speedMultiplier || '1')}
                spinnerHeight={spinnerHeight}
                spinnerMargin={spinnerMargin}
                spinnerRadius={spinnerRadius}
                spinnerSize={spinnerSize}
                spinnerWidth={spinnerWidth}
            />
            <Caption caption={spinnerCaption} />
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/Spinner.css");
}
