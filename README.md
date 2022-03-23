# Vue.js project template

[![ci](https://github.com/jonlabelle/vue-project-template/actions/workflows/ci.yml/badge.svg)](https://github.com/jonlabelle/vue-project-template/actions/workflows/ci.yml)
[![cd](https://github.com/jonlabelle/vue-project-template/actions/workflows/cd.yml/badge.svg)](https://github.com/jonlabelle/vue-project-template/actions/workflows/cd.yml)
[![code analysis](https://github.com/jonlabelle/vue-project-template/actions/workflows/code-analysis.yml/badge.svg)](https://github.com/jonlabelle/vue-project-template/actions/workflows/code-analysis.yml)

> A [Vue.js](https://vuejs.org) project (boilerplate) template.

## Demo

Checkout the built [static site] from this template.

## Usage

If deciding to use this [repository template] for your project, please be sure
to replace the following configuration items with your own.

**[package.json](package.json)**

```json
{
  "name": "vue-project-template",
  "description": "A Vue.js project (boilerplate) template.",
  "version": "0.1.0",
  "private": true,
  "license": "MIT",
  "author": "Jon LaBelle",
  "repository": "jonlabelle/vue-project-template",
  "bugs": {
    "url": "https://github.com/jonlabelle/vue-project-template/issues"
  },
  "homepage": "https://github.com/jonlabelle/vue-project-template",
  "keywords": ["vue", "project-template", "template"]
}
```

**[LICENSE.txt](LICENSE.txt)**

```text
Copyright (c) Jon LaBelle
```

**[CHANGELOG.md](CHANGELOG.md)**

```md
## 0.1.0

**Release date:** unreleased

### Enhancements

- ...
- ...

### Bug fixes

- ...
- ...
```

## Project setup

### Install @vue/cli

The [Vue CLI] \(`@vue/cli`\) is a globally installed [npm package] and provides
the `vue` command in your terminal. It provides the ability to quickly scaffold
a new project via [`vue create`], or instantly prototype new ideas via [`vue
serve`].

```bash
npm install -g @vue/cli@next
```

### Install dependencies

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compile and minify for production

```bash
npm run build
```

### Lint and fix files

```bash
npm run lint
```

### Docker

To run the site in Docker:

1. Build the image: `npm run docker-build`
2. Start the container: `npm run docker`
3. Open your browser to: <http://localhost:8080>

[npm package]: https://www.npmjs.com/package/@vue/cli
[vue cli]: https://next.cli.vuejs.org/
[`vue create`]: https://next.cli.vuejs.org/guide/creating-a-project.html#vue-create
[`vue serve`]: https://next.cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve
[repository template]: https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
[static site]: https://vue-project-template.jonlabelle.com
