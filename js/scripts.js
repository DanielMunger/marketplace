$(document).ready(function() {

  $("form#name").submit(function(event){
    event.preventDefault();
    var name = $("input#name1").val();
    $("#output-name").text(name);
  });
  $("form#email").submit(function(event){
    event.preventDefault();
    var email = $("input#email1").val();
    $("#output-email").text(email);
  });
  $("form#address").submit(function(event){
    event.preventDefault();
    var address = $("input#address1").val();
    $("#output-address").text(address);
  });
});
