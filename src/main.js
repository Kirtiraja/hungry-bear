import $ from 'jquery';
import { HungryBear } from './../src/hungry-bear.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import  bearBite from './dancingBear.gif';

let bearBiteImg = document.getElementById('bearBite');
bearBiteImg.src = bearBite;

$(document).ready(function(){
  let fuzzy = new HungryBear();
  $('#nameForm').submit(function(){
    event.preventDefault();
    $('.feed, .poke, .sleep').fadeIn();
    $('#nameForm').hide();
    let userInputted = $("#bearName").val();
    fuzzy.name = userInputted;
    console.log(fuzzy);
    // console.log("bear name: ", this.name );
    $("#displayBearName").text(userInputted);
    function displayTime () {
      $("#bearHungerDisplay").text(fuzzy.foodLevel);
    }
    fuzzy.setHunger();


    setInterval(function(){
      displayTime();
      if(fuzzy.foodLevel <= 0){
        modalDisplay();
      }
    }, 500);

    let modalDisplay = () => {
      $('#myModal').modal('show');
        setTimeout(function() {
          $('#myModal').modal('show');
        }, 1000);
    };

    $(".feed").click(function(event) {
      event.preventDefault();
      fuzzy.feed();
    });

    $(".poke").click(function(event) {
      event.preventDefault();
      fuzzy.poke();
    });

    $(".sleep").click(function(event) {
      event.preventDefault();
    });

    setInterval(function(){
      fuzzy.didYouGetEaten();
    }, 1000);
  });
});
