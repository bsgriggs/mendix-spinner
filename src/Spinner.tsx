import { ReactElement, createElement, Fragment } from "react";
import SpinnerComp from "./components/Spinner";

import { SpinnerContainerProps } from "../typings/SpinnerProps";

import "./ui/Spinner.scss";
import { ValueStatus } from "mendix";

export function Spinner(props: SpinnerContainerProps): ReactElement {
    if (
        props.spinnerColor.status === ValueStatus.Available &&
        props.spinnerSize.status === ValueStatus.Available &&
        props.spinnerThickness.status === ValueStatus.Available
    ) {
        return (
            <SpinnerComp
                color={props.spinnerColor.value}
                size={props.spinnerSize.value}
                thickness={props.spinnerThickness.value}
                caption={props.spinnerCaption?.value}
            />
        );
    } else {
        return <Fragment />;
    }
}
