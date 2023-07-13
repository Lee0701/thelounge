import Client from "../client";
import ClientManager from "../clientManager";
export declare type AuthHandler = (manager: ClientManager, client: Client, user: string, password: string, callback: (success: boolean) => void) => void;
declare const toExport: any;
export default toExport;
