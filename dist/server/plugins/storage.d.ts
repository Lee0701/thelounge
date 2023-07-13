declare class Storage {
    references: Map<string, number>;
    constructor();
    emptyDir(): void;
    dereference(url: any): void | Map<string, number>;
    store(data: any, extension: string, callback: (url: string) => void): void;
}
declare const _default: Storage;
export default _default;
