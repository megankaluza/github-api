var Template = require('./../js/github.js').templateModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#getUsername").click(function(){
    var name = $("#name").val();
    $("#name").val("");
    var newTemplate = new Template(name);

    $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
      console.log(response);

        $("#output-name").text("Welcome " + response.name + "!" + response.public_repos);
    }).fail(function(error){
    });

  });
});
