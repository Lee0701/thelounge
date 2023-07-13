declare const log: {
    error(...args: string[]): void;
    warn(...args: string[]): void;
    info(...args: string[]): void;
    debug(...args: string[]): void;
    raw(...args: string[]): void;
    prompt(options: {
        prompt?: string;
        default?: string;
        text: string;
        silent?: boolean;
    }, callback: (error: any, result: any, isDefault: any) => void): void;
};
export default log;
