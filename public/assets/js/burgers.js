// $(function() {

//     $(".create-form").on("submit", function(event){
//         console.log("Hello");
//         event.preventDefault();

//         let newBurger = {
//             burger_name: $("#burger-box").val().trim(),
//             devoured: 0
//         };

//         console.log(newBurger);

//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(
//             function(){
//             console.log("created new burger");
//             location.reload();
//         }
//         );
//     });


// })

$(function () {
    $(".change-devour").on("click", function (event) {

        // let eatBurger = $("<h3>").text("Devour Da Burgers");
        // $(".devourSomeBurger").append(eatBurger)

        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");
        let newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                location.reload();

            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#burgerBox").val().trim(),
            devoured: 0
        };

        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted a burger", id);
                location.reload();
            }
        );

        let devourBurgerDiv = $("<h3>").text("Burger has been devoured");
        $("#deletedBurgerDiv").append(devourBurgerDiv);
    });
})
