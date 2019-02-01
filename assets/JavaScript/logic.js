//Array holds the animals that fills the buttons
var topics = ["dogs", "cats", "monkeys", "squirrels", "snakes", "eagles"];
var card = $("#body");
var header = $("#heading");
var APIkey = "CHJyzOiCX3h6rjniXg2nhoxLslu3hK8k"; 

//array of animals in turned into buttons and propogates the top of the field
function initialAnimals(){
    //loop through array of animals to make the buttons
    for (i = 0; i < topics.length; i++){
        header.append("<button type='button' class='btn btn-primary animal-gif' id='" + topics[i] + "'>" + topics[i] + "</button>");
    }
    $(document).on("click", ".animal-gif", function(){
        console.log(this.id);
        var animal = this.id;
        // $("#gif-area").text(this.id);
        // console.log(animal);  

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + APIkey + "&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            var results = response.data;
    
            for (var i = 0; i < results.length; i++) {
                //var gifDiv = $("<div>");
    
                var rating = results[i].rating;
    
                var p = $("<p>").text("Rating: " + rating);
    
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);
    
                card.prepend(p);
                card.prepend(animalImage);
            }
        });
    });
}
 initialAnimals();

 //when a new animal is typed into the field and submit is pressed
$("#submitNewAnimal").click(function(){
    var newAnimal = $("#more-animals").val().trim();
    //if input is empty, do nothing
    if ($("#more-animals").val() !== ''){
    //new animal is added to array
    topics.push(newAnimal);
    n = topics.length - 1;
    //button is created for the new animal
    header.append("<button type='button' class='btn btn-primary animal-gif' id='" + topics[n] + "'>" + topics[n] + "</button>");
    }
})
    $(document).on("click", "#animal", function(){
        console.log(this.id);

    });






