var inputs = document.getElementsByTagName("input");
var search = document.getElementById("search");

function pp(){
    for(var i=1; i<inputs.length-1; i++){
        inputs[i].checked = !inputs[i].checked;
    }
}

search.onfocus = function(){
    this.value = "";
}

