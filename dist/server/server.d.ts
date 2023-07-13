/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node/http" />
/// <reference types="got/dist/source/core/utils/timed-out" />
import { ConfigType, Defaults } from "./config";
import { ThemeForClient } from "./plugins/packages/themes";
declare type ServerOptions = {
    dev: boolean;
};
export declare type ClientConfiguration = Pick<ConfigType, "public" | "lockNetwork" | "useHexIp" | "prefetch" | "defaults"> & {
    fileUpload: boolean;
    ldapEnabled: boolean;
    isUpdateAvailable: boolean;
    applicationServerKey: string;
    version: string;
    gitCommit: string | null;
    defaultTheme: string;
    themes: ThemeForClient[];
    defaults: Defaults;
    fileUploadMaxFileSize?: number;
};
export default function (options?: ServerOptions): Promise<import("http").Server | import("https").Server>;
export {};
