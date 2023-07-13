declare type Package = {
    onServerStart: (packageApis: any) => void;
};
export declare type PackageInfo = {
    packageName: string;
    thelounge?: {
        supports: string;
    };
    version: string;
    type?: string;
    files?: string[];
    name?: string;
};
declare const _default: {
    getFiles: typeof getFiles;
    getStylesheets: typeof getStylesheets;
    getPackage: typeof getPackage;
    loadPackages: typeof loadPackages;
    outdated: typeof outdated;
};
export default _default;
declare function getStylesheets(): string[];
declare function getFiles(): string[];
declare function getPackage(name: string): Package | undefined;
declare function loadPackages(): void;
declare function outdated(cacheTimeout?: number): Promise<false | undefined>;
