import { ipcRenderer } from 'electron';
import { contextBridge } from 'electron/renderer';

const WINDOW_API = {
  closeWindow: () => ipcRenderer.invoke('header', 'closeWindow'),
  minimizeWindow: () => ipcRenderer.invoke('header', 'minimizeWindow'),
  maximizeWindow: () => ipcRenderer.invoke('header', 'maximizeWindow'),
};

contextBridge.exposeInMainWorld('ipcApi', WINDOW_API);
