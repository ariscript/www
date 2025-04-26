# My website

This is the source code of my website, including the content on it. You can
visit it [here](https://ari.foo/).

Uses 11ty for site generation.

## Features

### Static

- Automatic Atom and JSON Feed generation
- Automatic Open Graph image generation ("twitter card")
- Automatic Sitemap generation
    - Caveat: single-file sitemap only supports 50,000 URLs. If you have too
      many pages, this will break. A website of this nature should not reach
      this amount in any reasonable timeframe.
- Tagging for blog posts
    - Automatically generates page of articles using that tag

### JavaScript Required

These features currently ship a total of ~1.6KB of clientside JS, and each can
be individually disabled.

- [CSS Naked Day](https://css-naked-day.github.io/)
  ([script](public/js/cssNakedDay.js))
    - Removes all styles during the 50 hours of CSS Naked Day
- Insert favicons after external links ([script](public/js/webicon.js))
    - Made possible through [webicon](https://github.com/ariscript/webicon)
    - Fallback if no icon can be found
    - Caveat: only automatic for links written in Markdown
- Copy links to specific headings ([script](public/js/headerCopy.js))
    - Copies fragment link on click
    - Only for headers written in Markdown

## Contributing

Feel free to send a pull request to add anything you want, as long as you obey
the License. I might merge it.

## Licensing

The code powering the website is licensed under [AGPL 3.0 or later](LICENSE),
but the content on it is licensed under
[CC-BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless
otherwise stated. Any use of this content outside the scope of these licenses
needs advance approval from myself.

Content includes any files in the `content/` or `data/` directories, except:

- the `content/feed/` directory
- `content/content.11tydata.js`
- `content/blog.njk`
- `content/blog/blog.11tydata.js`
- `content/tags.njk`
- `content/licenses.11ty.js`
- `content/og.11ty.js`
- `content/sitemap.njk`
- the keys of `data/config.json`
- the keys of `data/feed.json`

Content also includes the following outside of the mentioned directories:

- `include/partials/banner.njk`

This list may (and likely will) change to include some new files if necessary.

## Acknowledgements

My website is heavily based off [Evan Boehs](https://boehs.org/)'s website
([source](https://github.com/boehs/site)) and basically implements a subset of
its features that I wanted to have, with a bent towards minimizing clientside
JS. I also have to thank him for getting me into properly making my own website.
