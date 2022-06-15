/**
 * This file was generated from Spinner.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface SpinnerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    spinnerCaption?: DynamicValue<string>;
    spinnerColor: DynamicValue<string>;
    spinnerSize: DynamicValue<string>;
    spinnerThickness: DynamicValue<string>;
}

export interface SpinnerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    spinnerCaption: string;
    spinnerColor: string;
    spinnerSize: string;
    spinnerThickness: string;
}
