declare class Utils {
    static extraHelp(this: void): void;
    static defaultHome(): string;
    static getFileFromRelativeToRoot(...fileName: string[]): string;
    static parseConfigOptions(this: void, val: string, memo?: any): any;
    static executeYarnCommand(command: string, ...parameters: string[]): Promise<unknown>;
}
export default Utils;
