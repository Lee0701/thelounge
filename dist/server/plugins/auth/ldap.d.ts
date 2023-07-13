import type { AuthHandler } from "../auth";
declare function ldapLoadUsers(users: string[], callbackLoadUser: any): boolean;
declare function isLdapEnabled(): boolean;
declare const _default: {
    moduleName: string;
    auth: AuthHandler;
    isEnabled: typeof isLdapEnabled;
    loadUsers: typeof ldapLoadUsers;
};
export default _default;
