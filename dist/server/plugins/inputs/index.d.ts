import Client from "../../client";
import Chan, { Channel } from "../../models/chan";
import Network, { NetworkWithIrcFramework } from "../../models/network";
import { PackageInfo } from "../packages";
import PublicClient from "../packages/publicClient";
export declare type PluginInputHandler = (this: Client, network: NetworkWithIrcFramework, chan: Channel, cmd: string, args: string[]) => void;
declare type Plugin = {
    commands: string[];
    input: (network: Network, chan: Chan, cmd: string, args: string[]) => void;
    allowDisconnected?: boolean;
};
declare type ExternalPluginCommand = {
    packageInfo: PackageInfo;
    input: (pub: PublicClient, netChan: {
        network: Network;
        chan: Chan;
    }, cmd: string, args: string[]) => void;
    allowDisconnected?: boolean;
};
declare const _default: {
    addPluginCommand: (packageInfo: PackageInfo, command: any, obj: any) => void;
    getCommands: () => string[];
    pluginCommands: Map<string, ExternalPluginCommand>;
    userInputs: Map<string, Plugin>;
};
export default _default;
