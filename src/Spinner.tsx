import { ReactElement, createElement } from "react";
import SpinnerMap from "./components/SpinnerMap";
import Caption from "./components/Caption";
import { ValueStatus, DynamicValue } from "mendix";
import { SpinnerContainerProps } from "../typings/SpinnerProps";

import "./ui/Spinner.css";
import classNames from "classnames";

export function Spinner(props: SpinnerContainerProps): ReactElement {
    const convertStyleProp = (dynamicValue: DynamicValue<string> | undefined): string | undefined =>
        dynamicValue && dynamicValue.status === ValueStatus.Available && dynamicValue.value.trim() !== ""
            ? dynamicValue.value
            : undefined;

    return (
        <div id={props.name} className={classNames("mx-spinner", props.class)} style={props.style}>
            <SpinnerMap
                spinnerType={props.spinnerType}
                spinnerColor={convertStyleProp(props.spinnerColor)}
                speedMultiplier={Number(props.speedMultiplier.value)}
                spinnerHeight={convertStyleProp(props.spinnerHeight)}
                spinnerMargin={convertStyleProp(props.spinnerMargin)}
                spinnerRadius={convertStyleProp(props.spinnerRadius)}
                spinnerSize={convertStyleProp(props.spinnerSize)}
                spinnerWidth={convertStyleProp(props.spinnerWidth)}
            />
            <Caption caption={props.spinnerCaption?.value} ariaLiveEnabled={props.ariaLiveCaption.value as boolean} />
        </div>
    );
}
