$(document).ready(function() {
  $("form#enterName").submit(function(event) {
    event.preventDefault();
    const nameInput = $("#name").val();
    const foodInput = $("#favoriteFood").val();
    const musicInput = $("input:radio[name=music]:checked").val();
    const favoriteColor = $("#color").val();
    const dateInput = $("#born").val();
    
  });
});