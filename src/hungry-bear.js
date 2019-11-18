export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 3; //testing with 3
  }

  setHunger() {
    let hungerCount = setInterval(() => {
      this.foodLevel--;
      if (this.foodLevel === 0) {
        clearInterval(hungerCount);
      }
    }, 1000);
  }

  didYouGetEaten() {
    if(this.foodLevel === 0){
      console.log("Food > 0: ", this.foodLevel);
      // return false;
    } else {
      console.log("Food < 0:", this.foodLevel);
      // return true;
    }
  }

  feed(){
    this.foodLevel = 10;
  }
}
