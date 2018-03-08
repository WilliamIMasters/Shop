function jsonStartHome() {
   readTextFile("scripts/Items.json", function(text){
       var data = JSON.parse(text);
       if (data != null) {
          editHome(data[data.length-1]);
       } else {
          console.log("Error loading json");
       }

   });
}

function editHome(data) {
   //console.log(data);
   document.getElementById("FITitle").innerHTML = data.name;
   //console.log(data.slug);
   document.getElementById("FIImg").childNodes[0].src = "Images/" + data.slug + ".png";
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
