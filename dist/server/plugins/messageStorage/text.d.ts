import { MessageStorage } from "./types";
import Channel from "../../models/chan";
import { Message } from "../../models/msg";
import Network from "../../models/network";
declare class TextFileMessageStorage implements MessageStorage {
    isEnabled: boolean;
    username: string;
    constructor(username: string);
    enable(): Promise<void>;
    close(): Promise<void>;
    index(network: Network, channel: Channel, msg: Message): Promise<void>;
    deleteChannel(): Promise<void>;
    getMessages(): Promise<never[]>;
    canProvideMessages(): boolean;
    static getNetworkFolderName(network: Network): string;
    static getChannelFileName(channel: Channel): string;
}
export default TextFileMessageStorage;
