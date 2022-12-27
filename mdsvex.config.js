import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex-svelte';
import shiki from 'shiki';
import rangeParser from 'parse-numeric-range';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	layout: './src/lib/themes/knox/layout.svelte',

	smartypants: {
		dashes: 'oldschool'
	},

	highlight: {
		highlighter: async (code, lang, metastring) => {
			// gotta do some good old-fashioned parsing
			const options = Object.fromEntries(
				(metastring ?? '').split(' ').map((option) => {
					// only split on the first '-' and capture the remainder of the string
					const segments = option.split(/-(.*)/s);
					return [segments[0], segments[1] ?? true];
				})
			);

			const theme = options.theme ?? 'github-light';
			const numbers = options.numbers ?? false;
			const highlight = options.highlight ?? '';

			const linesOfCode = (code.match(/\n/g) || []).length + 1;
			const lineOptions = rangeParser(highlight)
				.filter((line) => line > 0 && line <= linesOfCode)
				.map((line) => ({ line, classes: ['highlighted'] }));

			const highlighter = await shiki.getHighlighter({ theme });
			return highlighter.codeToHtml(code, { lang, lineOptions });
		}
	},

	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeKatex]
});

export default config;
