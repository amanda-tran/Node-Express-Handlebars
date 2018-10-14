
$(() => {
  $(".create-form").on("submit", event => {
    event.preventDefault();
    console.log("Submit Clicked");
    let newBurger = {
      name: $("#burgerField")
        .val()
        .trim()
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(() => {
      console.log("Created new Burger");
      location.reload();
    });
  });

  $("button.devourIt").click(function() {
    event.preventDefault();
    // alert($(this).data("id")); // or alert($(this).attr('id'));
    console.log(`Edited ${$(this).data("id")} Devoured State`);
    let id = $(this).data("id");
    let trueDevoured = 1;
    let newDevoured = {
        devoured: trueDevoured
    };

    $.ajax(`/api/burger/${id}`, {
        type: "PUT",
        data: newDevoured
    }).then(()=>{
        console.log(`Changed ${id} Devoured to true`)
        location.reload();
    })

  });
});
