$(document).ready(function(){
  //For the button on the user's profile page
  $("#form_buttons").on("click", function(event){
    var $target = $(event.target);
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

  //For the delete buttons
  $("delete_buttons").on("click", function(event){
    var $target = $(event.target);
    $target.val("Deleting...");
    $target.attr("disabled", "true");
  })
});
