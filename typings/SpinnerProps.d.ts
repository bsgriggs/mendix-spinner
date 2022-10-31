/**
 * This file was generated from Spinner.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";
import { Big } from "big.js";

export type SpinnerTypeEnum = "bar" | "beat" | "bounce" | "circle" | "climbingBox" | "clip" | "clock" | "dot" | "fade" | "grid" | "hash" | "moon" | "pacman" | "propagate" | "puff" | "pulse" | "ring" | "rise" | "rotate" | "scale" | "skew" | "square" | "sync";

export interface SpinnerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    showSpinner: DynamicValue<boolean>;
    spinnerCaption?: DynamicValue<string>;
    speedMultiplier: DynamicValue<Big>;
    spinnerType: SpinnerTypeEnum;
    spinnerColor: DynamicValue<string>;
    spinnerSize: DynamicValue<string>;
    spinnerHeight: DynamicValue<string>;
    spinnerWidth: DynamicValue<string>;
    spinnerRadius: DynamicValue<string>;
    spinnerMargin: DynamicValue<string>;
}

export interface SpinnerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    showSpinner: string;
    spinnerCaption: string;
    speedMultiplier: string;
    spinnerType: SpinnerTypeEnum;
    spinnerColor: string;
    spinnerSize: string;
    spinnerHeight: string;
    spinnerWidth: string;
    spinnerRadius: string;
    spinnerMargin: string;
}
