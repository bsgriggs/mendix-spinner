import { ReactElement, createElement } from "react";
import  Spinner  from "./components/Spinner";
import { SpinnerPreviewProps } from "../typings/SpinnerProps";

export function preview( props: SpinnerPreviewProps): ReactElement {
    return <Spinner color={props.spinnerColor} size={props.spinnerSize} caption={props.spinnerCaption} thickness={props.spinnerThickness}/>;
}

export function getPreviewCss(): string {
    return require("./ui/Spinner.scss");
}
