# Vue.js project template

[![ci](https://github.com/jonlabelle/vue-project-template/actions/workflows/ci.yml/badge.svg)](https://github.com/jonlabelle/vue-project-template/actions/workflows/ci.yml)
[![cd](https://github.com/jonlabelle/vue-project-template/actions/workflows/cd.yml/badge.svg?branch=master)](https://github.com/jonlabelle/vue-project-template/actions/workflows/cd.yml)
[![code quality](https://github.com/jonlabelle/vue-project-template/actions/workflows/code-quality.yml/badge.svg)](https://github.com/jonlabelle/vue-project-template/actions/workflows/code-quality.yml)

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
  "keywords": [
    "vue",
    "project-template",
    "template"
  ]
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

### Install Vue CLI

The [Vue CLI] \(`@vue/cli`\) is a globally installed [npm package] and provides
the `vue` command in your terminal. It provides the ability to quickly scaffold
a new project via [`vue create`], or instantly prototype new ideas via [`vue serve`].

```bash
npm install -g @vue/cli
```

#### Using the GUI

You can also create and manage projects using a graphical interface with the
[`vue ui`] command:

```bash
vue ui
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

To run in Docker:

1. Build the image: `npm run docker-build`
2. Start a container: `npm run docker-run`
    - or run in [detached mode](https://docs.docker.com/engine/reference/run/#detached--d): `npm run docker-run-detach`
3. Open browser to <http://localhost:8080>

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

[npm package]: https://www.npmjs.com/package/@vue/cli
[Vue CLI]: https://cli.vuejs.org/
[`vue create`]: https://cli.vuejs.org/guide/creating-a-project.html#vue-create
[`vue serve`]: https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve
[repository template]: https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
[`vue ui`]: https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui
[static site]: https://kind-hill-006cd6310.azurestaticapps.net
