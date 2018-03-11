function jsonStartItem() {
   let id = getParameterByName("id");
   readTextFile("scripts/Items.json", function(text){
       var data = JSON.parse(text);
       if (data != null) {
          editItem(data[id]);
       } else {
          console.log("Error loading json");
       }

   });
}

function editItem(data) {
   //console.log(data);
   document.getElementById("FITitle").innerHTML = data.name;
   document.getElementById("FIImg").childNodes[0].src = "images/" + data.slug + ".png";
   document.getElementById("FIPriceSpan").innerHTML = data.price;
   document.getElementById("FIDesc").innerHTML = data.description;
}





function readTextFile(file, callback) { // thanks to Stano https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function getParameterByName(name, url) { // thanks to Stano
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
