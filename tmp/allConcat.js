var Template = require('./../js/github.js').templateModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#getUsername").click(function(){
    var name = $("#name").val();
    $("#name").val("");
    var newTemplate = new Template(name);
    //$("#output-name").text("Welcome " + response.name + "!");

    $.get('https://api.github.com/users/megankaluza?access_token=' + apiKey).then(function(response){
      console.log(response);
        console.log (response.public_repos);
          console.log(response.email);

            $("#output-name").text("Welcome " + response.name + "!" + response.email);
    }).fail(function(error){
      console.log('.public_repos');
    });
  });
});
