---

layout: page
title: "State Demography Office Data Page"
permalink: "/data/index.html"

---
## Data Page: SDO Data Products and Data Tools

<ul>{% assign pages_list = site.pages | sort: 'title' %}{% for page in pages_list %}{% if page.tag == "popdata" or page.tag == "bdmdata"  or page.tag == "econdata" or page.tag == "hhdata" %}<br /><li><b><a href="{{ page.url }}">{{ page.title }}</a></b>&nbsp;&nbsp;{{ page.years }}</li><p>{{ page.description }} <br />OR download the raw data <a href="{{ page.file }}">here</a>.</p>{% endif %}{% endfor %}</ul><br />


## Census Data Tools

 - [Census Search](/CensusAPI/queryapi.html) Easy to use, custom search tool created by the State Demography Office.  Search Census and American Community Survey data from 1980 to 2014.  Covers Colorado and the nation: Block Groups, Tracts, Counties, Places, and States.
 
 - [American FactFinder (census.gov)](http://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml) Census tool for accessing the vast universe of Census Data products; includes population, housing, and economic data.


## GIS Data Downloads

- [GIS Data](/gis/gis-data.html) Municipal Boundaries, Annexations, Special Districts, American Community Survey and Census Shapefiles and much more!


