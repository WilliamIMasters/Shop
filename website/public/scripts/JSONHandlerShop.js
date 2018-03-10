function jsonStartShop() {

   readTextFile("scripts/Items.json", function(text){
       var data = JSON.parse(text);
       if (data != null) {
          editShop(data);
       } else {
          console.log("Error loading json");
       }
   });




}

function editShop(data) {
   console.log("a");
   let templateCopy = document.getElementByID("itemTemplate");
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
