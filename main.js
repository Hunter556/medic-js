const {app, BrowserWindow, ipcMain} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  

function createWindow() { 
   win = new BrowserWindow({ width: 1600, height: 1000}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
   win.setMenu(null);
   win.setResizable(false);
}  


ipcMain.on('form-submission', function (event, form) {
    console.log("this is the firstname from the form ->", form[0])


});
 

app.on('ready', createWindow)