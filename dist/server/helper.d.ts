export declare type Hostmask = {
    nick: string;
    ident: string;
    hostname: string;
};
declare const Helper: {
    expandHome: typeof expandHome;
    getVersion: typeof getVersion;
    getVersionCacheBust: typeof getVersionCacheBust;
    getVersionNumber: typeof getVersionNumber;
    getGitCommit: typeof getGitCommit;
    ip2hex: typeof ip2hex;
    parseHostmask: typeof parseHostmask;
    compareHostmask: typeof compareHostmask;
    compareWithWildcard: typeof compareWithWildcard;
    catch_to_error: typeof catch_to_error;
    password: {
        hash: typeof passwordHash;
        compare: typeof passwordCompare;
        requiresUpdate: typeof passwordRequiresUpdate;
    };
};
export default Helper;
declare function getVersion(): string;
declare function getVersionNumber(): string;
declare function getGitCommit(): string | null;
declare function getVersionCacheBust(): string;
declare function ip2hex(address: string): string;
declare function expandHome(shortenedPath: string): string;
declare function passwordRequiresUpdate(password: string): boolean;
declare function passwordHash(password: string): string;
declare function passwordCompare(password: string, expected: string): Promise<boolean>;
declare function parseHostmask(hostmask: string): Hostmask;
declare function compareHostmask(a: Hostmask, b: Hostmask): boolean;
declare function compareWithWildcard(a: string, b: string): boolean;
declare function catch_to_error(prefix: string, err: any): Error;
