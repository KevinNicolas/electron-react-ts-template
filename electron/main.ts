import { app, BrowserWindow } from "electron";
import { ElectronService } from "./services";

ElectronService.start(app, BrowserWindow);
