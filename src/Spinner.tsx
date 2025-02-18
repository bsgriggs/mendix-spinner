import { ReactElement, createElement, useState, useEffect } from "react";
import SpinnerMap from "./components/SpinnerMap";
import Caption from "./components/Caption";
import { ValueStatus, DynamicValue } from "mendix";
import { SpinnerContainerProps } from "../typings/SpinnerProps";

import "./ui/Spinner.css";
import classNames from "classnames";

const convertStyleProp = (dynamicValue: DynamicValue<string> | undefined): string | undefined =>
    dynamicValue && dynamicValue.status === ValueStatus.Available && dynamicValue.value.trim() !== ""
        ? dynamicValue.value
        : undefined;

export function Spinner(props: SpinnerContainerProps): ReactElement {
    const [spinners, setSpinners] = useState<ReactElement[]>([]);

    useEffect(() => {
        const newSpinners: ReactElement[] = [];
        if (props.count.status === ValueStatus.Available) {
            const count = Number(props.count.value);
            for (let i = 0; i < count; i++) {
                newSpinners.push(
                    <SpinnerMap
                        key={i}
                        iterator={i}
                        spinnerType={props.spinnerType}
                        spinnerColor={convertStyleProp(props.spinnerColor)}
                        speedMultiplier={Number(props.speedMultiplier.value)}
                        spinnerHeight={convertStyleProp(props.spinnerHeight)}
                        spinnerMargin={convertStyleProp(props.spinnerMargin)}
                        spinnerRadius={convertStyleProp(props.spinnerRadius)}
                        spinnerSize={convertStyleProp(props.spinnerSize)}
                        spinnerWidth={convertStyleProp(props.spinnerWidth)}
                    />
                );
            }
        }

        setSpinners(newSpinners);
    }, [
        props.count,
        props.spinnerType,
        props.spinnerColor,
        props.speedMultiplier,
        props.spinnerHeight,
        props.spinnerMargin,
        props.spinnerRadius,
        props.spinnerSize,
        props.spinnerWidth
    ]);

    return (
        <div id={props.name} className={classNames("mx-spinner", props.class)} style={props.style}>
            {spinners}
            <Caption caption={props.spinnerCaption?.value} ariaLiveEnabled={props.ariaLiveCaption.value as boolean} />
        </div>
    );
}
