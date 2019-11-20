export class HungryBear {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10; //testing with 3
    this.anger = false;
    this.sleep = 2;
    this.hungerCount;
    this.sleepCount;
    this.affinity = 0;
    this.tamed = false;
  }

  setHunger() {
    if(this.anger === false){
      this.hungerCount = setInterval(() => {
        this.foodLevel--;
        if (this.foodLevel === 0) {
          clearInterval(this.hungerCount);
        }
      }, 1500);
    }
  }

  didYouGetEaten() {
    if(this.foodLevel > 0){
      return false;
    } else {
      return true;
    }
  }

  feed(){
    this.foodLevel = 10;
    this.anger = true; //tester
    if(this.anger === true){
      clearInterval(this.hungerCount);
      this.hungerCount = setInterval(() => {
        this.foodLevel--;
        if (this.foodLevel <= 0) {
          clearInterval(this.hungerCount);
        }
      }, 1500);
    }
  }

  sleepTimer(){
    this.sleepCount = setInterval(() => {
      this.sleep--;
      if (this.sleep <= 0) {
        clearInterval(this.sleepCount);
      }
    }, 3000);
  }

  poke(){
    this.anger = true; //tester
    if(this.anger === true){
      clearInterval(this.hungerCount);
      this.hungerCount = setInterval(() => {
        this.foodLevel--;
        if (this.foodLevel <= 0) {
          clearInterval(this.hungerCount);
        }
      }, 500);
    }
  }

  tameBear(){
    this.affinity+=5;
    console.log(this.affinity, this.tamed);
    if(this.affinity >= 25){
      this.tamed = true;
      console.log('bear tamed!');
      return this.tamed
    }
    return this.affinity;
  }
}
