import { Match } from "linkify-it";
export declare type NoSchemaMatch = Match & {
    noschema: boolean;
};
export declare type LinkPart = {
    start: number;
    end: number;
    link: string;
};
export declare function findLinks(text: string): LinkPart[];
export declare function findLinksWithSchema(text: string): LinkPart[];
