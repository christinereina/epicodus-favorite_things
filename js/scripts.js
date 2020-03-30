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
    // array[0] = favPlace;
    // array[1] = favPerson;
    array[1] //place
    array[0] //person
    array[2] //food
    var newArray = array[1], array[0], array[2];
    alert(newArray);
   
  });
});