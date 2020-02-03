$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();

    const burgerName = $("#nameField").val().trim();
    if (burgerName.length === 0) {
      return alert("Please enter something for burger name.");
    }

    $.ajax("/api/burgers",
    {
      type: "POST",
      data: {name: burgerName}
    }).then(function(result) {
      console.log(result);
      location.reload();
    });
  });

  $(".devour-btn").click(function (event) {
    event.preventDefault();

    $.ajax("/api/burgers/" + $(this).data("id"),
      {
        type: "PUT"
      }).then(function (response) {
        console.log(response);
        location.reload();
      });
  });
});