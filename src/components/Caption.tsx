import { createElement, Fragment, ReactElement } from "react";

export type CaptionProps = {
    caption?: string;
};

const Caption = ({ caption }: CaptionProps): ReactElement => {
    if (caption !== undefined && caption.trim() !== "") {
        return <span className="mx-text">{caption}</span>;
    } else {
        return <Fragment />;
    }
};

export default Caption;
