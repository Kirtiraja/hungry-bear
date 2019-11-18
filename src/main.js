import $ from 'jquery';
import { HungryBear } from './../src/hungry-bear.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let fuzzy = new HungryBear();
  $('#nameForm').submit(function(){
    event.preventDefault();
    $('.feed').fadeIn();
    $('.poke').fadeIn();
    $('.sleep').fadeIn(); 
    $('#nameForm').hide();
    let userInputted = $("#bearName").val();
    fuzzy.name = userInputted;
    console.log(fuzzy);
    console.log("bear name: ", this.name );
    $("#displayBearName").text(userInputted);
    function displayTime () {
      $("#bearHungerDisplay").text(fuzzy.foodLevel);
    }
    console.log(fuzzy.foodLevel);
    fuzzy.setHunger();
    setInterval(function(){
      displayTime();
    }, 500);

    $(".feed").click(function(event) {
      event.preventDefault();
      console.log('clicked');
      fuzzy.feed();
    });

  });
  $(".poke").click(function(event) {
    event.preventDefault();
  });
  $(".sleep").click(function(event) {
    event.preventDefault();

  });








});
