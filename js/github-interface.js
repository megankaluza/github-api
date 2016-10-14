var Template = require('./../js/github.js').templateModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#getUsername").click(function(){
    var name = $("#name").val();
    $("#name").val("");
    var newTemplate = new Template(name);
    $("#output-name").text("Welcome " + newTemplate.getUsername() + "!");

    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
        console.log (response.public_repos);
          console.log(response.email);
    }).fail(function(error){
      console.log('.public_repos');
    });
  });
});
