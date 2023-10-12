# Getting Started with the Sudoku Generator

The sudoku generator is a simple React app that generates (and solves) Sudoku puzzles. It uses the 9x9 typical grid. To produce the final puzzle, it removes randomly digits according to the difficulty selected.

The generator can be executed (and packaged) as a React app or a native OS application. See below for available scripts, installation and uninstall.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn electron-dev`

Spins an Electron frontend that hooks up to a React server running the backend. You should have another terminal running `yarn start` so the backend process listens on the expected port `3000`. 

This frontend can be used for debugging purposes or preview, before proceeding to create the distribution artifacts.

### `yarn electron-build-macos` and `yarn electron-build-windows`

Each command builds the respective artifact:
- for macOS, a DMG archive. The app inside it is not going to be notarized.
- for Windows, an NSIS installer. The installer will properly install the app locally. 


## Installing the application

The produced artifacts can be used to install the application. For macOS, the DMG has a shortcut that points to the 'Applications'. Drag the App to the folder to complete installation.

For Windows, an NSIS installer is produced. Execute the installer to install (option to install globally or for the current user only), and select whether the program will execute at the end of installation or not. Shortcuts on Desktop and Start menu are automatically created.

## Uninstalling the application

### macOS

Typically, drag the application to the Bin removes it and all installed elements.

### Windows

When installation completes, NSIS generates the uninstaller and respective entry in the Add/Remove Programs. However, trying to uninstall will not work with an 'NSIS Error'. Apparently executing the uninstaller manually by adding /NCRC at the command line, the error is bypassed and uninstall proceeds correctly. See [here](https://nsis.sourceforge.io/Why_do_I_get_NSIS_Error) for details and instructions. 
