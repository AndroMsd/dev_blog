import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://AndroMsd.github.io',
	base: '/dev_blog',
	integrations: [mdx(), sitemap()],
});
