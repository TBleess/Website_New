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
<option value="https://drive.google.com/uc?export=download&id=0ByjImPUKASTTLVFRTDBzN3h6MW8">Region 1</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTSnRfTHVROGc3Y00)">Region 2</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTQmJQSGNfT0duNFE)">Region 3</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTN0JVOTRBdkhjTEE)">Region 4</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTTm9rdFVnSHZVV0k)">Region 5</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTR3RDcU1SeS15MFU)">Region 6</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTbGlYQ0dnTXJ1Mjg)">Region 7</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTY0JvblM2M3VLV1k)">Region 8</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTQ0lBZWFaVFNISkk)">Region 9</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTVWE5TWVIX2poZFU)">Region 10</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTRklHSnE1cTBpLWs)">Region 11</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTMXZ4MnI4bTBnQmc)">Region 12</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTZ1lLMTA0SFBXLUk)">Region 13</option>
<option value="(https://drive.google.com/uc?export=download&id=0ByjImPUKASTTQzdMY2NrdmlVSU0)">Region 14</option>
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
