const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const {ipcMain} = require('electron')


app.on('ready', ()=>{
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
    
    //IPC events
    ipcMain.on('message', (event, arg) => {
      console.log(arg);  // prints "ping"
      event.sender.send('reply', 'pong')
    });
})