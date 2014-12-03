$(document).ready(function(){
  //For the button on the user's profile page
  $(".view_buttons").mouseover(function(event){
    var $target = $(event.target);
    $target.closest("div").find('.hidden').show();

    $.ajax({
      url: $target.attr("action"),
      type: "GET",
      data: $("span")
    }).done(function(){
      $(".view_buttons").click(function(event) {
        $(".hidden").hide();
      })
    })
  });

  //For the delete buttons
  $(".delete_buttons").on("click", function(event){
    event.preventDefault();
    $target = $(event.target);
    $target.attr("disabled", "true");
    $target.val("Deleting...");

    $.ajax({
      url: $target.attr("action"),
      type: "DELETE"
    })

    .done(function() {
      $target.closest("div").find('.character').remove();
    });
  });

  //For the index page to display all characters
  $(".display_all").mouseover(function(event){
    event.preventDefault();
    $target = $(event.target);
    $(".hidden").show();

    $.ajax({
      url: $target.attr("action"),
      type: "GET"
    }).done(function(){
      $(".display_all").click(function(event) {
        $(".hidden").hide();
      });
    })
  })
});
