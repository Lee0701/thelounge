import { LinkPreview } from "../plugins/irc-events/link";
import User from "./user";
export declare type UserInMessage = Partial<User> & {
    mode: string;
};
export declare enum MessageType {
    UNHANDLED = "unhandled",
    ACTION = "action",
    AWAY = "away",
    BACK = "back",
    ERROR = "error",
    INVITE = "invite",
    JOIN = "join",
    KICK = "kick",
    LOGIN = "login",
    LOGOUT = "logout",
    MESSAGE = "message",
    MODE = "mode",
    MODE_CHANNEL = "mode_channel",
    MODE_USER = "mode_user",
    MONOSPACE_BLOCK = "monospace_block",
    NICK = "nick",
    NOTICE = "notice",
    PART = "part",
    QUIT = "quit",
    CTCP = "ctcp",
    CTCP_REQUEST = "ctcp_request",
    CHGHOST = "chghost",
    TOPIC = "topic",
    TOPIC_SET_BY = "topic_set_by",
    WHOIS = "whois",
    RAW = "raw",
    PLUGIN = "plugin",
    WALLOPS = "wallops"
}
declare class Msg {
    from: UserInMessage;
    id: number;
    previews: LinkPreview[];
    text: string;
    type: MessageType;
    self: boolean;
    time: Date;
    hostmask: string;
    target: UserInMessage;
    new_nick: string;
    highlight?: boolean;
    showInActive?: boolean;
    new_ident: string;
    new_host: string;
    ctcpMessage: string;
    command: string;
    invitedYou: boolean;
    gecos: string;
    account: boolean;
    error: string;
    nick: string;
    channel: string;
    reason: string;
    raw_modes: any;
    when: Date;
    whois: any;
    users: UserInMessage[] | string[];
    statusmsgGroup: string;
    params: string[];
    constructor(attr?: Partial<Msg>);
    findPreview(link: string): LinkPreview | undefined;
    isLoggable(): boolean;
}
export default Msg;
export declare type Message = Msg;
