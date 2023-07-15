import Network from "./models/network";
export declare type WebIRC = {
    [key: string]: any;
};
declare type Https = {
    enable: boolean;
    key: string;
    certificate: string;
    ca: string;
};
declare type FileUpload = {
    enable: boolean;
    maxFileSize: number;
    baseUrl?: string;
};
export declare type Defaults = Pick<Network, "name" | "host" | "port" | "password" | "tls" | "rejectUnauthorized" | "nick" | "username" | "realname" | "leaveMessage" | "sasl" | "saslAccount" | "saslPassword"> & {
    join?: string;
};
declare type Identd = {
    enable: boolean;
    port: number;
};
declare type SearchDN = {
    rootDN: string;
    rootPassword: string;
    filter: string;
    base: string;
    scope: string;
};
declare type Ldap = {
    enable: boolean;
    url: string;
    tlsOptions: any;
    primaryKey: string;
    searchDN: SearchDN;
    baseDN?: string;
};
declare type Debug = {
    ircFramework: boolean;
    raw: boolean;
};
declare type Wikichat = {
    apiUrl: string;
};
export declare type ConfigType = {
    public: boolean;
    host: string | undefined;
    port: number;
    bind: string | undefined;
    reverseProxy: boolean;
    maxHistory: number;
    https: Https;
    theme: string;
    prefetch: boolean;
    disableMediaPreview: boolean;
    prefetchStorage: boolean;
    prefetchMaxImageSize: number;
    prefetchMaxSearchSize: number;
    prefetchTimeout: number;
    fileUpload: FileUpload;
    transports: string[];
    leaveMessage: string;
    defaults: Defaults;
    lockNetwork: boolean;
    messageStorage: string[];
    useHexIp: boolean;
    webirc?: WebIRC;
    identd: Identd;
    oidentd?: string;
    ldap: Ldap;
    debug: Debug;
    themeColor: string;
    wikichat: Wikichat;
};
declare class Config {
    #private;
    values: ConfigType;
    getHomePath(): string;
    getConfigPath(): string;
    getUserLogsPath(): string;
    getStoragePath(): string;
    getFileUploadPath(): string;
    getUsersPath(): string;
    getUserConfigPath(name: string): string;
    getClientCertificatesPath(): string;
    getPackagesPath(): string;
    getPackageModulePath(packageName: string): string;
    getDefaultNick(): string;
    merge(newConfig: ConfigType): void;
    _merge_config_objects(oldConfig: ConfigType, newConfig: ConfigType): ConfigType;
    setHome(newPath: string): void;
}
declare const _default: Config;
export default _default;
