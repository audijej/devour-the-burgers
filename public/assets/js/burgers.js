$(function() {

    $(".create-form").on("submit", function(event){
        console.log("Hello");
        event.preventDefault();
    
        let newBurger = {
            burger_name: $("#burger-box").val().trim(),
            devoured: 0
        };

        console.log(newBurger);
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
            console.log("created new burger");
            location.reload();
        }
        );
    });


})

