//First line below only
//window.onload = runAccordion;
//setInterval(function(){ runAccordion(); }, 50);

window.addEventListener('load', (event) => {

 var gridPanel = document.getElementById('leftHand');
 var accItem = gridPanel.getElementsByClassName('accordionItem');
 var accHD = gridPanel.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    };
});
