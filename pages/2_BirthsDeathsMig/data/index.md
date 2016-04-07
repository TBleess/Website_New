---

layout: page
title: "Biths Deaths and Migration Data"
permalink: "/births-deaths-migration/data/"

---
## Births, Deaths and Migration: Data and Lookups


<ul>{% assign pages_list = site.pages | sort: 'title' %}{% for page in pages_list %}{% if page.tag == "bdmdata" %}<br /><li><b><a href="{{ page.url }}">{{ page.title }}</a></b>&nbsp;&nbsp;{{ page.years }}</li><p><i>{{ page.description }} </i><br /><br />OR download: <a href="{{ page.file }}">{{ page.file | split: '/' | last }}</a></p><hr>{% endif %}{% endfor %}</ul>