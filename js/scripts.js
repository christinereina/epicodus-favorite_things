$(document).ready(function() {
  $("form#things").submit(function(event) {
    event.preventDefault();
  
    var person = $('#things0').val();
    var thing = $('#things1').val();
    var place = $('#things2').val();
    var food = $('#things3').val();
    var animal = $('#things4').val();
    var answers = [person, thing, place, food, animal];
    var p1 = answers[1];
    var p2 = answers[2];
    var answers2 = [answers.push("p1, p2")];
    
    // $('.list').append(answers);
    $('.list').append(answers2);
    alert(p1);
    alert(p2);

  });
});