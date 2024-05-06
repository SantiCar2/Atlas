import { ipcRenderer } from 'electron';

function closeApp() {
  ipcRenderer.send('header', 'close-window');
}

const closeButton = document.getElementById('close-button');
console.log(closeButton);
if (closeButton) {
  closeButton.addEventListener('click', closeApp);
}
