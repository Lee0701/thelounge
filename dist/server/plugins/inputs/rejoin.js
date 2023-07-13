"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const msg_1 = __importStar(require("../../models/msg"));
const chan_1 = require("../../models/chan");
const commands = ["cycle", "rejoin"];
const input = function ({ irc }, chan) {
    if (chan.type !== chan_1.ChanType.CHANNEL) {
        chan.pushMessage(this, new msg_1.default({
            type: msg_1.MessageType.ERROR,
            text: "You can only rejoin channels.",
        }));
        return;
    }
    irc.part(chan.name, "Rejoining");
    irc.join(chan.name);
    return true;
};
exports.default = {
    commands,
    input,
};
