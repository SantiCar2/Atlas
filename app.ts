import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@electron/remote/main').initialize();

if (require('electron-squirrel-startup')) {
  app.quit();
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
    frame: false,
  });

  mainWindow.setMenu(null);

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/atlas/browser/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    app.quit();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC HANDLERS
// ipcMain.on one way, ipcMain.handle two way
ipcMain.on('header', (event, args) => {
  console.log(args);
  console.log('ipcMain.on header');
  event.reply('header', 'pong');
});

ipcMain.handle('header', (event, args) => {
  switch (args) {
    case 'closeWindow':
      app.quit();
      break;

    case 'minimizeWindow':
      BrowserWindow.getFocusedWindow()?.minimize();
      break;

    case 'maximizeWindow':
      if (BrowserWindow.getFocusedWindow()?.isMaximized()) {
        BrowserWindow.getFocusedWindow()?.unmaximize();
        return;
      } else {
        BrowserWindow.getFocusedWindow()?.maximize();
      }
      break;

    default:
      break;
  }
});
