/*window.onload = runAccordion;
setInterval(function(){ runAccordion(); }, 50);*/

window.onload = homestats;


/* Populate County Dropdown */

//Counties
function homestats() {
	popDropdown('county','county-dropdown')

//generating maximum year value for estimates
var urlstr = "https://gis.dola.colorado.gov/lookups/componentYRS";
d3.json(urlstr).then(function(yeardata){
    var maxest = yeardata.filter(function(d){return d.datatype == 'Estimate'});
	var yrsList = maxest.map(function(d){return d.year;});
    var yrvalue = d3.max(yrsList);
	
//Generate Initial Tables
genSYA("000",yrvalue);
genCOC("000",yrvalue);
genACS("000",yrvalue);
genTenure("000",yrvalue);
genRaceEth("000",yrvalue);
genHousing("000",yrvalue);


d3.select("#county-dropdown").on("change", function(d,i) {
        var selectedfips = d3.select("#county-dropdown").property('value');
		var selectedcounty = d3.select('#county-dropdown option:checked').text();

        genSYA(selectedfips,yrvalue);
		genCOC(selectedfips,yrvalue);
		genACS(selectedfips,yrvalue);
		genTenure(selectedfips,yrvalue);
		genRaceEth(selectedfips,yrvalue);
		genHousing(selectedfips,yrvalue);
    });
}); //end of maximum year value
}
