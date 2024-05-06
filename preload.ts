import { ipcRenderer } from 'electron';
import { contextBridge } from 'electron/renderer';

const WINDOW_API = {
  closeWindow: (message: string) => ipcRenderer.send('header', message),
};

contextBridge.exposeInMainWorld('ipcApi', WINDOW_API);
