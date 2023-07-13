import { PackageInfo } from "./index";
import Client from "../../client";
import Chan from "../../models/chan";
export default class PublicClient {
    private client;
    private packageInfo;
    constructor(client: Client, packageInfo: PackageInfo);
    /**
     *
     * @param {String} command - IRC command to run, this is in the same format that a client would send to the server (eg: JOIN #test)
     * @param {String} targetId - The id of the channel to simulate the command coming from. Replies will go to this channel if appropriate
     */
    runAsUser(command: string, targetId: string): void;
    /**
     *
     * @param {Object} attributes
     */
    createChannel(attributes: Partial<Chan>): Chan;
    /**
     * Emits an `event` to the browser client, with `data` in the body of the event.
     *
     * @param {String} event - Name of the event, must be something the browser will recognise
     * @param {Object} data - Body of the event, can be anything, but will need to be properly interpreted by the client
     */
    sendToBrowser(event: string, data: any): void;
    /**
     *
     * @param {Number} chanId
     */
    getChannel(chanId: number): false | {
        network: import("../../models/network").default;
        chan: Chan;
    };
    /**
     * Sends a message to this client, displayed in the given channel.
     *
     * @param {String} text the message to send
     * @param {Chan} chan the channel to send the message to
     */
    sendMessage(text: string, chan: Chan): void;
}
