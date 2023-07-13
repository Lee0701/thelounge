declare type PrefixSymbol = string;
declare type PrefixObject = {
    symbol: PrefixSymbol;
    mode: string;
};
declare class Prefix {
    prefix: PrefixObject[];
    modeToSymbol: {
        [mode: string]: string;
    };
    symbols: string[];
    constructor(prefix: PrefixObject[]);
    _update_internals(): void;
    update(prefix: PrefixObject[]): void;
    forEach(f: (value: PrefixObject, index: number, array: PrefixObject[]) => void): void;
}
export default Prefix;
