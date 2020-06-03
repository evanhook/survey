$(document).ready(function() {
  $("form#enterName").submit(function(event) {
    event.preventDefault();
    const nameInput = $("#name").val();
  });
});