import _ from "lodash";
import Chan from "./models/chan";
import Msg, { MessageType, UserInMessage } from "./models/msg";
import SqliteMessageStorage from "./plugins/messageStorage/sqlite";
import Network, { NetworkConfig, NetworkWithIrcFramework } from "./models/network";
import ClientManager from "./clientManager";
import { MessageStorage, SearchQuery, SearchResponse } from "./plugins/messageStorage/types";
declare type OrderItem = Chan["id"] | Network["uuid"];
declare type Order = OrderItem[];
declare type ClientPushSubscription = {
    endpoint: string;
    keys: {
        p256dh: string;
        auth: string;
    };
};
export declare type UserConfig = {
    log: boolean;
    password: string;
    sessions: {
        [token: string]: {
            lastUse: number;
            ip: string;
            agent: string;
            pushSubscription?: ClientPushSubscription;
        };
    };
    clientSettings: {
        [key: string]: any;
    };
    browser?: {
        language?: string;
        ip?: string;
        hostname?: string;
        isSecure?: boolean;
    };
    networks?: NetworkConfig[];
};
export declare type Mention = {
    chanId: number;
    msgId: number;
    type: MessageType;
    time: Date;
    text: string;
    from: UserInMessage;
};
declare class Client {
    awayMessage: string;
    lastActiveChannel: number;
    attachedClients: {
        [socketId: string]: {
            token: string;
            openChannel: number;
        };
    };
    config: UserConfig;
    id: number;
    idMsg: number;
    idChan: number;
    name: string;
    networks: Network[];
    mentions: Mention[];
    manager: ClientManager;
    messageStorage: MessageStorage[];
    highlightRegex: RegExp | null;
    highlightExceptionRegex: RegExp | null;
    messageProvider?: SqliteMessageStorage;
    fileHash: string;
    constructor(manager: ClientManager, name?: string, config?: UserConfig);
    connect(): void;
    createChannel(attr: Partial<Chan>): Chan;
    emit(event: string, data?: any): void;
    find(channelId: number): false | {
        network: Network;
        chan: Chan;
    };
    networkFromConfig(args: Record<string, any>): Network;
    connectToNetwork(args: Record<string, any>, isStartup?: boolean): void;
    generateToken(callback: (token: string) => void): void;
    calculateTokenHash(token: string): string;
    updateSession(token: string, ip: string, request: any): void;
    setPassword(hash: string, callback: (success: boolean) => void): void;
    input(data: any): void;
    inputLine(data: any): void;
    compileCustomHighlights(): void;
    more(data: any): {
        chan: number;
        messages: Msg[];
        totalMessages: number;
    } | null;
    clearHistory(data: any): void;
    search(query: SearchQuery): Promise<SearchResponse>;
    open(socketId: string, target: number): void;
    sort(data: {
        order: Order;
        type: "networks" | "channels";
        target: string;
    }): void;
    names(data: {
        target: number;
    }): void;
    part(network: Network, chan: Chan): void;
    quit(signOut?: boolean): void;
    clientAttach(socketId: string, token: string): void;
    clientDetach(socketId: string): void;
    registerPushSubscription(session: any, subscription: ClientPushSubscription, noSave?: boolean): {
        endpoint: string;
        keys: {
            p256dh: string;
            auth: string;
        };
    } | undefined;
    unregisterPushSubscription(token: string): void;
    save: _.DebouncedFunc<(this: Client) => void>;
}
export default Client;
export declare type IrcEventHandler = (this: Client, irc: NetworkWithIrcFramework["irc"], network: NetworkWithIrcFramework) => void;
