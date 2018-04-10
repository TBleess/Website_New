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

<p><strong>2017 Region Reports </strong>: In conjunction with regional organizations, the State Demography Office produces Region Reports each year, which are designed to give the reader a broad understanding of the issues facing that region, their recent accomplishments, and upcoming goals.</p>

<select id="regrpt" size="1">
<option value="" selected="selected">Select A Region</option>
<option value="https://drive.google.com/uc?export=download&id=14dKySL-ipACpcCVR_gHqZyDVlL9IFzxJ">Region 1</option>
<option value="https://drive.google.com/uc?export=download&id=1VSKotsItrbmbO531vNOKZut8U2MUlX6P">Region 2</option>
<option value="https://drive.google.com/uc?export=download&id=1bnNk4lL1TMIehXpZpKJ1NF4CV2r-OJRe">Region 3</option>
<option value="https://drive.google.com/uc?export=download&id=1nLAgwZP_CkI3kwX3C0J8NpCJnW-X5NcC">Region 4</option>
<option value="https://drive.google.com/uc?export=download&id=15XdSVknk3NZwnTsMNWx84_jxxnBMysnc">Region 5</option>
<option value="https://drive.google.com/uc?export=download&id=1ed8ds-8t87haIZBHbsTx8TtON-T_jpW6">Region 6</option>
<option value="https://drive.google.com/uc?export=download&id=15nJI5UgJl-MXpnc7_pBEQ0EBJPKm43VI">Region 7</option>
<option value="https://drive.google.com/uc?export=download&id=1o0brJA3Ha8YBUv8USsZTeUpcF7EhU_Nb">Region 8</option>
<option value="https://drive.google.com/uc?export=download&id=1xn4VpSDEPPYECfq0YZZ-86c-3FY2-9QT">Region 9</option>
<option value="https://drive.google.com/uc?export=download&id=1OlyABEP-jVwY8WbeqjP4R9ksfYc-G3hJ">Region 10</option>
<option value="https://drive.google.com/uc?export=download&id=1AAObyMQ1YA_glU4CcYKYw9nlaKRf8B_V">Region 11</option>
<option value="https://drive.google.com/uc?export=download&id=1udq1FRK8zcj5Ho0drpHLAu1a_JrREc6p">Region 12</option>
<option value="https://drive.google.com/uc?export=download&id=1fDhLOHzUAQ3rvOI35tso9xgJXe52YnFi">Region 13</option>
<option value="https://drive.google.com/uc?export=download&id=1gY5WrSJzzYi8zqkFcsqXmMstZzoIj5Wm">Region 14</option>
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
