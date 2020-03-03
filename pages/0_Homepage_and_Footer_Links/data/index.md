---

layout: page
title: "State Demography Office Data Page"
description: "Download Colorado Demography Office Datasets, including Population Estimates and Forecasts, Housing and Household, Economic, and more."
permalink: "/data/"

---

<div style="text-align: center;" markdown="1">

[**_Demography Office Data_**](#state-demography-office-data) \| [**_Census Data Tools_**](#census-data-tools) \| [**_GIS Data Downloads_**](/gis/gis-data#gis-data) \| [**_Thematic Maps_**](/gis/thematic-maps#thematic-maps)

</div>


---

## State Demography Office Data

<ul>{% assign pages_list = site.pages | sort: 'title' %}{% for page in pages_list %}{% if page.tag == "popdata" or page.tag == "bdmdata"  or page.tag == "econdata" or page.tag == "hhdata" %}<br /><li><b><a href="{{ page.url }}">{{ page.title }}</a></b>&nbsp;&nbsp;{{ page.years }}</li><p><i>{{ page.description }} </i><br /><br />OR download:&nbsp;&nbsp;&nbsp;&nbsp;{% for file in page.file %}<a href="{{ file }}">{{ file | split: '/' | last }}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{% endfor %}</p><hr>{% endif %}{% endfor %}</ul>


<br />

## Census Data Tools

 - [Census Search](/CensusAPI) Easy to use, custom search tool created by the State Demography Office.  Search Census and American Community Survey data from 1980 to 2014.  Covers Colorado and the nation: Block Groups, Tracts, Counties, Places, and States.
 
 - [American FactFinder (census.gov)](http://factfinder.census.gov/faces/nav/jsf/pages/index.xhtml) Census tool for accessing the vast universe of Census Data products; includes population, housing, and economic data.

<br />

---
<br />

## GIS Data Downloads

- [GIS Data](/gis/gis-data#gis-data) Municipal Boundaries, Annexations, Special Districts, American Community Survey and Census Shapefiles and much more!

<br />

---
<br />

## Thematic Maps

- [Thematic Maps](/gis/thematic-maps#thematic-maps)  A variety of thematic maps using data from: ACS 2014-2018, Census 2010 and original data from the Colorado State Demography Office!

<br />

---
<br />

## Region Reports

- [Planning Region Reports](/demography/region-reports-2014#colorado-planning-region-reports)  Detailed Demographic and Economic Reports by Colorado Planning Region!

<br />

---



