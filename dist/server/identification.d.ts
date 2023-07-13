/// <reference types="node" />
/// <reference types="node" />
import { Socket } from "net";
declare class Identification {
    private connectionId;
    private connections;
    private oidentdFile?;
    constructor(startedCallback: (identHandler: Identification, err?: Error) => void);
    serverConnection(socket: Socket): void;
    respondToIdent(socket: Socket, buffer: Buffer): boolean | undefined;
    addSocket(socket: Socket, user: string): number;
    removeSocket(id: number): void;
    refresh(): void;
}
export default Identification;
