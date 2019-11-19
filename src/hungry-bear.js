export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 3; //testing with 3
  }

  setHunger(second, halfSecond) {
    let buttonClick = true; //tester
    if(buttonClick === true){
      console.log(second, halfSecond);
      // this.foodLevel = 10;
      let hungerCount = setInterval(() => {
        this.foodLevel--;
        console.log("setHunger()");
        if (this.foodLevel === 0) {
          clearInterval(hungerCount);
        }
      }, second, halfSecond);
    }
  }

  didYouGetEaten() {
    if(this.foodLevel > 0){
      console.log("Food > 0: ", this.foodLevel);
      return false;
    } else {
      console.log("Food < 0:", this.foodLevel);
      return true;
    }
  }

  feed(){
    this.foodLevel = 10;
  }

  poke(time){
    let buttonClick = false; //tester
    if(buttonClick === false){
      let angerLevel = setInterval(() => {
        this.foodLevel--;
        console.log("poke()");
        if (this.foodLevel === 0) {
          clearInterval(angerLevel);
        }
      }, time);
      return this.foodLevel;
    }
  }

  tameBear(affinity, tamed){
    console.log(affinity, tamed);
    if(affinity > 25){
      tamed = true;
      console.log('bear tamed!');
    }
  }
}
