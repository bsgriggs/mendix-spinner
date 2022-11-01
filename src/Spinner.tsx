import { ReactElement, createElement, Fragment } from "react";
import SpinnerMap from "./components/SpinnerMap";
import Caption from "./components/Caption";
import { ValueStatus } from "mendix";
import { SpinnerContainerProps } from "../typings/SpinnerProps";

import "./ui/Spinner.css";

export function Spinner({
    name,
    showSpinner,
    spinnerType,
    spinnerColor,
    spinnerSize,
    speedMultiplier,
    spinnerHeight,
    spinnerMargin,
    spinnerRadius,
    spinnerWidth,
    spinnerCaption
}: SpinnerContainerProps): ReactElement {
    if (
        showSpinner &&
        spinnerColor.status === ValueStatus.Available &&
        spinnerSize.status === ValueStatus.Available &&
        speedMultiplier.status === ValueStatus.Available &&
        spinnerCaption?.status !== ValueStatus.Loading
    ) {
        return (
            <div id={name} className="mx-spinner">
                <SpinnerMap
                    spinnerType={spinnerType}
                    spinnerColor={spinnerColor.value}
                    speedMultiplier={parseFloat(speedMultiplier.value.toFixed(2))}
                    spinnerHeight={spinnerHeight.value}
                    spinnerMargin={spinnerMargin.value}
                    spinnerRadius={spinnerRadius.value}
                    spinnerSize={spinnerSize.value}
                    spinnerWidth={spinnerWidth.value}
                />
                <Caption caption={spinnerCaption?.value} />
            </div>
        );
    } else {
        return <Fragment />;
    }
}
