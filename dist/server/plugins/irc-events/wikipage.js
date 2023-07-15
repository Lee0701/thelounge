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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const cheerio = __importStar(require("cheerio"));
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const config_1 = __importDefault(require("../../config"));
async function default_1(msg) {
    const text = (0, sanitize_html_1.default)(msg.text);
    const url = config_1.default.values.wikichat.apiUrl;
    const result = (await got_1.default
        .post(url, {
        form: {
            action: "parse",
            format: "json",
            text: text,
            prop: "text",
            contentmodel: "wikitext",
        },
    })
        .json());
    const html = result.parse.text["*"];
    const $ = cheerio.load(html);
    const output = $(".mw-parser-output");
    output
        .contents()
        .filter((_, e) => e.type === "comment")
        .remove();
    return output.html().trim();
}
exports.default = default_1;
