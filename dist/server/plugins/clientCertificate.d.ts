declare const _default: {
    get: typeof get;
    remove: typeof remove;
};
export default _default;
export declare type ClientCertificateType = {
    private_key: string;
    certificate: string;
};
declare function get(uuid: string): ClientCertificateType | null;
declare function remove(uuid: string): null | undefined;
