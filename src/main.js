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
    // let tamed = false;
    // let affinity = 0;
    let second = 1000;
    let halfSecond = 500;
    let userInputted = $("#bearName").val();
    fuzzy.name = userInputted;
    $("#displayBearName").text(userInputted);
    function displayTime () {
      $("#bearHungerDisplay").text(fuzzy.foodLevel);
      if(fuzzy.foodLevel < 5){
        $('#bearHungerDisplay').addClass('warning');
      } else if (fuzzy.foodLevel > 5){
        $('#bearHungerDisplay').removeClass('warning');
      }
    }
    fuzzy.setHunger(second);

    setInterval(function(){
      displayTime();
      if(fuzzy.foodLevel <= 0){
        modalDisplay();
      }
    }, 500);

    let modalDisplay = () => {
      $('#myModal').modal('show');
        setTimeout(function() {
          $('#myModal').modal('hide');
        }, 1000);
    };

    $(".feed").click(function(event) {
      event.preventDefault();
      fuzzy.feed();
      // affinity+=5;
      // console.log(affinity);
      // return affinity;
    });

    $('#playAgain').click(function(event){
      event.preventDefault();
      fuzzy.feed();
      fuzzy.setHunger(second);

      console.log(fuzzy.foodLevel);
    })

    // tameBear(affinity, tamed);

    $(".poke").click(function(event) {
      event.preventDefault();
      fuzzy.poke(halfSecond);
    });

    $(".sleep").click(function(event) {
      event.preventDefault();
    });

    setInterval(function(){
      fuzzy.didYouGetEaten();
    }, 1000);
  });
});
