import { SpinnerPreviewProps } from "../typings/SpinnerProps";
import { hidePropertiesIn, hidePropertyIn } from "./utils/PageEditorUtils";
import { StructurePreviewProps, RowLayoutProps, ContainerProps, TextProps, ImageProps } from "./utils/PageEditor";

export type Properties = PropertyGroup[];

export type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

export type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export function getProperties(_values: SpinnerPreviewProps, defaultProperties: Properties): Properties {
    switch (_values.spinnerType) {
        case "bar":
            hidePropertiesIn(defaultProperties, _values, ["spinnerSize", "spinnerRadius", "spinnerMargin"]);
            break;
        case "beat":
            hidePropertiesIn(defaultProperties, _values, ["spinnerHeight", "spinnerWidth", "spinnerRadius"]);
            break;
        case "bounce":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "circle":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "climbingBox":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "clip":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "clock":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "dot":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "fade":
            hidePropertyIn(defaultProperties, _values, "spinnerSize");
            break;
        case "grid":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "hash":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "moon":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "pacman":
            hidePropertiesIn(defaultProperties, _values, ["spinnerHeight", "spinnerWidth", "spinnerRadius"]);
            break;
        case "propagate":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "puff":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "pulse":
            hidePropertiesIn(defaultProperties, _values, ["spinnerHeight", "spinnerWidth", "spinnerRadius"]);
            break;
        case "ring":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "rise":
            hidePropertiesIn(defaultProperties, _values, ["spinnerHeight", "spinnerWidth", "spinnerRadius"]);
            break;
        case "rotate":
            hidePropertiesIn(defaultProperties, _values, ["spinnerHeight", "spinnerWidth", "spinnerRadius"]);
            break;
        case "scale":
            hidePropertyIn(defaultProperties, _values, "spinnerSize");
            break;
        case "skew":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "square":
            hidePropertiesIn(defaultProperties, _values, [
                "spinnerHeight",
                "spinnerWidth",
                "spinnerRadius",
                "spinnerMargin"
            ]);
            break;
        case "sync":
            hidePropertiesIn(defaultProperties, _values, ["spinnerHeight", "spinnerWidth", "spinnerRadius"]);
            break;
    }
    return defaultProperties;
}

export function check(_values: SpinnerPreviewProps): Problem[] {
    const errors: Problem[] = [];
    // Add errors to the above array to throw errors in Studio and Studio Pro.
    /* Example
    if (values.myProperty !== "custom") {
        errors.push({
            property: `myProperty`,
            message: `The value of 'myProperty' is different of 'custom'.`,
            url: "https://github.com/myrepo/mywidget"
        });
    }
    */
    return errors;
}

