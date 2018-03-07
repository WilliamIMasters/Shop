$(document).ready(function() {
   // Initialize Firebase
   var config = {
      apiKey: "AIzaSyD06dyAl4YU8qTgDonfjLtEd3YLtoCF0hY",
      authDomain: "redditclone-fbaa5.firebaseapp.com",
      databaseURL: "https://redditclone-fbaa5.firebaseio.com",
      projectId: "redditclone-fbaa5",
      storageBucket: "redditclone-fbaa5.appspot.com",
      messagingSenderId: "363009225396"
   };
   
   var DAY_IN_MS = 86400000;
   firebase.initializeApp(config);
   var database = firebase.database();

   database.ref("items").orderByChild("createdAt").startAt(Date.now() - DAY_IN_MS).on("child_added", function(snapshot) {
      if($("#loadingMsg").is(":visible")) {
         $("#loadingMsg").hide();
      }
      var result = snapshot.val();
      result.id = snapshot.key;
      buildItemElement(result);
   });

   database.ref("items").orderByChild("createdAt").startAt(Date.now() - DAY_IN_MS).on("child_changed", function(snapshot) {
      var result = snapshot.val();
      result.id = snapshot.key;
      $("div.votes#" + result.id).text(result.votes);
   });

   function buildItemElement(item) {
      var $template = $('#content-template').clone();
      var newItem = $template.prop('content');

      $(newItem).find('.content-title').text(item.title);
      $(newItem).find(".arrow").attr("id", item.id);
      $(newItem).find(".vote-up").on("click", upVote);
      $(newItem).find(".vote-down").on("click", downVote);
      $(newItem).find('.votes').text(item.votes).attr("id", item.id);
      $(newItem).find('.content-link').attr('href', item.link).attr('target', '_blank');
      $(newItem).find('.content-meta').text(item.user + ' posted at ' + moment(item.createdAt).fromNow());

      $('#list').prepend(newItem);
   }

   function upVote() {
      var itemId = $(this).attr("id");
      firebase.database().ref("/items/"+itemId + "/votes").transaction(function(currentVotes) {
         return currentVotes + 1;
      });
   }

   function downVote() {
      var itemId = $(this).attr("id");
      firebase.database().ref("/items/"+itemId + "/votes").transaction(function(currentVotes) {
         return currentVotes - 1;
      });
   }

   $("#sharePost").on("click", function() {
      var link = $("#inputURL").val();
      var title = $("#inputTitle").val();
      var user = $("#inputUser").val();
      var createdAt = Date.now();
      var votes = 0;

      var data = {
         link: link,
         title: title,
         user: user,
         createdAt: createdAt,
         votes: votes

      }

      var itemsListRef = database.ref("items");
      var newItemRef = itemsListRef.push(data, function(err) {
         if(err) {
            console.error("Error pushing to firebase " + err);
         } else {
            $("#inputURL").val("");
            $("#inputTitle").val("");
            $("#inputUser").val("");
            $("#addPost").modal("hide");
         }
      });

   })
});
