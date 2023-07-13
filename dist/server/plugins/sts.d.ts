import _ from "lodash";
declare type PolicyOption = {
    port: number;
    duration: number;
    expires: number;
    host: string;
};
declare class STSPolicies {
    stsFile: string;
    refresh: _.DebouncedFunc<any>;
    private policies;
    constructor();
    get(host: string): Omit<PolicyOption, "host"> | null;
    update(host: string, port: number, duration: number): void;
    refreshExpiration(host: string): null | undefined;
    saveFile(): void;
}
declare const _default: STSPolicies;
export default _default;