export function getPreview(values: SpinnerPreviewProps, isDarkMode: boolean): StructurePreviewProps | null {
    const imageContainer:ImageProps = {
        type: "Image",
        width: 32,
        height: 32,
        data: "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcOSURBVHgB7ZtfTFtVGMC/ewuszRx0ONkIbLvsD/TBCDWbLurCJcaIsLg+qI+uzidNDJ178Y2SqFlMdCXzwUQdEH0wGpPOOGfMTLsnmP8o0w3cMrnLgAkT6JistKX3eL4LZYW10HvO7W2j/pLDub330NzvO9/5znfO+SpAjnG4bkgQS8gJAepFIkoEiCSAYMc6tR29p9B74cV6AIgQEtcJoSF/pQI5RIAc4DhwQ06QxEEqsGuloAwo9C2DoiD2DH1dGQSDMUwBkmvYXhKztoGgeoCAHXIDWkeHpcQSNMoyuBVgkuDLEQCHSrdQLHTyKoJLAXUH/mwjJOE1Q/DIVC9MKx9CdOaS9rnYVg228scU64ZdHaO/vNINjDApAB0biZMuQogMJjB55V1a3sv4fH1FkzI7EWgC9Bc6sYBOtF5PqJ/RXneACcyMfA43B72rtonPKnaxuMxdZKuMqvFwH+hAlwJ2t44dB6J66aUVTCAeuQ7jF14HdX5mzbZEjVqp8M2LH89BlojZNqxtGe0SCPGAiUQmezUl6MRLS1e2jbNSABW+n1ZuMJmw8jEw4rZt3NufTcM1FYA9T6sGMBk1PgNzM78BK5HpHxss1oo1LWFVBdS23GiHPPQ8Er19EXhJzE24beV7jq/WJqMC0NvTfvBCnojf0T320xKZ+slTLh3O6LvSKkCb5zHAySPxyAgYRXj0y3a7wyOle5ZWASRGAqaFtSagxm/Z4zfPp/UHRStvOFpG3Cr/Cu5eaPz+5CNWpXHvOunB3etg6xYLlN4nLCl5dCIBo+MJGLwag7N9c3DmChjK7GSvjENhSjnpW/5aKWimT3ufGKiAjWWWkPfVsnDzE1acSbK2KkVRIBgMQkdHh3ZtBLayh8Kbm07VKP6acPLeskhw486j1OuTZjAA2rvhd46W9x07Ynfs2laEYbOu6NFut0NDQwN4PAv+69y5rIO7jMxHx61FqiV6Z7I3mLy3ZAHY+2pc7Tdi7NftKPF/+vb9cukGwTA/glbQ1NTEbQ0rreCuE6TbVkYI/7iz5NRXJzYZKjwiSRL09/drVsFD5NYF+9+XTixNi0sKICC2Ayco/Mk3NzUC5GYGwWERCAS4lTA7frYtea0pAPfweB0fmn0uhU+SVAJaBCtoBdK+L2S81hSgEvUQ8KHgmAcwJ3ZIKgFrVsaHjrmw1hQgEEEGDt7y2MNGj/m1QAtIzhAsJOJTB7EWNO8fU4eBke2VRcp3H1VIkAfC4TDU1NRotV7E4lIo3Xm4RlQTcS6PcvTQhryFzDgEWK0Al9uJ21dlERIWHgUoT++36Ve/gbS1tQEr87NjDSL1AvXAyP49WnAnQR5BK5BlGViIRa5JIhD26e9Z2QaFgMvlAhYS0b+2iwIRmcfwjq1FBbFkrq9nNmK7yBMAbdtSBIUAR1AkZb0tno7U9Xw+4YkKuRTwb+B/BWBGBjCC21iFAMcegSISQWUOZEbH56EQ4FBAWASB3QIGrxaGAgYGBoCRayJRyTVg5GxfBAoBv98PjIREuisaAkZ++DUGM7Mq5JPk7jEjIRFUSxA46PHPQj7hEB4JabvCdS1jw6wRYel6Eb7vqtDqfID7AYxOUMF/X9gSA/UUMIJDIF9WwHloEsQ/mgU4DlyXVVUMACPY+/73N0FVhXlrAxQce58DTKoKLh2M1LaOTvOcC1RttoD/xAOmDAXcAnM6nVwBEC2a9u6+LYFO4AAPNl98YzLnswIKb8AJUUfyYkkBsZKYD09wgYPBP+I5VUJS+FCIeebWvgYWxz+ypADtrIzTChBUguu1m3SdYGyUiD2OZs8pPNIDKQmVywasEVaA4HB4tOUTzUvzgr2O38M55pMotGTOD0DqWkc8hAjHgRFMapy41K5leCK4WeH1eqGxsVHXxgUK3tnZCT6fj2nfPwMv0dKdeiNtrnBd61iAJQ8YkxpH+p7PmNyIu7e4gYl7eKiMVIVg72LBhQ3G9pwRXjoUWPT8qaRVgKOZnhZZ9OUKRGcuwvXzz2kHDgUImpAT0iRTp520h76tVAQgWQ9g7PGxn18uVOERlEVJ9yBj1PL76WofATWrWQFT2Rlyes0Chfdlerjm7wVqnxnpppsmGY/PUfDhwD4oUHDKc6/WYM249fKZajdVU8bJNzzMnNCca/Cd3Ws1yipwv3y6ykmP0HrSPYveZk9oziH4rs5sGma9ctEsAdR7HGP8jnEprQaBfsudbWNdS7fL32z1CgI5YkS0mAPwnY7QoithQPfaFWcHMSE6k+cJpdUvQAEQhAWT94GZYF7xzqcuDovFpQRwQW1+mQadPW44GDVWPfyBz2QloOBegMLKaJdoCcB/UPCVyLCw4sKXNULoYVgY2zLkgJz8ejwFTMCSYcE6MI3DvqKkosCCJ8caT6swkAkCw69B9fAPX0U7KQNhypoAAAAASUVORK5CYII="
    }
    
    const titleHeader: RowLayoutProps = {
        type: "RowLayout",
        columnSize: "grow",
        backgroundColor: isDarkMode ? "#4F4F4F" : "#F5F5F5",
        borderWidth: 1,
        children: [
            imageContainer,
            {
                type: "Container",
                padding: 8,
                children: [
                    {
                        type: "Text",
                        content: "Spinner",
                        bold: true,
                        fontColor: isDarkMode ? "#DEDEDE" : "#6B707B"
                    } as TextProps
                ]
            }
        ]
    };
    const typeText = {
        type: "Container",
        padding: 8,
        children: [
            {
                type: "Text",
                content: "Type: " + values.spinnerType,
                fontColor: isDarkMode ? "#DEDEDE" : "#6B707B"
            }
        ]
    } as ContainerProps;

    const captiontext = {
        type: "Container",
        padding: 8,
        children: [
            {
                type: "Text",
                content: "Caption: " + values.spinnerCaption,
                fontColor: isDarkMode ? "#DEDEDE" : "#6B707B"
            }
        ]
    } as ContainerProps;

    return {
        type: "Container",
        borders: true,
        children: values.spinnerCaption !== "" ? [titleHeader, typeText, captiontext] : [titleHeader, typeText]
    } as ContainerProps;
}
