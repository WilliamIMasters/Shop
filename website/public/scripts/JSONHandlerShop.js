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
   let template = document.querySelector("template").content;
   for (let i=0; i < data.length; i++) {
      console.log(i);
      let templateCopy = template.cloneNode(true);
      //templateCopy.getElementById("shopItemTitle").setAttribute("data-value", data[i].id);
      templateCopy.getElementById("shopItemTitle").innerHTML = data[i].name;
      templateCopy.getElementById("shopItemImg").src = "images/" + data[i].slug + ".png";
      let buttons = templateCopy.getElementById("shopItemButtons");
      for (let j=0; j < 2; j++) {
         buttons.childNodes[j].value = data[i].id;
      }


      document.getElementById("shopItems").appendChild(templateCopy);
   }

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
