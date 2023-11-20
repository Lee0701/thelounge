import type { Database } from "sqlite3";
import Msg, { Message } from "../../models/msg";
import Chan, { Channel } from "../../models/chan";
import type { SearchResponse, SearchQuery, SearchableMessageStorage } from "./types";
import Network from "../../models/network";
declare type Migration = {
    version: number;
    stmts: string[];
};
declare type Rollback = {
    version: number;
    rollback_forbidden?: boolean;
    stmts: string[];
};
export declare const currentSchemaVersion = 1679743888000;
export declare const migrations: Migration[];
export declare const rollbacks: Rollback[];
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
    setup_new_db(): Promise<void>;
    current_version(): Promise<number>;
    update_version_in_db(): Promise<void>;
    _run_migrations(dbVersion: number): Promise<void>;
    run_pragmas(): Promise<void>;
    run_migrations(): Promise<void>;
    close(): Promise<void>;
    fetch_rollbacks(since_version: number): Promise<Rollback[]>;
    delete_migrations_older_than(version: number): Promise<void>;
    _downgrade_to(version: number): Promise<number>;
    downgrade_to(version: number): Promise<number>;
    downgrade(): Promise<number>;
    insert_rollback_since(version: number): Promise<void>;
    index(network: Network, channel: Chan, msg: Msg): Promise<void>;
    deleteChannel(network: Network, channel: Channel): Promise<void>;
    getMessages(network: Network, channel: Channel, nextID: () => number): Promise<Message[]>;
    search(query: SearchQuery): Promise<SearchResponse>;
    canProvideMessages(): boolean;
    private serialize_run;
    private serialize_fetchall;
    private serialize_get;
}
export declare function necessaryMigrations(since: number): Migration[];
export declare function newRollbacks(since: number): Rollback[];
export default SqliteMessageStorage;
