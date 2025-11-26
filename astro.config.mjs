// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'OpenCoral',
        pagefind: false,
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/OpenCoralTools' }],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
    }), mdx()],
});