import IrcFramework, { Client as IRCClient } from "irc-framework";
import Chan, { ChanConfig } from "./chan";
import Prefix from "./prefix";
import { Hostmask } from "../helper";
import { WebIRC } from "../config";
import { ClientCertificateType } from "../plugins/clientCertificate";
import Client from "../client";
declare type NetworkIrcOptions = {
    host: string;
    port: number;
    password: string;
    nick: string;
    username: string;
    gecos: string;
    tls: boolean;
    rejectUnauthorized: boolean;
    webirc: WebIRC | null;
    client_certificate: ClientCertificateType | null;
    socks?: {
        host: string;
        port: number;
        user: string;
        pass: string;
    };
    sasl_mechanism?: string;
    account?: {
        account: string;
        password: string;
    } | Record<string, never>;
};
declare type NetworkStatus = {
    connected: boolean;
    secure: boolean;
};
export declare type IgnoreListItem = Hostmask & {
    when?: number;
};
declare type IgnoreList = IgnoreListItem[];
declare type NonNullableIRCWithOptions = NonNullable<IRCClient & {
    options: NetworkIrcOptions;
}>;
export declare type NetworkWithIrcFramework = Network & {
    irc: NonNullable<Network["irc"]> & {
        options: NonNullableIRCWithOptions;
    };
};
export declare type NetworkConfig = {
    nick: string;
    name: string;
    host: string;
    port: number;
    tls: boolean;
    userDisconnected: boolean;
    rejectUnauthorized: boolean;
    password: string;
    awayMessage: string;
    commands: any[];
    username: string;
    realname: string;
    leaveMessage: string;
    sasl: string;
    saslAccount: string;
    saslPassword: string;
    channels: ChanConfig[];
    uuid: string;
    proxyHost: string;
    proxyPort: number;
    proxyUsername: string;
    proxyPassword: string;
    proxyEnabled: boolean;
    highlightRegex?: string;
    ignoreList: any[];
};
declare class Network {
    nick: string;
    name: string;
    host: string;
    port: number;
    tls: boolean;
    userDisconnected: boolean;
    rejectUnauthorized: boolean;
    password: string;
    awayMessage: string;
    commands: any[];
    username: string;
    realname: string;
    leaveMessage: string;
    sasl: string;
    saslAccount: string;
    saslPassword: string;
    channels: Chan[];
    uuid: string;
    proxyHost: string;
    proxyPort: number;
    proxyUsername: string;
    proxyPassword: string;
    proxyEnabled: boolean;
    highlightRegex?: RegExp;
    irc?: IrcFramework.Client & {
        options?: NetworkIrcOptions;
    };
    chanCache: Chan[];
    ignoreList: IgnoreList;
    keepNick: string | null;
    status: NetworkStatus;
    serverOptions: {
        CHANTYPES: string[];
        PREFIX: Prefix;
        NETWORK: string;
    };
    hasSTSPolicy: boolean;
    constructor(attr?: Partial<Network>);
    validate(this: Network, client: Client): boolean;
    createIrcFramework(this: NetworkWithIrcFramework, client: Client): void;
    setIrcFrameworkOptions(this: NetworkWithIrcFramework, client: Client): void;
    createWebIrc(client: Client): {
        password: any;
        username: string;
        address: string | undefined;
        hostname: string | undefined;
        options: {};
    } | null;
    edit(this: NetworkWithIrcFramework, client: Client, args: any): void;
    destroy(): void;
    setNick(this: Network, nick: string): void;
    getFilteredClone(lastActiveChannel?: number, lastMessage?: number): Network;
    getNetworkStatus(): {
        connected: boolean;
        secure: boolean;
    };
    addChannel(newChan: Chan): number;
    quit(quitMessage?: string): void;
    exportForEdit(): Network;
    export(): Network;
    getChannel(name: string): Chan | undefined;
    getLobby(): Chan;
}
export default Network;
