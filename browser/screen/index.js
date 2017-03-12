const login = require('./Login')
const _console = require('./Console')
const windowList = {
    login: login,
    console: _console
}
module.exports = new class Screen {
    constructor () {
        this.win = null;
        this.baseUrl = '';
    }
    static show (win) {
        win.show();
        win.focus();
    }
    open (winName = 'login') {
        if (!windowList[winName]) {
            return;
        }
        this.win = windowList[winName].open(this.baseUrl);
        
        this.win.on('closed', () => this.win = null);
        this.win.on('ready-to-show', () => Screen.show(this.win));
    }
    setBaseUrl (baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    setSize (w, h) {
        if (this.win) {
            const bounds = this.win.getBounds();
            const newBounds = {
                x: bounds.x - (w - bounds.width) / 2,
                y: bounds.y - (h - bounds.height) / 2
            }
            this.win.setBounds({
                x: newBounds.x,
                y: newBounds.y,
                width: w,
                height: h
            }, true);
        }
    }
    activate () {
        this.win === null && this.open(); 
    }
}()