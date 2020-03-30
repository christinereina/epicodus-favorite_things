$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var favPerson = $("#person").val();
    var favPlace = $("#place").val();
    var favFood = $("#food").val();
    var favColor = $("#color").val();
    var favAnimal = $("#animal").val();  
    // alert(favPerson);
    var array = [favPerson, favPlace, favFood, favColor, favAnimal];
    // array[1] //place
    // array[0] //person
    // array[2] //food
    var newArray = [];
    newArray.push(array[1], array[0], array[2], array[3], array[4]);
    console.log(newArray);
    $("ul").append("<li>" + newArray[0] + "</li>");
    $("ul").append("<li>" + newArray[1] + "</li>");
    $("ul").append("<li>" + newArray[2] + "</li>");
    $("ul").append("<li>" + newArray[3] + "</li>");
    $("ul").append("<li>" + newArray[4] + "</li>");
  });
});