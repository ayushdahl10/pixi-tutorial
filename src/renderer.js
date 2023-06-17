const { ipcRenderer } = require("electron");

ipcRenderer.send('get-window-size');

ipcRenderer.on('window-size', (event, { width, height }) => {

});
