var Template = require('./../js/github.js').templateModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#getUsername").click(function(){
    var name = $("#name").val();
    $("#name").val("");
    var newTemplate = new Template(name);

    $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
      console.log(response);
        $("#output-name").text("Welcome " + response.name + "!");
        $("#avatar").append("<img src=" + response.avatar_url + ">");
    }).fail(function(error){
    });

    $.get('https://api.github.com/users/' + name + '/repos?visibility=public&access_token=' + apiKey).then(function(response){
      console.log(response);
    for (i = 0; i < response.length; i++) {
      $("repos").append("<a href=" + response[i].html_url + ">");
};
    console.log(response);
  }).fail(function(error){
  });

  });
});
