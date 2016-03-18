---

layout: page
title: "Population Data"
permalink: "/population/data/index.html"

---
## Population: Data and Lookups


<ul>{% assign pages_list = site.pages | sort: 'title' %}{% for page in pages_list %}{% if page.tag == "popdata" %}<br /><li><b><a href="{{ page.url }}">{{ page.title }}</a></b>&nbsp;&nbsp;{{ page.years }}</li><p>{{ page.description }} <br />OR download the raw data <a href="{{ page.file }}">here</a>.</p>{% endif %}{% endfor %}</ul>