$(document).ready(function(){
  $("#form_buttons").on("click", function(event){
    var $target = $(event.target);
    $current_divider = $("div")
    $("span").show();

    $.ajax({
      url: $target.attr("action"),
      type: "GET",
      data: $("span")
    })
  })
  $("#form_buttons").on("dblclick", function(event){
    var $target = $(event.target);
    $current_divider = $("div")
    $("span").hide();

    $.ajax({
      url: $target.attr("action"),
      type: "GET",
      data: $("span")
    })
  })
});
