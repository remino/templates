Middleman site template
=======================

By Rémino Rem <https://remino.net/>

Plain and simple [Middleman](https://middlemanapp.com) site template.

Also good for a quick-and-dirty sandbox static site similar to using [CodePen](https://codepen.io).

Based on the same idea as [jeksite](https://github.com/remino/jeksite.git) using [Jekyll](https://jekyllrb.com).

- [Usage](#usage)
- [To Do](#to-do)

## Usage

Copy this directory to a new site repository, then install dependencies and serve it with Middleman:

```sh
asdf install # if you use asdf
npm install
bundle install
bundle exec middleman server
```

## To Do

- [ ] Update `config.rb` and `data/site.yml` to your liking.
- [ ] Update `README.md` by first deleting its content.
- [ ] Update or remove `LICENSE.txt` if needed. (ISC licence by default.)
- [ ] Delete content of `index.html`, `style.css`, and `script.js` files found in `source`.
