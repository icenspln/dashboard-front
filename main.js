import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Needed to get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js'),
    // },
  });

  // Load the index.html from the build directory (dist)
  const startUrl = `file://${path.join(__dirname, './dist/index.html')}`;
  win.loadURL(startUrl);

  // Open the DevTools in development only
  // if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  // }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
  //   app.quit();
  // }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
