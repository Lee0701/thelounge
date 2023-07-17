import got from "got";
import * as cheerio from "cheerio";
import sanitizeHtml from "sanitize-html";

import Config from "../../config";
import Msg from "../../models/msg";

export default async function (msg: Msg) {
	const text = sanitizeHtml(msg.text);
	const url = Config.values.wikichat.apiUrl;
	const result = (await got
		.post(url, {
			form: {
				action: "parse",
				format: "json",
				text: text,
				prop: "text",
				contentmodel: "wikitext",
			},
		})
		.json()) as any;
	const html = result.parse.text["*"];
	const $ = cheerio.load(html);
	const output = $(".mw-parser-output") as any;
	output
		.contents()
		.filter((_, e) => e.type === "comment")
		.remove();
	return output.html().trim().replace(/\n/g, "");
}
