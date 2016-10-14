var Template = require('./../js/github.js').templateModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#getUsername").click(function(){
    var name = $("#name").val();
    var newTemplate = new Template(name);
    $("#output-name").text(newTemplate.getUsername());
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
    console.log(name);
    console.log(error.responseJSON.message);
  });
});
