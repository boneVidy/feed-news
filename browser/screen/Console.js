const {app, BrowserWindow} = require('electron');
module.exports = new class Console {
    constructor () {

    }
    open (url) {
        const win = new BrowserWindow({
            width: 700,
            height: 500,
            show: false,
            frame: false,
            resizable: true
        });
        win.loadURL(url);
        win.webContents.openDevTools();
        return win;
    }
}();