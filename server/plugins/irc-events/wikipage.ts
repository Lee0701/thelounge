import got from "got";

import Config from "../../config";
import Msg from "../../models/msg";

export default async function (msg: Msg) {
	const text = msg.text;
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
	return result.parse.text["*"];
}
