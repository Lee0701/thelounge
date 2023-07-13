declare type Module = {
    type?: string;
    name?: string;
};
declare type ThemeModule = Module & {
    type: "theme";
    themeColor: string;
    css: string;
};
export declare type ThemeForClient = {
    displayName: string;
    filename?: string;
    name: string;
    themeColor: string | null;
};
declare const _default: {
    addTheme: typeof addTheme;
    getAll: typeof getAll;
    getByName: typeof getByName;
    loadLocalThemes: typeof loadLocalThemes;
};
export default _default;
declare function loadLocalThemes(): void;
declare function addTheme(packageName: string, packageObject: ThemeModule): void;
declare function getAll(): ThemeForClient[];
declare function getByName(name: string): ThemeForClient | undefined;
