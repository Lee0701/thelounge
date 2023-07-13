"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = ["raw", "send", "quote"];
const input = function ({ irc }, chan, cmd, args) {
    if (args.length !== 0) {
        irc.connection.write(args.join(" "));
    }
    return true;
};
exports.default = {
    commands,
    input,
};
