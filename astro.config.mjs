import { defineConfig } from 'astro/config';

// Update `site` to your live domain once Cloudflare Pages is connected.
export default defineConfig({
  site: 'https://dreamlinedigital.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
