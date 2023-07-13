import type { Database } from "sqlite3";
import Msg, { Message } from "../../models/msg";
import Chan, { Channel } from "../../models/chan";
import type { SearchResponse, SearchQuery, SearchableMessageStorage } from "./types";
import Network from "../../models/network";
declare class Deferred {
    resolve: () => void;
    promise: Promise<void>;
    constructor();
}
declare class SqliteMessageStorage implements SearchableMessageStorage {
    isEnabled: boolean;
    database: Database;
    initDone: Deferred;
    userName: string;
    constructor(userName: string);
    _enable(): Promise<void>;
    enable(): Promise<void>;
    run_migrations(): Promise<void>;
    close(): Promise<void>;
    index(network: Network, channel: Chan, msg: Msg): Promise<void>;
    deleteChannel(network: Network, channel: Channel): Promise<void>;
    getMessages(network: Network, channel: Channel, nextID: () => number): Promise<Message[]>;
    search(query: SearchQuery): Promise<SearchResponse>;
    canProvideMessages(): boolean;
    private serialize_run;
    private serialize_fetchall;
    private serialize_get;
}
export default SqliteMessageStorage;
