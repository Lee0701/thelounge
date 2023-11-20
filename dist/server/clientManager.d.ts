import Client, { UserConfig } from "./client";
import WebPush from "./plugins/webpush";
import { Server } from "socket.io";
declare class ClientManager {
    clients: Client[];
    sockets: Server;
    identHandler: any;
    webPush: WebPush;
    constructor();
    init(identHandler: any, sockets: Server): void;
    findClient(name: string): Client | undefined;
    loadUsers(): void;
    autoloadUsers(): void;
    loadUser(name: string): Client | undefined;
    getUsers: () => string[];
    addUser(name: string, password: string | null, enableLog?: boolean): boolean;
    getDataToSave(client: Client): {
        newUser: string;
        newHash: string;
    };
    saveUser(client: Client, callback?: (err?: any) => void): true | void;
    removeUser(name: any): boolean;
    readUserConfig(name: string): false | UserConfig;
}
export default ClientManager;
