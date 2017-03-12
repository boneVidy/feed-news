const  {app, BrowserWindow} = require('electron');
const screen = require('./browser/screen');
const url = `file://${__dirname}/dist/index.html`;
require('./browser/task/index').ifeng.start();
const DataStore = require('nedb');
global.Storage = new Datastore({filename: `${__dirname}/.database/news-feed.db`, autoload: true });
app.on('ready', () => screen.setBaseUrl(url).open());
app.on('window-all-closed', _ => process.platform !== 'darwin' && app.quit);
app.on('activated', _ => screen.activate());