$(document).ready(function(){
  $("#form_buttons").on("click", function(event){
    var $target = $(event.target);
    $current_divider = $("div")
    $("span").removeClass("hidden");

    $.ajax({
      url: $target.attr("action"),
      type: "GET"
    })
    .done(function(){
      $("span").addClass("hidden");
    })
  })
});
