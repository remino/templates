# JavaScript library Copier template

A reusable starting point for npm-published JavaScript libraries with an Astro
documentation site. It is distilled from the local `dactylo`, `remarqueeble`,
and `paradimg` projects.

## Use

Install Copier, then generate a new project:

```sh
uvx copier copy /path/to/template-js-library /path/to/new-library
```

The generated project includes:

- ESM and CommonJS library bundles via Vite
- optional TypeScript declarations and an `./auto` entrypoint
- Jasmine tests, ESLint, Prettier, Husky, and lint-staged
- an Astro documentation site built to `deploy/public`
- release-it configuration for npm and GitHub releases

`docs:publish` deliberately stops before deployment: wire its final deployment
step to the hosting setup for each generated project.

## Development

Update the files under `template/` to change what Copier generates. Run the
smoke test below after changing template paths or Jinja expressions:

```sh
uvx copier copy --defaults . /tmp/example-library
```
