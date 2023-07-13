import ClientManager from "../clientManager";
declare const _default: {
    isUpdateAvailable: boolean;
    fetch: typeof fetch;
    checkForUpdates: typeof checkForUpdates;
};
export default _default;
export declare type ChangelogData = {
    current: {
        prerelease: boolean;
        version: string;
        changelog?: string;
        url: string;
    };
    expiresAt: number;
    latest?: {
        prerelease: boolean;
        version: string;
        url: string;
    };
    packages?: boolean;
};
declare function fetch(): Promise<ChangelogData>;
declare function checkForUpdates(manager: ClientManager): void;
