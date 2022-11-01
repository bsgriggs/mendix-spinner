## Spinner
A configurable spinner to be used in conjunction with other widgets.

Built using ![react-spinners](https://github.com/davidhu2000/react-spinners) by David Hu 

## Features
- 20+ different spinner styles to use
- Each spinner can be customized with color, size etc
- Control whether the spinner is visible or not with a Mendix expression
- Can add a caption below the spinner (i.e. Loading Customer...)

## Usage
![Spinner Settings](https://github.com/bsgriggs/mendix-spinner/blob/media/general.png)  
1. Create a page where you can know if the content is loading or not based on a boolean or drop the widget into the loading content of another widget.
2. Select the Type of spinner you'd like to use. See [here](https://www.davidhu.io/react-spinners/) for each spinner type or check the [demo project](https://widgettesting105-sandbox.mxapps.io/p/spinner).
3. Run the project then adjust the Style Details (Color, Size, Width, Height, Radius, Margin) based on your needs. Each value should be a string of an actual CSS value. Use a Hex Code for the color and a measurement for the remaining (15px, 3em, 5rem etc.). Note: The style details that are used depends on the Spinner Type. The widget will only show the used details.

## Demo project
https://dropdowndatepicker-sandbox.mxapps.io/

## Issues, suggestions and feature requests
For issues with the Mendix interface:
https://github.com/bsgriggs/mendix-spinner/issues

For issues with the Spinners themselves:
https://github.com/davidhu2000/react-spinners/issues

## Development and contribution
Benjamin Griggs
