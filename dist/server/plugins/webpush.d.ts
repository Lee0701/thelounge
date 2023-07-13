import WebPushAPI from "web-push";
import Client from "../client";
declare class WebPush {
    vapidKeys?: {
        publicKey: string;
        privateKey: string;
    };
    constructor();
    push(client: Client, payload: any, onlyToOffline: boolean): void;
    pushSingle(client: Client, subscription: WebPushAPI.PushSubscription, payload: any): void;
}
export default WebPush;
