var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks ){
        tablinks.classlist.remove("active-link");

    }
    for(tabcontent of tabcontents ){
        tabcontents.classlist.remove("active-tab");
        
    }
    event.currentTarget.classlist.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
