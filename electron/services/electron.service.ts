import { BrowserWindow } from "electron";
import * as path from "path";

export class ElectronService {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow;

  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      ElectronService.application.quit();
    }
  }

  private static onClose() {
    ElectronService.mainWindow = null;
  }

  private static onReady() {
    ElectronService.mainWindow = new ElectronService.BrowserWindow({ width: 800, height: 600 });
    ElectronService.mainWindow.loadFile(path.resolve(__dirname, "../../../index.html"));
    ElectronService.mainWindow.on("closed", ElectronService.onClose);
  }

  static start(app: Electron.App, browserWindow: typeof BrowserWindow) {
    ElectronService.BrowserWindow = browserWindow;
    ElectronService.application = app;
    ElectronService.application.on("window-all-closed", ElectronService.onWindowAllClosed);
    ElectronService.application.on("ready", ElectronService.onReady);
  }
}
