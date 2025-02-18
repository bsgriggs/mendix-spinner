import { createElement, Fragment, ReactElement } from "react";

export type CaptionProps = {
    caption?: string;
    ariaLiveEnabled: boolean;
};

const Caption = (props: CaptionProps): ReactElement => {
    if (props.caption !== undefined && props.caption.trim() !== "") {
        return (
            <span
                className="mx-text"
                role={props.ariaLiveEnabled ? "alert" : undefined}
                aria-live={props.ariaLiveEnabled ? "polite" : undefined}
            >
                {props.caption}
            </span>
        );
    } else {
        return <Fragment />;
    }
};

export default Caption;
