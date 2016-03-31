---

layout: page
title: "Economy and Labor Force Data"
permalink: "/economy-labor-force/data/index.html"

---
## Economy and Labor Force: Data and Lookups


<ul>{% assign pages_list = site.pages | sort: 'title' %}{% for page in pages_list %}{% if page.tag == "econdata" %}<br /><li><b><a href="{{ page.url }}">{{ page.title }}</a></b>&nbsp;&nbsp;{{ page.years }}</li><p><i>{{ page.description }} </i><br /><br />OR download: <a href="{{ page.file }}">{{ page.file | split: '/' | last }}</a></p><hr>{% endif %}{% endfor %}</ul>