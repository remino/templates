# templates

A collection of reusable project templates maintained by Rémino Rem.

By Rémino Rem  
<https://remino.net/>

[Code Repo](https://github.com/remino/templates)

---

<!-- mtoc-start -->

- [Templates](#templates-1)
    - [JavaScript library](#javascript-library)
    - [Middleman site](#middleman-site)
    - [Jekyll site](#jekyll-site)
- [Usage](#usage)
    - [Copy a site template](#copy-a-site-template)
    - [Generate a JavaScript library](#generate-a-javascript-library)
- [Licence](#licence)

<!-- mtoc-end -->

---

## Templates

| Template | Description | How to use it |
| --- | --- | --- |
| [`template-js-library`](template-js-library/) | Copier template for a JavaScript or TypeScript library, including an Astro documentation site. | Generate with Copier. |
| [`template-middleman`](template-middleman/) | Plain Middleman static site. | Copy the directory into a new repository. |
| [`template-jekyll`](template-jekyll/) | Plain Jekyll static site, suitable for GitHub Pages. | Copy the directory into a new repository. |

### JavaScript library

[`template-js-library`](template-js-library/) is a [Copier](https://copier.readthedocs.io/)
template. It prompts for package, author, deployment, TypeScript, and licence
settings before creating a new library project.

### Middleman site

[`template-middleman`](template-middleman/) is a direct-copy site template for
[Middleman](https://middlemanapp.com). It includes Ruby and JavaScript
dependencies, asset processing, and deployment helpers.

### Jekyll site

[`template-jekyll`](template-jekyll/) is a direct-copy site template for
[Jekyll](https://jekyllrb.com), with a minimal layout and GitHub Pages-ready
configuration.

[Back to top](#)

---

## Usage

Clone the repository once, then either copy a site template or generate a
project from the Copier template:

```sh
git clone https://github.com/remino/templates.git
cd templates
```

### Copy a site template

Create a new project directory and copy the chosen template, including hidden
files:

```sh
mkdir ../my-site
cp -R template-middleman/. ../my-site/
cd ../my-site
```

For a Middleman site, install dependencies and start the development server:

```sh
npm install
bundle install
bundle exec middleman server
```

For a Jekyll site, use `template-jekyll` instead, then run:

```sh
bundle install
bundle exec jekyll serve --livereload --incremental
```

### Generate a JavaScript library

Install [Copier](https://copier.readthedocs.io/) and generate a project from
the local template:

```sh
copier copy template-js-library ../my-js-library
cd ../my-js-library
npm install
```

[Back to top](#)

---

## Licence

This repository is distributed under the [ISC License](LICENSE.txt).
