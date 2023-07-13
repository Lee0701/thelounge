import Prefix from "./prefix";
declare class User {
    modes: string[];
    mode: string;
    away: string;
    nick: string;
    lastMessage: number;
    constructor(attr: Partial<User>, prefix?: Prefix);
    setModes(modes: string[], prefix: Prefix): void;
    toJSON(): {
        nick: string;
        modes: string[];
        lastMessage: number;
    };
}
export default User;
