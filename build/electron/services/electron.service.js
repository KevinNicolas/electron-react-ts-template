"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronService = void 0;
var path = require("path");
var ElectronService = /** @class */ (function () {
    function ElectronService() {
    }
    ElectronService.onWindowAllClosed = function () {
        if (process.platform !== "darwin") {
            ElectronService.application.quit();
        }
    };
    ElectronService.onClose = function () {
        ElectronService.mainWindow = null;
    };
    ElectronService.onReady = function () {
        ElectronService.mainWindow = new ElectronService.BrowserWindow({ width: 800, height: 600 });
        ElectronService.mainWindow.loadFile(path.resolve(__dirname, "../../../index.html"));
        ElectronService.mainWindow.on("closed", ElectronService.onClose);
    };
    ElectronService.start = function (app, browserWindow) {
        ElectronService.BrowserWindow = browserWindow;
        ElectronService.application = app;
        ElectronService.application.on("window-all-closed", ElectronService.onWindowAllClosed);
        ElectronService.application.on("ready", ElectronService.onReady);
    };
    return ElectronService;
}());
exports.ElectronService = ElectronService;
//# sourceMappingURL=electron.service.js.map