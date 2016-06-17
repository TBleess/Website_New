---

layout: page
title: "Population Data"
permalink: "/population/data/"
description: "Population data lookups for information produced by the Colorado State Demography Office"

---
## Population: Data and Lookups


<ul>{% assign pages_list = site.pages | sort: 'title' %}{% for page in pages_list %}{% if page.tag == "popdata" %}<br /><li><b><a href="{{ page.url }}">{{ page.title }}</a></b>&nbsp;&nbsp;{{ page.years }}</li><p><i>{{ page.description }} </i><br /><br />OR download:&nbsp;&nbsp;&nbsp;&nbsp;{% for file in page.file %}<a href="{{ file }}">{{ file | split: '/' | last }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{% endfor %}</p><hr>{% endif %}{% endfor %}</ul>