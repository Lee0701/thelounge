/// <reference types="node" />
/// <reference types="node" />
import busboy from "@fastify/busboy";
import type { Socket } from "socket.io";
import { Request, Response } from "express";
declare class Uploader {
    constructor(socket: Socket);
    static createTokenTimeout(this: void, token: string): NodeJS.Timeout;
    static router(this: void, express: any): void;
    static routeGetFile(this: void, req: Request, res: Response): Promise<void | Response<any, Record<string, any>>>;
    static routeUploadFile(this: void, req: Request, res: Response): NodeJS.WritableStream | busboy;
    static getMaxFileSize(): number;
    static getFileType(filePath: string): Promise<"text/plain" | import("file-type/core").MimeType | "application/octet-stream" | null>;
}
export default Uploader;
