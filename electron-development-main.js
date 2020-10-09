const electron = require('electron');
const { app, BrowserWindow, ipcMain, Menu, Tray, dialog, shell, nativeImage } = electron;

app.allowRendererProcessReuse = true;

const path = require('path');

// const appIcon = path.join(__dirname, 'logo.png');

let mainWindow;

function createMainWindow() {
    const width = 1280;
    const height = 720;

    mainWindow = new BrowserWindow({
        width,
        height,
        minWidth: width,
        minHeight: height,
        frame: true,
        show: false,
        backgroundColor: 'white',
        // icon: appIcon,
        webPreferences: {
            zoomFactor: 1,
            devTools: !false,
            // textAreasAreResizable: false,
            nodeIntegration: true,
            enableRemoteModule: true,
        },
    });
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        //mainWindow.maximize();
    });
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) {
                mainWindow.restore();
            }

            mainWindow.focus();
        }
    });
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', () => {
    createMainWindow();
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createMainWindow();
    }
});
