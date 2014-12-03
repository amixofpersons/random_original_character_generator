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
      });
    });
  });

  $(".view_buttons").submit(function(event){
    event.preventDefault();
  });

  //For the delete buttons
  $(".delete_buttons").on("click", function(event){
    event.preventDefault();
    $target = $(this);
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

  $(".display_button").mouseover(function(event){
    event.preventDefault();
    $target = $(event.target);
    $target.closest('div').find('.hidden').show();

    $.ajax({
      url: $target.attr('action'),
      type: "GET",
      data: $("span")
    }).done(function(){
      $(".display_button").click(function() {
        $target.closest("div").find('.hidden').hide();
      })
    });
  });
  $(".display_button").submit(function(event){
    console.log(event);
    event.preventDefault();
  });

  $('.refresh').click(function(event){
    event.preventDefault();
    location.reload();
  });
});
