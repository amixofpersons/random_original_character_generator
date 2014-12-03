$(document).ready(function(){
  $("#form_buttons").on("click", function(event){
    event.preventDefault();
    var $target = $(event.target);
    $target.find('input[value="View Bio"]').val(Viewing Bio);

    $.ajax({
      url: $target.attr("action")
    })
  })
});
