/**
 * This file was generated from Spinner.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";
import { Big } from "big.js";

export type SpinnerTypeEnum =
    | "bar"
    | "beat"
    | "bounce"
    | "circle"
    | "climbingBox"
    | "clip"
    | "clock"
    | "dot"
    | "fade"
    | "grid"
    | "hash"
    | "moon"
    | "pacman"
    | "propagate"
    | "puff"
    | "pulse"
    | "ring"
    | "rise"
    | "rotate"
    | "scale"
    | "skeleton"
    | "skew"
    | "square"
    | "sync";

export interface SpinnerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    spinnerCaption?: DynamicValue<string>;
    speedMultiplier: DynamicValue<Big>;
    spinnerType: SpinnerTypeEnum;
    count: DynamicValue<Big>;
    spinnerColor: DynamicValue<string>;
    spinnerSize?: DynamicValue<string>;
    spinnerHeight?: DynamicValue<string>;
    spinnerWidth?: DynamicValue<string>;
    spinnerRadius?: DynamicValue<string>;
    spinnerMargin?: DynamicValue<string>;
    ariaLiveCaption: DynamicValue<boolean>;
}

export interface SpinnerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    spinnerCaption: string;
    speedMultiplier: string;
    spinnerType: SpinnerTypeEnum;
    count: string;
    spinnerColor: string;
    spinnerSize: string;
    spinnerHeight: string;
    spinnerWidth: string;
    spinnerRadius: string;
    spinnerMargin: string;
    ariaLiveCaption: string;
}
