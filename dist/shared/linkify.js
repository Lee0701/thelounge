"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLinksWithSchema = exports.findLinks = void 0;
const linkify_it_1 = __importDefault(require("linkify-it"));
const tlds_1 = __importDefault(require("tlds"));
linkify_it_1.default.prototype.normalize = function normalize(match) {
    match.noschema = false;
    if (!match.schema) {
        match.schema = "http:";
        match.url = "http://" + match.url;
        match.noschema = true;
    }
    if (match.schema === "//") {
        match.schema = "http:";
        match.url = "http:" + match.url;
        match.noschema = true;
    }
    if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
        match.url = "mailto:" + match.url;
    }
};
const linkify = (0, linkify_it_1.default)().tlds(tlds_1.default).tlds("onion", true);
// Known schemes to detect in text
const commonSchemes = [
    "sftp",
    "smb",
    "file",
    "irc",
    "ircs",
    "svn",
    "git",
    "steam",
    "mumble",
    "ts3server",
    "svn+ssh",
    "ssh",
    "gopher",
    "gemini",
];
for (const schema of commonSchemes) {
    linkify.add(schema + ":", "http:");
}
function findLinks(text) {
    const matches = linkify.match(text);
    if (!matches) {
        return [];
    }
    return matches.map(makeLinkPart);
}
exports.findLinks = findLinks;
function findLinksWithSchema(text) {
    const matches = linkify.match(text);
    if (!matches) {
        return [];
    }
    return matches.filter((url) => !url.noschema).map(makeLinkPart);
}
exports.findLinksWithSchema = findLinksWithSchema;
function makeLinkPart(url) {
    return {
        start: url.index,
        end: url.lastIndex,
        link: url.url,
    };
}
