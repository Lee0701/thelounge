import Client from "../../client";
import Chan from "../../models/chan";
import Msg from "../../models/msg";
export declare type LinkPreview = {
    type: string;
    head: string;
    body: string;
    thumb: string;
    size: number;
    link: string;
    shown?: boolean | null;
    error?: string;
    message?: string;
    media?: string;
    mediaType?: string;
    maxSize?: number;
    thumbActualUrl?: string;
};
export default function (client: Client, chan: Chan, msg: Msg, cleanText: string): void;
