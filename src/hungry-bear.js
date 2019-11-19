export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10; //testing with 3
    this.anger = false;
    this.sleep = 20;
    this.hungerCount = "";
  }

  setHunger(time) {
    if(this.anger === false){
      console.log("setHungerAnger:", this.anger);
      // console.log(second, halfSecond);
      this.hungerCount = setInterval(() => {
        this.foodLevel--;
        if (this.foodLevel === 0) {
          clearInterval(this.hungerCount);
        }
      }, time);
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
    this.anger = true; //tester
    if(this.anger === true){
      clearInterval(this.hungerCount);
      console.log("pokeAnger:", this.anger);
      this.hungerCount = setInterval(() => {
        this.foodLevel--;
        console.log("poke()");
        if (this.foodLevel <= 0) {
          clearInterval(this.hungerCount);
        }
      }, 1000);
  }
}


  sleepTimer(time){
    setInterval(() => {
      this.sleep--;
    }, time);
  }

  poke(time){
    this.anger = true; //tester
    if(this.anger === true){
      clearInterval(this.hungerCount);
      console.log("pokeAnger:", this.anger);
      this.hungerCount = setInterval(() => {
        this.foodLevel--;
        console.log("poke()");
        if (this.foodLevel <= 0) {
          clearInterval(this.hungerCount);
        }
      }, time);
      // return this.foodLevel;
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
