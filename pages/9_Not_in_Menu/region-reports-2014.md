---
layout: page
title: Region Reports 2015
permalink: /demography/region-reports-2014/
datalink: /data
description: Colorado Planning Region Reports - 2014
published: true
---

<br />

## Colorado Planning Region Reports

<br />

<p><strong>2015 Region Reports </strong>: In conjunction with regional organizations, the State Demography Office produces Region Reports each year, which are designed to give the reader a broad understanding of the issues facing that region, their recent accomplishments, and upcoming goals.</p>

<select id="regrpt" size="1">
<option value="" selected="selected">Select A Region</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region1.pdf">Region 1</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region2.pdf">Region 2</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region3.pdf">Region 3</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region4.pdf">Region 4</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region5.pdf">Region 5</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region6.pdf">Region 6</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region7.pdf">Region 7</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region8.pdf">Region 8</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region9.pdf">Region 9</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region10.pdf">Region 10</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region11.pdf">Region 11</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region12.pdf">Region 12</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region13.pdf">Region 13</option>
<option value="https://dola.colorado.gov/demog-cms/sites/dola.colorado.gov.demog-cms/files/demog-docs/presentations_publications/reports/region14.pdf">Region 14</option>
</select>
<p><input id="rr_submit" type="submit" value="View" /></p>

<script>

document.getElementById('rr_submit').addEventListener('click', function(){

  var sel = document.getElementById('regrpt');

  if (sel.options[sel.selectedIndex].value !== '') {
    var selectedreport = sel.options[sel.selectedIndex].value;
    window.open(selectedreport,'_blank');
  }

});


</script>
