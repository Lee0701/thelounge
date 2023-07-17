import got from "got";
import * as cheerio from "cheerio";
import sanitizeHtml from "sanitize-html";

import Config from "../../config";
import Msg from "../../models/msg";

export default async function (msg: Msg) {
	const text = sanitizeHtml(msg.text);
	const apiUrl = Config.values.wikichat.apiUrl;
	const baseUrl = Config.values.wikichat.baseUrl;
	const result = (await got
		.post(apiUrl, {
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
	$("a:not(.external)").attr("href", (_, href) => baseUrl + href);
	const output = $(".mw-parser-output") as any;
	output
		.contents()
		.filter((_, e) => e.type === "comment")
		.remove();
	return output.html().trim().replace(/\n/g, "");
}
