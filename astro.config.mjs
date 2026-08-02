// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.GITHUB_PAGES === 'true' && repoName ? `/${repoName}/` : '/';

export default defineConfig({
	base,
});
