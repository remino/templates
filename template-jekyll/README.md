Jekyll site template
====================

Plain and simple [Jekyll](https://jekyllrb.com) site template ideal for [GitHub Pages](https://pages.github.com).

Also good for a quick-and-dirty sandbox static site similar to using [CodePen](https://codepen.io).

- [Usage](#usage)
- [To Do](#to-do)

## Usage

Copy this directory to a new site repository, then install dependencies and serve it with Jekyll:

```sh
asdf install # if you use asdf
bundle install
bundle exec jekyll serve --livereload --incremental
```

## To Do

- [ ] Ensure `Gemfile` is using `github-pages` if the site is for GitHub Pages. If not, use plain `jekyll`.
- [ ] Update `_config.yml`, notable `baseurl`, `domain`, `url`, `title`, and `description`.
- [ ] Update `README.md` by first deleting its content.
- [ ] Update or remove `LICENSE.txt` if needed. (ISC licence by default.)
- [ ] Delete content of `index.html`, `style.css`, and `script.js`.
