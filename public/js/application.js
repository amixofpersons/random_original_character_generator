$(document).ready(function(){
  $('.form_buttons').on('click', function(event){
    event.preventDefault();
    var $target = $(event.target);
    like = $target.find("input[id=like]");
    // dislike = $target.find("input[id=dislike]");

    if (like){
      $.ajax()
      alert("Awesome! You now have an OC!")
    }
  })
})