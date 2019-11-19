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
    console.log(fuzzy.sleep);
    let userInputted = $("#bearName").val();
    fuzzy.name = userInputted;
    $(".displayBearName").text(userInputted);
    function displayStats () {
      $("#bearHungerDisplay").text(fuzzy.foodLevel);
      if(fuzzy.foodLevel < 5){
        $('#bearHungerDisplay').addClass('warning');
      } else if (fuzzy.foodLevel > 5){
        $('#bearHungerDisplay').removeClass('warning');
      }
      $("#bearSleepDisplay").text(fuzzy.sleep);
      if(fuzzy.sleep < 5){
        $('#bearSleepDisplay').addClass('warning');
      } else if (fuzzy.sleep > 5){
        $('#bearSleepDisplay').removeClass('warning');
      }
    }


    // API Test Beginning
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bIqLJA6iUApAJtFIA72m1RPCMSZQ9UGx&q=bear&limit=25&offset=0&rating=G&lang=en`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('#bearGIF').append(`<img src='${response.data[0].images.downsized_large.url}'></img>`);
      // $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
    // API Test End

    fuzzy.setHunger();
    fuzzy.sleepTimer();

    setInterval(function(){
      displayStats();
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
      fuzzy.tameBear();
    });

    $('#playAgain').click(function(event){
      event.preventDefault();
      fuzzy.feed();
      fuzzy.setHunger();
      console.log(fuzzy.foodLevel);
    })

    $(".poke").click(function(event) {
      event.preventDefault();
      fuzzy.poke();

    });

    $(".sleep").click(function(event) {
      event.preventDefault();
      fuzzy.sleep+=5;
      $(".sleep").fadeOut();
      setTimeout(function(){ $(".sleep").fadeIn(); }, 9000);
    });

    setInterval(function(){
      fuzzy.didYouGetEaten();
    }, 1000);
  });
});
