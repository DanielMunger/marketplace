$(document).ready(function(event) {
  event.preventDefault;
  $("form#name").submit(function(event){
    var name = $("input#name1").val();
    $("#output-name").text(name);
  });
  $("form#email").submit(function(event){
    var email = $("input#email1").val();
    $("#output-email").text(email);
  });
  $("form#address").submit(function(event){
    var address = $("input#address1").val();
    $("#output-address").text(address);
  });
});
