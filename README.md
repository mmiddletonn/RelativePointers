# Window Direction Indicator

## Overview

This project displays a dynamic arrow in a web page that points towards the direction of other open windows (or tabs) of the same website. It's particularly useful for visualizing the relative positions of multiple browser windows on the screen.

## Features

- **Dynamic Arrow Rotation**: An arrow that rotates to point towards the average direction of all other open windows.
- **Real-Time Updates**: The arrow's direction updates in real-time as other windows move.
- **Responsive Design**: Works with various window sizes and screen resolutions.

## How It Works

The application uses JavaScript to calculate the position of the current window relative to other open windows. It then adjusts the direction of a centrally located arrow to point towards these windows. The positions are stored and updated in the browser's local storage, allowing for communication between windows.

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is open-sourced and available under the [MIT License](LICENSE.md).

## Contact

For any queries or suggestions, feel free to contact [me@matt-middleton.com].
