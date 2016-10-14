var Git = require('./../js/github.js').gitModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#getUsername").click(function(){
    var name = $("#name").val();
    $("#name").val("");
    var currentGit = new Git(name);

    $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
      $("#avatar").empty();
      console.log(response);
        $("#output-name").text(response.name);
        $("#avatar").append("<img src=" + response.avatar_url + ">");
    }).fail(function(error){
    });

//     $.get('https://api.github.com/users/' + name + '/repos?visibility=public&access_token=' + apiKey).then(function(response){
//       // $("#repos").empty();
//       console.log(response);
//    for (i = 0; i < response.length; i++) {
//       $("#repos").append("<a target='_blank' href=' + response[i].html_url ' + response[i].name + response[i].description + ""</a>");
// };
//     console.log(response);
//   }).fail(function(error){
//    });
});
});
