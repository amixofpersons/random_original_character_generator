$(document).ready(function(){
  //For the button on the user's profile page
  $("#form_buttons").on("click", function(event){
    var $target = $(event.target);
    $target.closest("div").find('.hidden').show();

    $.ajax({
      url: $target.attr("action"),
      type: "GET",
      data: $("span")
    })
  });

  $("#form_buttons").on("dblclick", function(event){
    var $target = $(event.target);
    $current_divider = $("div")
    $("span").hide();

    $.ajax({
      url: $target.attr("action"),
      type: "GET",
      data: $("span")
    })
  });

  //For the delete buttons
  $("#delete_buttons").on("click", function(event){
    event.preventDefault();
    $target = $(event.target);
    // $target.attr("disabled", "true");

    $.ajax({
      url: $target.attr("action"),
      type: "DELETE"
    }).done(function() {
      $target.closest("div").find('#character').remove();
    });
  });

  //For the index page to display all characters
  $("#display_all").on("click", function(event){
    event.preventDefault();
    $target = $(event.target);
    $(".hidden").show();

    $.ajax({
      url: $target.attr("action"),
      type: "GET"
    })
  })

   $("#display_all").on("dblclick", function(event){
    event.preventDefault();
    $target = $(event.target);
    $(".hidden").hide();

    $.ajax({
      url: $target.attr("action"),
      type: "GET"
    })
  })
});
