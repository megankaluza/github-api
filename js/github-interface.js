var Git = require('./../js/github.js').gitModule;

$(document).ready(function(){
  $("#getUsername").click(function(){
    var name = $("#name").val();
    $("#name").val("");
    var currentGitObject = new Git();
    currentGitObject.getUsername(name);
  });
});
