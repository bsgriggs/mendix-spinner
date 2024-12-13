import { ReactElement, createElement } from "react";
import Caption from "./components/Caption";
import { SpinnerPreviewProps } from "../typings/SpinnerProps";

export function preview({ spinnerType, spinnerCaption }: SpinnerPreviewProps): ReactElement {
    return (
        <div
            style={{
                borderRadius: "4px",
                borderWidth: "1px",
                borderColor: "gray",
                borderStyle: "solid",
                margin: "8px",
                padding: "4px",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <span className="mx-text">{`Spinner - ${spinnerType}`}</span>
            <Caption caption={spinnerCaption} ariaLiveEnabled={false} />
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/Spinner.css");
}
