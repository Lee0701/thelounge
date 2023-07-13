import User from "./user";
import Msg from "./msg";
import Client from "../client";
import Network from "./network";
export declare enum ChanType {
    CHANNEL = "channel",
    LOBBY = "lobby",
    QUERY = "query",
    SPECIAL = "special"
}
export declare enum SpecialChanType {
    BANLIST = "list_bans",
    INVITELIST = "list_invites",
    CHANNELLIST = "list_channels",
    IGNORELIST = "list_ignored"
}
export declare enum ChanState {
    PARTED = 0,
    JOINED = 1
}
export declare type FilteredChannel = Chan & {
    users: [];
    totalMessages: number;
};
export declare type ChanConfig = {
    name: string;
    key?: string;
    muted?: boolean;
    type?: string;
};
declare class Chan {
    id: number;
    messages: Msg[];
    name: string;
    key: string;
    topic: string;
    firstUnread: number;
    unread: number;
    highlight: number;
    users: Map<string, User>;
    muted: boolean;
    type: ChanType;
    state: ChanState;
    userAway?: boolean;
    special?: SpecialChanType;
    data?: any;
    closed?: boolean;
    num_users?: number;
    static optionalProperties: string[];
    constructor(attr?: Partial<Chan>);
    destroy(): void;
    pushMessage(client: Client, msg: Msg, increasesUnread?: boolean): void;
    dereferencePreviews(messages: any): void;
    getSortedUsers(irc?: Network["irc"]): User[];
    findMessage(msgId: number): Msg | undefined;
    findUser(nick: string): User | undefined;
    getUser(nick: string): User;
    setUser(user: User): void;
    removeUser(user: User): void;
    /**
     * Get a clean clone of this channel that will be sent to the client.
     * This function performs manual cloning of channel object for
     * better control of performance and memory usage.
     *
     * @param {(int|bool)} lastActiveChannel - Last known active user channel id (needed to control how many messages are sent)
     *                                         If true, channel is assumed active.
     * @param {int} lastMessage - Last message id seen by active client to avoid sending duplicates.
     */
    getFilteredClone(lastActiveChannel?: number | boolean, lastMessage?: number): FilteredChannel;
    writeUserLog(client: Client, msg: Msg): void;
    loadMessages(client: Client, network: Network): void;
    isLoggable(): boolean;
    setMuteStatus(muted: boolean): void;
}
export default Chan;
export declare type Channel = Chan;
