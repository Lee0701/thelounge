declare const _public: boolean;
export { _public as public };
export declare const host: undefined;
export declare const port: number;
export declare const bind: undefined;
export declare const reverseProxy: boolean;
export declare const maxHistory: number;
export declare namespace https {
    const enable: boolean;
    const key: string;
    const certificate: string;
    const ca: string;
}
export declare const theme: string;
export declare const prefetch: boolean;
export declare const disableMediaPreview: boolean;
export declare const prefetchStorage: boolean;
export declare const prefetchMaxImageSize: number;
export declare const prefetchMaxSearchSize: number;
export declare const prefetchTimeout: number;
export declare namespace fileUpload {
    const enable_1: boolean;
    export { enable_1 as enable };
    export const maxFileSize: number;
    export const baseUrl: null;
}
export declare const transports: string[];
export declare const leaveMessage: string;
export declare namespace defaults {
    export const name: string;
    const host_1: string;
    export { host_1 as host };
    const port_1: number;
    export { port_1 as port };
    export const password: string;
    export const tls: boolean;
    export const rejectUnauthorized: boolean;
    export const nick: string;
    export const username: string;
    export const realname: string;
    export const join: string;
    const leaveMessage_1: string;
    export { leaveMessage_1 as leaveMessage };
}
export declare const lockNetwork: boolean;
export declare const messageStorage: string[];
export declare const useHexIp: boolean;
export declare const webirc: null;
export declare namespace identd {
    const enable_2: boolean;
    export { enable_2 as enable };
    const port_2: number;
    export { port_2 as port };
}
export declare const oidentd: null;
export declare namespace ldap {
    const enable_3: boolean;
    export { enable_3 as enable };
    export const url: string;
    export const tlsOptions: {};
    export const primaryKey: string;
    export namespace searchDN {
        const rootDN: string;
        const rootPassword: string;
        const filter: string;
        const base: string;
        const scope: string;
    }
}
export declare namespace debug {
    const ircFramework: boolean;
    const raw: boolean;
}
export declare namespace wikichat {
    const apiUrl: string;
}
