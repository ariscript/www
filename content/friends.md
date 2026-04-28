---
layout: layout/entry.njk
title: Friends
description: I love my friends :)
---

{%- css %}{% include "style/friends.css" %}{% endcss %}

# Friends with 88x31s

<ul id="domain-icons">
    {% for domain, img in friends.icons %}<li>
            <a href="http://{{ domain }}">
                <img
                    class="domain-icon"
                    src="{{ img }}"
                    width="88"
                    height="31"
                    alt="88x31 button for {{ domain }}"
                    eleventy:ignore
                />
            </a>
        </li>{% endfor %}
</ul>

Here's my own 88x31. Hotlinks to it probably won't work if Cloudflare is to be
believed. <img
    id="local-icon"
    src="/img/88x31.png"
    alt="88x31 button for {{ config.hostname }}"
    eleventy:ignore
/>

# Friends without 88x31s

Please make your own 88x31s, I need more up there.

<ul>
    {% for name, place in friends.links %}<li>
            <a
                href="{{ place }}"
                rel="noopener noreferrer"
                target="_blank"
                data-external-link="true"
            >{{ name }}</a>
        </li>{% endfor %}
</ul>

The order is shuffled on every build. I love all my friends :)
