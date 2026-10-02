const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  saveData: (d) => ipcRenderer.send('pdr-save', String(d)),
  saveDataSync: (d) => { ipcRenderer.sendSync('pdr-save-sync', String(d)); },
  openDataDir: () => ipcRenderer.send('pdr-open-dir'),
  promptSync: (msg, def) => ipcRenderer.sendSync('pdr-prompt', String(msg || ''), String(def == null ? '' : def))
});
